import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import SessionsData from '../../Components/Sessions/SessionsData'

const Sessions = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-12">
        <SessionsData />
      </div>
      <Footer />
    </>
  )
}

export default Sessions
