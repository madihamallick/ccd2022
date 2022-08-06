import { useState, useEffect } from 'react'
// import logo from '../../Images/logo.png';
import svglogo from '../../Images/logo.svg'
import { auth, logout, signInWithGoogle } from '../../services/UserAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] =useState("Home")
  const [user] = useAuthState(auth)

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
  }, [])

  const toggleNav = () => setIsOpen(!isOpen)

  return (
    <>
      <nav
        className={`${
          scrolled ? 'shadow-lg bg-white/90' : ''
        } z-[100] fixed w-full`}
      >
        <div className="max-w-6xl mx-auto  px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <a href="#!" className="flex items-center px-2 my-1.5">
                  <img src={svglogo} alt="Logo" className="w-80 mr-2" />
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-9">
              <div className="hidden md:flex items-center space-x-9">
                <a
                  href="#home-grid"
                  className= {active==="Home" ? "py-3 px-2 text-googleBlue border-b-4 border-googleBlue font-semibold text-lg" : "py-3 px-2 text-googleBlue font-semibold text-lg"}
                  style={{ textDecoration: 'none' }}
                  onClick={()=>setActive("Home")}
                >
                  Home
                </a>
                <a
                  href="#speakers-grid"
                  className={active==="Speakers" ? "py-3 px-2 text-gray-500 font-semibold hover:text-googleGreen border-b-4 border-googleBlue transition duration-300 text-lg" : "py-3 px-2 text-gray-500 font-semibold hover:text-googleGreen transition duration-300 text-lg"}
                  style={{ textDecoration: 'none' }}
                  onClick={()=>setActive("Speakers")}
                >
                  Speakers
                </a>
                {/*
                <a
                  href="#!"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-googleYellow transition duration-300"
                >
                  Timeline
                </a>
                <a
                  href="#!"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-googleRed transition duration-300"
                >
                  Sponsors
                </a> */}
              </div>
              {user ? (
                <Link to="/ccd2022">
                  <button
                    className="mt-1 py-1.5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-black  px-4 border border-blue-500 hover:border-transparent rounded text-lg"
                    onClick={logout}
                  >
                    Log Out
                  </button>
                </Link>
              ) : (
                <button
                  className="mt-1 py-1.5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-black  px-4 border border-blue-500 hover:border-transparent rounded text-lg"
                  onClick={signInWithGoogle}
                >
                  Login
                </button>
              )}
            </div>

            <div className="md:hidden flex items-center space-x-2">
              {user ? null : (
                <button
                  className="mt-1 py-1.5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-black  px-4 border border-blue-500 hover:border-transparent rounded text-lg"
                  onClick={signInWithGoogle}
                >
                  Login
                </button>
              )}
              <button
                className="outline-none mobile-menu-button"
                onClick={toggleNav}
              >
                <svg
                  className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={`${isOpen === false ? 'hidden' : ''}`} >
          <ul className="bg-white border border-b-2 border-gray-200">
            <li className="active">
              <a
                href="#home-grid"
                className="block text-sm px-2 py-4 text-black font-semibold"
                onClick={() => setIsOpen(false)} 
              >
                Home
              </a>
              <a
                href="#speakers-grid"
                className="block text-sm px-2 py-4 text-black font-semibold"
                onClick={() => setIsOpen(false)} 
              >
                Speakers
              </a>
            </li>
            {user ? (
              <li onClick={logout}>
                <Link to="/ccd2022">
                  <p className="block text-sm px-2 py-4 text-black font-semibold" onClick={() => setIsOpen(false)}>
                    Log Out
                  </p>
                </Link>
              </li>
            ) : (
              ''
            )}

            {/* <li>
              <a
                href="#services"
                className="block text-sm px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300"
              >
                Speakers
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-sm px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300"
              >
                Timeline
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-sm px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300"
              >
                Sponsors
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  )
}
