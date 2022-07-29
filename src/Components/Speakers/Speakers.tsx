import { useEffect, useState } from 'react'
import Socials from '../Socials/Socials'
import Title from '../Title/Title'
// import speakersData from './speakersData.json'

const Speakers = () => {
  const [speakersDetails, setSpeakersDetails] = useState<any[]>([])

  useEffect(() => {
    fetch('https://sessionize.com/api/v2/kirmfltc/view/Speakers')
      .then((response) => response.json())
      .then((data) => {
        setSpeakersDetails(data)
        console.log(data)
      })
      .catch((error) => console.log(error))
  }, [])

  const imageBorderStyle = {
    // border: '1px solid #eaeaea',
    backgroundImage: `url("https://www.linkpicture.com/q/favicon-1.svg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    margin: '0.8rem'
  }
  return (
    <>
      <Title heading="Our Amazing Speakers" />
      <div
        className="grid sm:grid-cols-1 gap-4 md:grid-cols-3 grid-flow-row place-items-center max-w-7xl mx-auto "
        id="speakers-grid"
      >
        {speakersDetails.map((speaker, id) => (
          <div
            key={id}
            className="flex md:w-3/5 sm:w-100 flex-col rounded-2xl items-center border border-g-gray-8 p-4"
          >
            <img
              style={{
                borderStyle: 'solid',
                borderWidth: '4px',
                borderColor: '#3d82f8 #e5443f #f9b923 #2ea94f'
              }}
              className="inline-block h-36 w-36 rounded-full ring-2 ring-white"
              src={speaker.profilePicture}
              alt=""
            />
            <div className="text-lg font-light mt-4">{speaker.fullName}</div>
            <div className="text-sm font-light mt-2 text-center">
            {speaker.tagLine}
            </div>
            <Socials
              twitterLink={speaker.twitterLink}
              githubLink={speaker.githubLink}
              linkedinLink={speaker.linkedinLink}
              facebookLink={speaker.facebookLink}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Speakers
