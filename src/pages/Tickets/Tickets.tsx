import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db, auth } from '../../services/UserAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getDoc, doc } from 'firebase/firestore'
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage'

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
          // navigate('/ccd2022/rsvp')
        }
      }
    }

    async function TicketID() {
      if (applied) {
        const docRef = doc(db, 'tickets', user.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          var ticketID = docSnap.id
          console.log(docSnap.data().conference)
          const listRef = ref(storage, ticketID + '/')
          listAll(listRef)
            .then((res) => {
              res.items.forEach((itemRef) => {
                getDownloadURL(ref(storage, itemRef.fullPath))
                  .then((url) => {
                    const participant = user.displayName.split(' ')[0]
                    if (itemRef.name === participant + '_conference_pass.png') {
                      setConferencePassTicket(url)
                    } else if (itemRef.name === participant + '_workshop_pass.png') {
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
      <div className="w-3/4 items-center flex flex-col lg:flex-row my-0 mx-auto">
        {conferencePassTicket || workshopPassTicket ? (
          <>
            <div className="w-full lg:w-1/2">
              <a
                href={conferencePassTicket}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={conferencePassTicket} alt="placeholder" />
              </a>
            </div>
            <div className="w-full lg:w-1/2">
              <a href={workshopPassTicket} target="_blank" rel="noopener noreferrer">
                <img src={workshopPassTicket} alt="placeholder" />
              </a>
            </div>
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
