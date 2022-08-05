import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import SpeakersData from '../../Components/Speakers/SpeakersData'

const SpeakersPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <SpeakersData />
      </div>
      <Footer />
    </>
  )
}

export default SpeakersPage
