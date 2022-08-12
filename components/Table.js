import Link from 'next/link'
import Image from 'next/image'
import { BASE_URL } from '../utils/constants'
import Pagination from './Pagination'
import { useState } from 'react'

export default function Table({ tableData: data }) {
	const map = new Map([
		['UNRATED', 'text-[#e8e6e3]'],
		['NEWBIE', 'text-[#988f81]'],
		['PUPIL', 'text-[#72ff72]'],
		['SPECIALIST', 'text-[#57fcf2]'],
		['EXPERT', 'text-[#337dff]'],
		['CANDIDATE master', 'text-[#ff55ff]'],
		['MASTER', 'text-[#ff981a]'],
		['INTERNATIONAL MASTER', 'text-[#ff981a]'],
		['GRANDMASTER', 'text-[#ff1a1a]'],
		['INTERNATIONAL GRANDMASTER', 'text-[#ff1a1a]'],
		['LEGENDARY GRANDMASTER', 'text-[#ff1a1a]'],
	])

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);

	return (
    <>
		<table className="w-[100%] mt-10">
			<thead>
				<tr className="sm:text-[1.4vw] text-[2vw] text-opacity-[60%] text-white text-left sticky z-10 top-[130px] bg-gradient-to-r from-blue1left to-blue1right border-none">
					<th className="w-[7%]  pt-2 pb-6"></th>
					<th className="w-[28%] pt-2 pb-6">HANDLE</th>
					<th className="w-[20%] pt-2 pb-6">RATING (MAX)</th>
					<th className="w-[10%] pt-2 pb-6">DEPT</th>
					<th className="w-[15%] pt-2 pb-6">ADM YEAR</th>
					<th className="w-[20%] pt-2 pb-6 text-center sm:text-left">RANK</th>
				</tr>
			</thead>
			<tbody>
				{(data.slice(rowsPerPage*page, Math.min(rowsPerPage*(page+1), data.length)))
          .map((obj, ind) => (
					<tr
						className={`sm:text-[1.4vw] text-[2vw] ${map.get(obj.rank)} ${
							ind % 2 == 0 ? 'bg-gradient-to-r from-blue2left to-blue2right' : ''
						}`}
						key={obj.handle}
					>
						<td className="w-[7%] py-2 pl-[1vw]">{obj.index}.</td>
						<td className="w-[28%]">
							<div className=" flex items-center my-2">
								<Link href={`/stats/${obj.handle}`}>
									<a>
										<Image src={obj.titlePhoto} height="60" width="60" quality="100" className="rounded-full" />
									</a>
								</Link>
								<div className="pl-[1vw] w-[16vw] text-ellipsis overflow-hidden">
									<a href={`${BASE_URL}profile/${obj.handle}`} target="_blank">
										{obj.rank === 'LEGENDARY GRANDMASTER' ? (
											<>
												<span className="text-white">{obj.handle[0]}</span>
												{obj.handle.slice(1)}
											</>
										) : (
											obj.handle
										)}
									</a>
								</div>
							</div>
						</td>
						<td className="w-[20%] py-2">
							{obj.rating}
							<span className="text-white"> (</span>
							<span className={map.get(obj.maxRank)}>{obj.maxRating}</span>
							<span className="text-white">)</span>
						</td>
						<td className="w-[10%] py-2">{obj.dept}</td>
						<td className="w-[15%] py-2">{obj.year}</td>
						<td className="w-[20%] py-2">{obj.rank}</td>
					</tr>
				))}
			</tbody>
		</table>
		<Pagination
			count={data.length}
			options={[20, 50, {value: 999999, label: 'ALL'}]}
			page={page}
			setPage={setPage}
			rowsPerPage={rowsPerPage}
			setRowsPerPage={setRowsPerPage}
		/>
    </>
	)
}
