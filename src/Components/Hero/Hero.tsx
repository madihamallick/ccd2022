import Countdown from '../../Components/Countdown/Countdown'
import logo from '../../Images/logo.png'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db, auth, signInWithGoogle } from '../../services/UserAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getDoc, doc } from 'firebase/firestore'

const Hero = () => {
  const [user, loading]: any = useAuthState(auth)
  const [applied, setApplied] = useState(false)
  const [ticket, setTicket] = useState(false)

  const navigate = useNavigate()

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
          // console.log('Accepted!', docSnap.data(), docSnap.id)
          if (docSnap.data().accepted) {
            setTicket(true)
          } else {
            setTicket(false)
          }
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
  }, [user, loading, applied])

  return (
    <>
      <div className="w-3/4 items-center flex flex-col lg:flex-row my-0 mx-auto gap-12 pt-20 lg:py-48">
        <div className="w-full lg:w-1/2">
          <div>
            <p className="text-5xl font-semibold text-blue-500">
              Cloud Community Days 2022
            </p>
            <p className="text-xl py-4">
              A community organized cloud conference with industry experts presenting
              on exciting topics!
            </p>
            <p className="text-xl py-4">Organized By</p>
            <img className="w-2/4" src={logo} alt="Logo" />
            <p className="text-xl py-4 text-lightGrey">
              Dates: 27-28<sup className="mr-0.5">th</sup>August
            </p>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
              {user ? (
                applied ? (
                  ticket ? (
                    <button
                      className="bg-red-500 text-white uppercase font-semibold py-4 rounded"
                      onClick={() => navigate('/ccd2022/dashboard/tickets')}
                    >
                      View Tickets
                    </button>
                  ) : (
                    <button className="bg-black text-white uppercase font-semibold py-4 rounded">
                      Not Accepted
                    </button>
                  )
                ) : (
                  <button
                    className="bg-yellow-500 text-white uppercase font-semibold py-4 rounded"
                    onClick={() => navigate('/ccd2022/rsvp')}
                  >
                    Apply for Ticket
                  </button>
                )
              ) : (
                <button
                  className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white uppercase font-semibold py-4 rounded"
                  onClick={signInWithGoogle}
                >
                  Reserve Your Seat
                </button>
              )}

              <a
                className="transition ease-in-out delay-150 bg-green-600 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-600 duration-300 text-center rounded"
                href="https://sessionize.com/cloud-community-days"
                target={'_blank'}
                rel="noreferrer"
              >
                <button className="text-white uppercase font-semibold py-4 rounded">
                  Become a Speaker
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <Countdown />
        </div>
      </div>
    </>
  )
}

export default Hero
