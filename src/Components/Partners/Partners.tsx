import Title from '../Title/Title'
// import logo from '../../Images/gdsc-logo.png'
import nseclogo from '../../Images/gdsc-nsec-logo.png'
import ciemlogo from '../../Images/gdsc-ciem-logo.png'
import dscsitlogo from '../../Images/gdsc-dscsit-logo.png'
import gcelogo from '../../Images/gdsc-gce-logo.png'
import gecbsplogo from '../../Images/gdsc-gecbsp-logo.png'
import hitlogo from '../../Images/gdsc-hit-logo.png'
import jiscelogo from '../../Images/gdsc-jisce-logo.png'
import sitlogo from '../../Images/gdsc-sit-logo.png'
import msitlogo from '../../Images/gdsc-msit-logo.png'

const Partners = () => {
  return (
    <div className="w-2/3 my-0 mx-auto">
      <Title heading="Community Partners" />
      <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
        <a
          className="w-full rounded cursor-pointer"
          href="https://dscnsec.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={nseclogo} alt="logo" />
        </a>
        <a
          className="w-full rounded cursor-pointer"
          href="https://dscciem.github.io/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={ciemlogo} alt="logo" />
        </a>
        <a
          className="w-full rounded cursor-pointer"
          href="https://gdscsit2021.github.io/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={sitlogo} alt="logo" />
        </a>
        <a
          className="w-full rounded cursor-pointer"
          href="https://twitter.com/DSC_GCE"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gcelogo} alt="logo" />
        </a>
        <a
          className="w-full rounded cursor-pointer"
          href="https://gdsc.community.dev/events/details/developer-student-clubs-government-engineering-college-bilaspur-presents-intro-to-kaggle-gdsc-gecsp/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gecbsplogo} alt="logo" />
        </a>
        <a
          className="w-full rounded cursor-pointer"
          href="https://dschit.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={hitlogo} alt="logo" />
        </a>
        <a
          className="w-full rounded cursor-pointer"
          href="https://www.linkedin.com/in/gdsc-jisce/?trk=public_profile_browsemap&originalSubdomain=in"
          target="_blank"
          rel="noreferrer"
        >
          <img src={jiscelogo} alt="logo" />
        </a>
        <a
          className="w-full rounded cursor-pointer"
          href="https://gdsc.community.dev/dr-sudhir-chandra-sur-institute-of-technology-sports-complex-kolkata/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={dscsitlogo} alt="logo" />
        </a>
        <a
          className="w-full rounded cursor-pointer"
          href="https://dscmsit.github.io/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={msitlogo} alt="logo" />
        </a>
      </div>
    </div>
  )
}

export default Partners