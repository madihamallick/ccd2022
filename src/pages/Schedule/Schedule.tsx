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
          <div className="h-14 w-full border-b-[1px] border-g-gray-3 flex gap-5 mb-5">
            <div
              className={
                'text-2xl font-light px-8 h-full cursor-pointer' +
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
                'text-2xl font-light px-8 h-full cursor-pointer' +
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
                const name = session['rooms'][0].session.title
                const startTime = getTime(session['rooms'][0].session.startsAt)
                const endTime = getTime(session['rooms'][0].session.endsAt)
                const description = session['rooms'][0].session.description
                return (
                  <div className="flex">
                    <div className="w-1/5 border-b-[1px] border-r-[1px] border-g-gray-3 flex flex-col items-end px-3 py-3">
                      <div className="text-xl"> {startTime}</div>
                      <div className="text-sm font-light">{endTime}</div>
                      <div className="mt-1 text-xs">GMT (+05:30)</div>
                    </div>
                    <div className="w-4/5 flex flex-col p-3 border-b-[1px] border-g-gray-3">
                      <div className="text-2xl font-light">{name}</div>
                      {description && (
                        <div className="text-base font-light">{description}</div>
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
              {dayTwoSessionData.timeSlots.map((session: any) => {
                const name = session['rooms'][0].session.title
                const startTime = getTime(session['rooms'][0].session.startsAt)
                const endTime = getTime(session['rooms'][0].session.endsAt)
                const description = session['rooms'][0].session.description
                return (
                  <div className="flex">
                    <div className="w-1/5 border-b-[1px] border-r-[1px] border-g-gray-3 flex flex-col items-end px-3 py-3">
                      <div className="text-xl"> {startTime}</div>
                      <div className="text-sm font-light">{endTime}</div>
                      <div className="mt-1 text-xs">GMT (+05:30)</div>
                    </div>
                    <div className="w-4/5 flex flex-col p-3 border-b-[1px] border-g-gray-3">
                      <div className="text-2xl font-light">{name}</div>

                      {description && (
                        <div className="text-base font-light">{description}</div>
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
