import Holder from './Holder'
import Nav from './Nav'

export default function App ({data}) {
  return (
    <>
      <Nav />
      <Holder data={data} />
      {/* <Footer /> */}
    </>
  )
}
