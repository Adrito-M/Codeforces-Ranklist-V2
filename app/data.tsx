import { User } from '@/models'
import axiosInstance from '@/utils/axios'
import { RANK, RANK_KEYS, Username } from '@/utils/types'
import axios, { AxiosError } from 'axios'
import { z } from 'zod'

export async function getData(): Promise<Username[]> {
  const query = await User.find({})

  const usernames = query.flatMap(user =>
    user.usernames
      .filter(uname => uname.verified)
      .map(username => ({
        _id: user._id,
        name: user.name,
        email: user.email,
        dept: user.dept,
        adm_yr: user.adm_yr,
        username: username.username,
      }))
  )

  try {
    const {
      data: { result: res },
    } = await axiosInstance.get(
      `/user.info?handles=${usernames.map(user => user.username).join(';')}`
    )

    const DataSchema = z.object({
      handle: z.string(),
      rank: z.string().optional().default('unrated'),
      maxRank: z.string().optional().default('unrated'),
      rating: z.number().optional().default(0),
      maxRating: z.number().optional().default(0),
      titlePhoto: z.string().url(),
      contribution: z.number().optional().default(0),
      friendOfCount: z.number().optional().default(0),
    })
    const zodSchema = z.array(DataSchema)

    const result = zodSchema.parse(res)

    let data: Username[] = []
    for (let i in result) {
      data.push({
        idx: 0,
        handle: result[i].handle,
        rating: result[i].rating,
        maxRating: result[i].maxRating,
        rank: RANK[result[i].rank.toUpperCase().replace(' ', '_') as RANK_KEYS],
        maxRank:
          RANK[result[i].maxRank.toUpperCase().replace(' ', '_') as RANK_KEYS],
        titlePhoto: result[i].titlePhoto,
        dept: usernames[i].dept,
        adm_yr: usernames[i].adm_yr,
        email: usernames[i].email,
        contribution: result[i].contribution,
        friendOfCount: result[i].friendOfCount,
      })
    }

    data.sort((a, b) => b.rating - a.rating || b.maxRating - a.maxRating)
    data.forEach((entry, index) => {
      entry.idx = index + 1
    })

    return data
  } catch (err) {
    if (!(err instanceof AxiosError)) return []
    const comment = err.response?.data.comment
    console.log(comment)
    console.log(err.response?.status)
    console.log(err.response?.statusText)
    console.log(err.response)
    if (
      typeof comment === 'string' &&
      comment.startsWith('handles: User with handle')
    ) {
      const handle = comment.split(' ')[4]
      const users = await User.find({
        'usernames.username': handle,
      })
      let newHandle: string
      try {
        const res = await axios.get(`https://codeforces.com/profile/${handle}`)
        newHandle = res.request.path.split('/').pop()
      } catch (err) {
        return []
      }
      for (let user of users) {
        for (let username of user.usernames) {
          if (username.username === handle) {
            username.username = newHandle
          }
        }
      }
      await Promise.all(users.map(user => user.save()))
    }

    return []
  }
}
