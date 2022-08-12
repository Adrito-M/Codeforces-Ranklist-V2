import App from '../components/App'
import axios from "axios";
import User from '../models/user'
import migratedb from '../utils/migratedb'

export default function Home({ data }) {
  return (
    <App data={data}/>
  )
}


export async function getStaticProps () {
  // await migratedb()
  const users = await User.find({})
  const {data: {result: data}} = await axios.get(`https://codeforces.com/api/user.info?handles=${users.map(user => user.username).join(';')}`)
  data.forEach((entry, index) => {
    if (entry.rating === undefined) {
      entry.rating = 0
      entry.maxRating = 0
      entry.rank = 'unrated'
      entry.maxRank = 'unrated'
    }
    entry.name = users[index].name
    entry.dept = users[index].dept.toUpperCase()
    entry.year = '20'+users[index].adm_yr
    entry.email = users[index].email
    entry.rank = entry.rank.toUpperCase()
    entry.maxRank = entry.maxRank.toUpperCase()
  })
  data.sort((a, b) => (b.rating - a.rating) || (b.maxRating - a.maxRating))
  data.forEach((entry, index) => {
    entry.index = index+1
  })
  return {
    props: { 
      data,
    },
    revalidate: 10,
  }
}