import { User } from '@/models'

export enum RANK {
  UNRATED = 'UNRATED',
  NEWBIE = 'NEWBIE',
  PUPIL = 'PUPIL',
  SPECIALIST = 'SPECIALIST',
  EXPERT = 'EXPERT',
  CANDIDATE_MASTER = 'CANDIDATE MASTER',
  MASTER = 'MASTER',
  INTERNATIONAL_MASTER = 'INTERNATIONAL MASTER',
  GRANDMASTER = 'GRANDMASTER',
  INTERNATIONAL_GRANDMASTER = 'INTERNATIONAL GRANDMASTER',
  LEGENDARY_GRANDMASTER = 'LEGENDARY GRANDMASTER',
}

export type Username = {
  idx: number
  handle: string
  rating: number
  maxRating: number
  rank: RANK
  maxRank: RANK
  titlePhoto: string
  dept: string
  adm_yr: number
  email: string
}

export type RANK_LITERALS =
  | 'unrated'
  | 'newbie'
  | 'pupil'
  | 'specialist'
  | 'expert'
  | 'candidate master'
  | 'master'
  | 'international master'
  | 'grandmaster'
  | 'international grandmaster'
  | 'legendary grandmaster'

type Replace<
  T extends string,
  S extends string,
  D extends string,
  A extends string = ''
> = T extends `${infer L}${S}${infer R}`
  ? Replace<R, S, D, `${A}${L}${D}`>
  : `${A}${T}`

export type RANK_KEYS = Uppercase<Replace<RANK, ' ', '_'>>
// export type { Username, RANK, RANK_COLOR }

export type IUser = NonNullable<Awaited<ReturnType<typeof User.findOne>>>
