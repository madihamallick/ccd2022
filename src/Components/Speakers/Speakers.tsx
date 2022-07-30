import { useEffect, useState } from 'react'
import Socials from '../Socials/Socials'
import Title from '../Title/Title'
// import speakersData from './speakersData.json'

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
        {speakersDetails.map((speaker, id) => (
          <div
            key={id}
            className="flex md:w-3/5 sm:w-100 flex-col rounded-2xl items-center border border-g-gray-8 p-4"
            onClick={() => {
              setModalData(speaker)
              setShowModal(true)
            }}
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
          </div>))
        }
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
