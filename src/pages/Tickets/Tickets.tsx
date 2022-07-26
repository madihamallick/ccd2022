import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db, auth } from '../../services/UserAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getDoc, doc } from 'firebase/firestore'
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage'
import Title from '../../Components/Title/Title'

const Tickets = () => {
  const [user, loading]: any = useAuthState(auth)
  const [applied, setApplied] = useState(false)
  const [conferencePassTicket, setConferencePassTicket] = useState('')
  const [workshopPassTicket, setworkshopPassTicket] = useState('')

  const navigate = useNavigate()

  const storage = getStorage()

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return
    }

    async function DocumentID() {
      if (user) {
        const docRef = doc(db, 'register', user.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setApplied(true)
          // navigate('/ccd2022/dashboard')
        } else {
          // console.log('No such document!')
          navigate('/ccd2022')
        }
      }
    }

    async function TicketID() {
      if (applied) {
        const docRef = doc(db, 'tickets', user.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          console.log(docSnap.data().conference)
          const listRef = ref(storage, user.uid + '/')
          listAll(listRef)
            .then((res) => {
              res.items.forEach((itemRef) => {
                getDownloadURL(ref(storage, itemRef.fullPath))
                  .then((url) => {
                    const participant = user.displayName.split(' ')[0]
                    if (docSnap.data().conference) {
                      setConferencePassTicket(url)
                    }
                    if (docSnap.data().workshop) {
                      setworkshopPassTicket(url)
                    }
                  })
                  .catch((error) => {
                    console.log('error', error)
                  })
              })
            })
            .catch((error) => {
              console.log('error', error)
            })
        } else {
          console.log('No such document!')
          navigate('/ccd2022')
        }
      }
    }

    if (user) {
      DocumentID()
    }

    if (applied) {
      TicketID()
    }
  }, [user, loading, applied, storage])

  return (
    <>
      <Title heading="Tickets" />
      <p className="mb-4 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
        Congratulations on making it through hundreds of applications! <br />
        We look forward to see you at the Cloud Community Days.
      </p>
      <p className="mb-8 lg:mb-16 font-light text-center text-red-600 sm:text-xl">
        Workshop passes will start rolling out from 9 August. <br />
        Check here after 9 August for your Workshop pass.
      </p>
      <div className="w-3/4 items-center flex flex-col lg:flex-row my-0 mx-auto">
        {conferencePassTicket || workshopPassTicket ? (
          <>

            {conferencePassTicket ?
              <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href={conferencePassTicket} target="_blank" rel="noopener noreferrer">
                  <img className="rounded-t-lg" src={conferencePassTicket} alt="Conference Pass" />
                </a>
                <div className="p-5 pt-0">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Conference Pass</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">

                    &#128197; 28 August, 2022 <br />
                    &#128205; Taal Kutir Convention Center, Kolkata
                  </p>
                  <a href={conferencePassTicket} target="_blank" rel="noopener noreferrer" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Download
                  </a>
                </div>
              </div>
              : <></>
            }
            {
              workshopPassTicket ? <div className="w-full lg:w-1/2">
                <a href={workshopPassTicket} target="_blank" rel="noopener noreferrer">
                  <img src={workshopPassTicket} alt="placeholder" />
                </a>
              </div> : <></>
            }

          </>
        ) : (
          <div className="w-full my-0 mx-auto py-48">
            <div className="flex justify-center items-center">
              <div
                className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="text-center">
        <button className="btn btn-primary my-4" onClick={() => navigate('/')}>
          Go Home
        </button>
      </div>
    </>
  )
}

export default Tickets
