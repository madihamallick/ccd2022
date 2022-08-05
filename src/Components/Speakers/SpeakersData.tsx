import { useEffect, useState } from 'react'
import Socials from '../Socials/Socials'

const SpeakersData = () => {
  const [speakersDetails, setSpeakersDetails] = useState<any[]>([])

  useEffect(() => {
    fetch('https://sessionize.com/api/v2/kirmfltc/view/Speakers')
      .then((response) => response.json())
      .then((data) => {
        setSpeakersDetails(data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className="flex justify-center items-center flex-col px-5 pt-5">
      <div className="text-2xl lg:text-3xl font-normal text-g-gray-8">
        Our Amazing Speakers
      </div>
      <div className="text-base max-w-2xl w-fit text-center font-light text-g-gray-5 mt-2">
        Hear from the Professionals who are building the future of cloud. Our
        speakers are influential folks & allies who have been associated with
        communities within their organisations, cities, country and beyond.
      </div>
      <div className="w-4/6">
        {speakersDetails.map((speaker, id) => (
          <div
            className="w-full border-1 border-gray-200 rounded shadow my-4 p-4 hover:bg-slate-50 hover:cursor-pointer"
            key={id}
          >
            <div className="flex space-x-2">
              <img
                src={speaker.profilePicture}
                className="h-20 w-20 rounded-full"
                alt={speaker.firstName}
              />
              <span>
                <p className="m-0 p-0 text-xl font-semibold">
                  {speaker.firstName} {speaker.lastName}
                </p>
                <p className="m-0 p-0 text-md font-medium">{speaker.tagLine}</p>
                <Socials links={[...speaker?.links]} />
              </span>
            </div>
            <div className="">
              <p className="">{speaker.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpeakersData
