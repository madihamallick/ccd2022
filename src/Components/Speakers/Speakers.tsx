import { useEffect, useState } from 'react'
import { Socials } from '../Socials/Socials'
import Title from '../Title/Title'

const Speakers = () => {
  const [speakersDetails, setSpeakersDetails] = useState<any[]>([])
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData]: any = useState([])

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
              onClick={() => {
                setModalData(speaker)
                setShowModal(true)
              }}
            >
              <div style={imageBorderStyle}>
                <img
                  src={speaker.profilePicture}
                  alt="profile"
                  className="rounded-full m-2.5 w-40 h-40"
                />
              </div>
              <h3 className="text-xl font-bold">{speaker.fullName}</h3>
              <h3 className="text-sm text-center text-lightGrey font-semibold ">
                {speaker.tagLine}
              </h3>

              <Socials links={[...speaker?.links]} className="absolute bottom-4" />
            </div>
          ))}

        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex mr-16 justify-between">
                    <div className="items-start justify-between px-5 pt-4 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        {modalData.fullName}
                      </h3>
                      <p>{modalData.tagLine}</p>
                    </div>
                    <div>
                      <img
                        className="rounded-full m-4 w-28 h-28"
                        src={modalData.profilePicture}
                        alt="profile"
                      />
                    </div>
                  </div>

                  <div className="relative px-6 py-2 flex-auto">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      {modalData.bio}
                    </p>
                    <div className="pt-10">
                      <Socials
                        links={[...modalData?.links]}
                        className="absolute bottom-4"
                      />
                    </div>
                  </div>

                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </>
  )
}

export default Speakers
