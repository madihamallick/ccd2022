import { useEffect, useState } from 'react'
import {Socials} from '../Socials/Socials'
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
        className="grid 
        sm:grid-cols-1 md:grid-cols-3 grid-flow-row place-items-center p-5 lg:grid-cols-4"
        id="speakers-grid"
      >
        {speakersDetails &&
          speakersDetails.map((speaker) => (
            <div
              key={speaker.id}
              className="flex sm:w-100 flex-col rounded-xl items-center mb-4 shadow-lg md:w-5/6 p-3 h-96 relative"
            >
              <div style={imageBorderStyle}>
                <img
                  src={speaker.profilePicture}
                  alt="profile"
                  className="rounded-full m-2.5 w-40 h-40 "
                />
              </div>
              <h3 className="text-xl font-bold">{speaker.fullName}</h3>
              <h3 className="text-sm text-center text-lightGrey font-semibold ">
                {speaker.tagLine}
              </h3>
              {/* <div className=" overflow-y-hidden">
                <p className="text-sm text-lightGrey text-center py-3 ">
                  {speaker.bio}
                </p>
          </div> */}
              <Socials links={[...speaker?.links]} className="absolute bottom-4" />
            </div>
          ))}
      </div>
    </>
  )
}

export default Speakers
