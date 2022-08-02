import Link from 'next/link'
export default function Table({ data }) {
  const map = new Map([
    ['unrated', 'text-[#e8e6e3]'],
    ['newbie', 'text-[#988f81]'],
    ['pupil', 'text-[#72ff72]'],
    ['specialist', 'text-[#57fcf2]'],
    ['expert', 'text-[#337dff]'],
    ['candidate master', 'text-[#ff55ff]'],
    ['master', 'text-[#ff981a]'],
    ['international master', 'text-[#ff981a]'],
    ['grandmaster', 'text-[#ff1a1a]'],
    ['international grandmaster', 'text-[#ff1a1a]'],
    ['legendary grandmaster', 'text-[#ff1a1a]']
  ])
	return (
		<table className="w-[100%] mt-10">
			<thead>
				<tr className="sm:text-[1.4vw] text-[2vw] text-opacity-[60%] text-white text-left">
					<th className="w-[7%]  pb-6"></th>
					<th className="w-[28%] pb-6">HANDLE</th>
					<th className="w-[20%] pb-6">RATING (MAX)</th>
					<th className="w-[10%] pb-6">DEPT</th>
					<th className="w-[15%] pb-6">ADM YEAR</th>
					<th className="w-[20%] pb-6 text-center sm:text-left">RANK</th>
				</tr>
			</thead>
			<tbody>
				{data.result.map((obj, ind) => (
					<tr className={`sm:text-[1.4vw] text-[2vw] ${map.get(obj.rank)} ${ind % 2 == 0 ? 'bg-gradient-to-r from-blue2left to-blue2right' : ''}`} key={obj.handle}>
						<td className="w-[7%] py-2 pl-[1vw]">{ind+1}.</td>
						<td className="w-[28%]">
							<div className=" flex items-center my-2">
								<Link href="/stats">
									<a>
										<img
											src={obj.titlePhoto}
											className="w-[4vw] h-[4vw] rounded-full"
										/>
									</a>
								</Link>
								<a href="http://www.youtube.com" target="_blank">
									<span className="pl-[1vw]">{obj.handle}</span>
								</a>
							</div>
						</td>
						<td className="w-[20%] py-2">{obj.rating}<span className='text-white'> (</span><span className={map.get(obj.maxRank)}>{obj.maxRating}</span><span className='text-white'>)</span></td>
						<td className="w-[10%] py-2">CSE</td>
						<td className="w-[15%] py-2">2019</td>
						<td className="w-[20%] py-2">{obj.rank.toUpperCase()}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
