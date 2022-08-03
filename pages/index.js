import App from '../components/App'
import axios from "axios";

export default function Home({ data }) {
  return (
    <App data={data}/>
  )
}


export async function getStaticProps () {
  const {data} = await axios.get('https://codeforces.com/api/user.info?handles=DmitriyH;Fefer_Ivan;MadRat_0;tourist;demoralizer;sv1shan;kingmessi;itz_archit;chitransh_itbhu_6102003')
  data.result.sort((a, b) => b.rating - a.rating)
  return {
      props: { data }
  }
}