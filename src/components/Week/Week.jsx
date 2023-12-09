/* eslint-disable react/prop-types */
import { useState } from 'react'
import {  getQuartoHourBlocks, getWeekDays, getWeekHours } from '../../util'
import { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'
import { useEffect } from 'react'
import Hour from './Hour'
import dayjs from 'dayjs'

const Week = () => {
  const { daySelected } = useContext(GlobalContext)
  const [currentMonth, setCurrentMonth] = useState(getWeekDays())
  const [currentStartDate, setCurrentStartDate] = useState(getWeekHours())
  const [currentHours, setCurrentHours] = useState(getQuartoHourBlocks())

  useEffect(() => {
    setCurrentStartDate(getWeekHours(daySelected))
    setCurrentHours(getQuartoHourBlocks(daySelected))
    setCurrentMonth(getWeekDays(daySelected))
  }, [daySelected])

  const getSelectedDate = () => {
    return daySelected.format('ddd D')
  }

  const selDay = getSelectedDate()
  const todayDate = dayjs()


  return (
    <div className='flex flex-1 animate__backOutLeft animate__backInRight'>
      <div className='flex flex-col flex-1'>

        <div>
          {/* Header with Weekdays */}
          <div className="grid grid-cols-7 grid-rows-1 py-4 border border-l-0 border-b-0 shadow-md pl-16">
            {currentMonth.map((day, i) => (
              <span key={i} className={`week text-sm text-center flex items-center justify-center h-4 ${day === selDay && 'text-blue-800'}`}>
                {todayDate.format('ddd D') === day && 'Today'}
                <br/>
                { day }
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-1 overflow-y-scroll">

          {/*Side Bar With hours  */}
          <div className='flex flex-col'>
            <div className='grid grid-cols-1 grid-rows-96 '>
              {currentHours.map((item, kee) => (
                <div className="grid grid-cols-1 grid-rows-4 h-32 " key={kee}>
                  {item.map((hrs, kd) => (
                    <div className={`flex justify-center items-start cursor-pointer text-xs px-3 font-semibold text-black `} key={kd} >
                      {kd === 0 ? hrs : " "}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Hours In a Day */}
          <div className="grid grid-cols-7 grid-rows-96 flex-1">
            {currentStartDate.map((week, ind) => (
              <div key={ind}>
                {week.map((hour, idl) => (
                  <span key={idl}>
                    <Hour hour={hour} />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  )
}

export default Week
