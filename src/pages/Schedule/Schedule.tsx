import { useEffect, useRef, useState } from 'react'
import sessionData from './schedule.json'

const Sessions = () => {
  const [day, setDay] = useState(1)
  const [containerHeight, setContainerHeight] = useState('auto')
  const dayOneSessionData = sessionData[0]
  const dayTwoSessionData = sessionData[1]

  const day1: any = useRef(null)
  const day2: any = useRef(null)

  const getTime = (_time) => {
    const d = new Date(_time)
    const hour =
      d.getHours() === 0 ? 12 : d.getHours() > 12 ? d.getHours() - 12 : d.getHours()
    const min = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
    const ampm = d.getHours() < 12 ? 'AM' : 'PM'
    const time = hour + ':' + min + ' ' + ampm
    return time
  }

  useEffect(() => {
    if (day === 1) {
      setContainerHeight(day1.current.clientHeight + 'px')
    } else {
      setContainerHeight(day2.current.clientHeight + 'px')
    }
  }, [day])

  return (
    <>
      <div className="w-full max-w-7xl items-center justify-center flex flex-col lg:flex-row my-0 mx-auto gap-12 pt-20 lg:pt-28 lg:pb-[62px] px-4">
        <div className="w-full">
          <div className="text-6xl text-g-gray-8 mb-8 font-light">Schedule</div>
          {/* <div className="text-xl text-g-gray-8 w-4/5 mt-4 mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            dignissimos recusandae incidunt, sequi quisquam, nulla cumque debitis
            temporibus quam aliquid vero distinctio possimus minus tempore!
          </div> */}
          <div className="h-10 lg:h-14 w-full border-b-[1px] border-g-gray-3 flex gap-5 my-5">
            <div
              className={
                'text-xl lg:text-2xl font-light px-8 h-full cursor-pointer' +
                (day === 1 ? ' border-b-[2px] border-g-blue-3' : '')
              }
              onClick={() => {
                setDay(1)
              }}
            >
              Day 1
            </div>
            <div
              className={
                'text-xl lg:text-2xl font-light px-8 h-full cursor-pointer' +
                (day === 2 ? ' border-b-[2px] border-g-blue-3' : '')
              }
              onClick={() => {
                setDay(2)
              }}
            >
              Day 2
            </div>
          </div>
          <div className="container1" style={{ height: containerHeight }}>
            <div
              ref={day1}
              id="fade-in1"
              className={'box' + (day === 1 ? '' : ' inactive')}
            >
              {dayOneSessionData.timeSlots.map((session: any) => {
                const info = session['rooms'][0].session
                const name = info.title
                const startTime = getTime(info.startsAt)
                const endTime = getTime(info.endsAt)
                const description = info.description
                const speakerName = info.speakers[0]?.name
                const speakerImage = info.speakers[0]?.profilePicture
                const technologies = info.categories.find(
                  (c) => c.name === 'Technology'
                )?.categoryItems
                return (
                  <div className="flex w-full lg:w-auto ">
                    <div className="w-3/10 lg:w-1/5 border-b-[1px] lg:border-r-[0px] lg:border-r-[1px] border-g-gray-3 flex flex-col items-end px-3 py-3 text-right lg:text-start">
                      <div className="text-base lg:text-xl"> {startTime}</div>
                      <div className="text-xs lg:text-sm font-light">{endTime}</div>
                      <div className="mt-1 text-[8px] lg:text-xs">GMT (+05:30)</div>
                    </div>
                    <div className="w-7/10 lg:w-4/5 flex flex-col p-3 border-b-[1px] border-g-gray-3 grow">
                      <div className="text-2xl font-light">{name}</div>
                      {speakerName && (
                        <div className="flex items-center my-2 p-1 border-1 border-g-blue-3 w-fit rounded-full bg-g-blue-3 text-white">
                          <img
                            className="inline-block h-5 w-5 rounded-full ring-2 ring-white"
                            src={speakerImage}
                            alt=""
                          />
                          <span className="text-xs ml-2  ">{speakerName}</span>
                        </div>
                      )}

                      {description && (
                        <div className="text-base font-light">{description}</div>
                      )}
                      {technologies && (
                        <div className="flex items-center flex-wrap gap-2 my-2">
                          {technologies.map((tech) => {
                            return (
                              <div className="text-xs border-1 border-g-gray-5 bg-g-gray-1 rounded-full px-2 py-1 w-fit">
                                {tech.name}
                              </div>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
            <div
              ref={day2}
              id="fade-in2"
              className={'box' + (day === 2 ? ' active' : '')}
            >
              {dayTwoSessionData.timeSlots.map((slot: any) => {
                const info = slot['rooms'][0].session
                const name = info.title
                const startTime = getTime(info.startsAt)
                const endTime = getTime(info.endsAt)
                const description = info.description
                const speakerName = info.speakers[0]?.name
                const speakerImage = info.speakers[0]?.profilePicture
                const technologies = info.categories.find(
                  (c) => c.name === 'Technology'
                )?.categoryItems
                return (
                  <div className="flex w-full lg:w-auto ">
                    <div className="w-3/10 lg:w-1/5 border-b-[1px] lg:border-r-[0px] lg:border-r-[1px] border-g-gray-3 flex flex-col items-end px-3 py-3 text-right lg:text-start">
                      <div className="text-base lg:text-xl"> {startTime}</div>
                      <div className="text-xs lg:text-sm font-light">{endTime}</div>
                      <div className="mt-1 text-[8px] lg:text-xs">GMT (+05:30)</div>
                    </div>
                    <div className="w-7/10 lg:w-4/5 flex flex-col p-3 border-b-[1px] border-g-gray-3 grow">
                      <div className="text-2xl font-light">{name}</div>
                      {speakerName && (
                        <div className="flex items-center my-2 p-1 border-1 border-g-blue-3 w-fit rounded-full bg-g-blue-3 text-white">
                          <img
                            className="inline-block h-5 w-5 rounded-full ring-2 ring-white"
                            src={speakerImage}
                            alt=""
                          />
                          <span className="text-xs ml-2  ">{speakerName}</span>
                        </div>
                      )}

                      {description && (
                        <div className="text-base font-light">{description}</div>
                      )}
                      {technologies && (
                        <div className="flex items-center flex-wrap gap-2 my-2">
                          {technologies.map((tech) => {
                            return (
                              <div className="text-xs border-1 border-g-gray-5 bg-g-gray-1 rounded-full px-2 py-1 w-fit">
                                {tech.name}
                              </div>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sessions
