import { useEffect, useState } from 'react'
import moment from 'moment'

const SessionsData = () => {
  const [sessionsDetails, setSessionsDetails] = useState<any[]>([])

  useEffect(() => {
    fetch('https://sessionize.com/api/v2/kirmfltc/view/Sessions')
      .then((response) => response.json())
      .then((data) => {
        setSessionsDetails(data[0].sessions)
      })
      .catch((error) => console.log(error))
  }, [])
  return (
    <div className="w-1/2 my-0 mx-auto pt-3">
      <div className="flex justify-center items-center flex-col px-5 pb-5">
        <div className="text-2xl lg:text-3xl font-normal text-g-gray-8">
          Schedule for Amazing Sessions
        </div>
        <div className="text-base max-w-2xl w-fit text-center font-light text-g-gray-5 mt-2">
          A community organized cloud conference with industry experts presenting on
          exciting topics! Cloud Community Day is powered by a shared belief that
          when developers come together to exchange ideas, amazing things can happen.
        </div>
      </div>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {sessionsDetails.map((session, id) => (
          <li className="mb-10 ml-6" key={id}>
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <time className="border-2 border-gray-200 w-max p-2 rounded block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {moment(session.startsAt).format('llll')} -{' '}
              {moment(session.endsAt).format('LT')}
            </time>
            <p className="my-0 p-0">{session.speakers[0].name}</p>
            <span className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {session.title}
            </span>

            <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
              {session.description}
            </p>
            <div className="flex space-x-4">
              {session.categories.map((category) =>
                category.categoryItems.map((categoryItem) => (
                  <div className="border-2 border-gray-200 w-max p-2 rounded block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {categoryItem.name}
                  </div>
                ))
              )}
            </div>
            <div className="flex space-x-4">
              <a
                href="#!"
                className="no-underline inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 w-3 h-3"
                  fill="currentColor"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 210 210"
                >
                  <path d="M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40  c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105  S0,162.897,0,105z" />
                </svg>
                Add to Google Calendar
              </a>
              <a
                href="#!"
                className="no-underline inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 w-3 h-3"
                  fill="currentColor"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 291.538 291.538"
                >
                  <path d="M188.373,44.308c10.97-11.744,18.39-28.049,16.359-44.308c-15.804,0.564-34.958,9.277-46.302,21.02   c-10.169,10.396-19.072,27.011-16.696,42.951C159.369,65.164,177.385,56.033,188.373,44.308z M222.03,156.593   c-0.337-36.451,28.859-53.958,30.152-54.804c-16.414-24.753-41.977-28.14-51.081-28.522c-21.767-2.285-42.442,13.182-53.493,13.182   c-11.006,0-28.03-12.882-46.083-12.536c-23.733,0.391-45.601,14.211-57.79,36.114C19.081,154.09,37.416,219.363,61.44,255.104   c11.744,17.497,25.727,37.125,44.089,36.415c17.725-0.71,24.407-11.789,45.792-11.789c21.394,0,27.384,11.789,46.101,11.434   c19.045-0.355,31.098-17.834,42.742-35.386c13.473-20.292,19.027-39.938,19.345-40.93   C259.1,214.611,222.421,200.182,222.03,156.593z" />
                </svg>
                Add to iCal
              </a>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default SessionsData
