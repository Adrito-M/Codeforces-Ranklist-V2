import Link from "next/link";
import Image from "next/image";
export default function Table() {
  return (
    <table className="w-[100%] mt-10">
        <thead>
            <tr className="sm:text-[1.4vw] text-[2vw] text-opacity-[60%] text-white text-left">
                <th className="w-[7%]  pb-6">SNO</th>
                <th className="w-[28%] pb-6">HANDLE</th>
                <th className="w-[20%] pb-6">RATING (MAX)</th>
                <th className="w-[10%] pb-6">DEPT</th>
                <th className="w-[15%] pb-6">ADM YEAR</th>
                <th className="w-[20%] pb-6">RANK</th>
            </tr>
        </thead>
        <tbody>
            <tr className="sm:text-[1.4vw] text-[2vw] text-opacity-[60%] text-white ">
                <td className="w-[7%] py-2 pl-4">1.</td>
                <td className="w-[28%] py-2 grid grid-cols-2 items-center">
                    <Link href="/stats">
                    <a><img src="https://cdn-userpic.codeforces.com/1592/title/27e43714e4bea090.jpg" className="w-[4vw] rounded-full"/></a>
                    </Link>
                    <a href="http://www.youtube.com" target="_blank"><span className="pl-4">rivalq</span></a>
                </td>
                <td className="w-[20%] py-2">2000 (3000)</td>
                <td className="w-[10%] py-2">CSE</td>
                <td className="w-[15%] py-2">2019</td>
                <td className="w-[20%] py-2">INTERNATIONAL GRANDMASTER</td>
            </tr>
            <tr className="sm:text-[1.4vw] text-[2vw] text-opacity-[60%] text-white bg-gradient-to-r from-blue2left to-blue2right">
                <td className="w-[7%] py-2 pl-4">1.</td>
                <td className="w-[28%] py-2">rivalq</td>
                <td className="w-[20%] py-2">2000 (3000)</td>
                <td className="w-[10%] py-2">CSE</td>
                <td className="w-[15%] py-2">2019</td>
                <td className="w-[20%] py-2">INTERNATIONAL GRANDMASTER</td>
            </tr>
        </tbody>
    </table>
  )
}
