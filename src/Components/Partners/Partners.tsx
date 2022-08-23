import Title from '../Title/Title'
// import logo from '../../Images/gdsc-logo.png'

import partnersData from './Partners.json'

const Partners = () => {
  return (
    <div className="max-w-7xl my-16 mx-auto">
      <div className="flex justify-center md:justify-start text-2xl lg:text-xl font-light text-g-blue-3">
        Community Partners
      </div>
      <div className=" w-fit my-4 space-y-2 lg:space-y-0 lg:gap-4 lg:grid lg:grid-cols-5 mx-handler">
        {partnersData.map((partner, index) => {
          return (
            <a
              className="w-fit rounded cursor- pointer"
              href={partner.link}
              target="_blank"
              rel="noreferrer"
            >
              <img src={partner.logo} alt="logo" className="w-[220px]" />
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Partners
