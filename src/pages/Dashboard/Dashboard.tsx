import Hero from '../../Components/Hero/Hero'
// import Speakers from '../../Components/Speakers/Speakers'
// import Team from '../../Components/Teams/Teams'
import FAQ from '../../Components/FAQ/FAQ'
import Sponsors from '../../Components/Sponsors/Sponsors'
import About from '../../Components/About/About'
import Coc from '../../Components/Coc/Coc'

const Dashboard = () => {
  return (
    <>
      <Hero />
      <About />
      {/* <Speakers /> */}
      {/* <Team /> */}
      <Coc />
      <FAQ />
      <Sponsors />
    </>
  )
}

export default Dashboard
