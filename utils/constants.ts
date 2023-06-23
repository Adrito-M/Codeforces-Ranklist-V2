import { RANK } from '@/utils/types'

export const BASE_URL = 'https://codeforces.com/'
export const API_URL = BASE_URL + 'api/'

export const rankColor = new Map<RANK, string>([
  [RANK.UNRATED, 'text-[#e8e6e3]'],
  [RANK.NEWBIE, 'text-[#988f81]'],
  [RANK.PUPIL, 'text-[#72ff72]'],
  [RANK.SPECIALIST, 'text-[#57fcf2]'],
  [RANK.EXPERT, 'text-[#337dff]'],
  [RANK.CANDIDATE_MASTER, 'text-[#ff55ff]'],
  [RANK.MASTER, 'text-[#ff981a]'],
  [RANK.INTERNATIONAL_MASTER, 'text-[#ff981a]'],
  [RANK.GRANDMASTER, 'text-[#ff1a1a]'],
  [RANK.INTERNATIONAL_GRANDMASTER, 'text-[#ff1a1a]'],
  [RANK.LEGENDARY_GRANDMASTER, 'text-[#ff1a1a]'],
])

export const departments = [
  { label: 'BME', longLabel: 'Biomedical Engineering', value: 'bme' },
  { label: 'CER', longLabel: 'Ceramic Engineering', value: 'cer' },
  {
    label: 'CHE',
    longLabel: 'Chemical Engineering & Technology',
    value: 'che',
  },
  { label: 'CHY', longLabel: 'Chemistry', value: 'chy' },
  { label: 'CIV', longLabel: 'Civil Engineering', value: 'civ' },
  { label: 'CSE', longLabel: 'Computer Science', value: 'cse' },
  { label: 'EEE', longLabel: 'Electrical Engineering', value: 'eee' },
  { label: 'ECE', longLabel: 'Electronics Engineering', value: 'ece' },
  {
    label: 'MST',
    longLabel: 'Material Science & Technology',
    value: 'mst',
  },
  { label: 'MNC', longLabel: 'Mathematics & Computing', value: 'mat' },
  { label: 'MEC', longLabel: 'Mechanical Engineering', value: 'mec' },
  { label: 'MET', longLabel: 'Metallurgical Engineering', value: 'met' },
  { label: 'MIN', longLabel: 'Mining Engineering', value: 'min' },
  {
    label: 'PHE',
    longLabel: 'Pharmaceutical Engineering',
    value: 'phe',
  },
  { label: 'PHY', longLabel: 'Physics', value: 'phy' },
  {
    label: 'APD',
    longLabel: 'Architechture, Planning & Design',
    value: 'apd',
  },
]

// export const departmentOptions = [
//   'bme',
//   'cer',
//   'che',
//   'chy',
//   'civ',
//   'cse',
//   'eee',
//   'ece',
//   'mst',
//   'mat',
//   'mec',
//   'met',
//   'min',
//   'phe',
//   'phy',
//   'apd',
// ] as const
