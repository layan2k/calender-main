/* eslint-disable react/prop-types */
import { useState } from 'react'
import { getMonth, getQuartoHourBlocks, getWeekHours, getWeekOfMonth } from '../util'
import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { useEffect } from 'react'
import Hour from './Hour'

const Week = () => {
  const { daySelected, monthIndex } = useContext(GlobalContext)
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const [currentStartDate, setCurrentStartDate] = useState(getWeekHours())
  const [currentHours, setCurrentHours] = useState(getQuartoHourBlocks())

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex]);

  const ourDaySelectedWeek = getWeekOfMonth(daySelected) - 1


  return (
    <div className='flex flex-1'>
      <div className='flex flex-col flex-1'>

        <div>
          {/* Header with Weekdays */}
          <div className="grid grid-cols-7 grid-rows-1 py-4 border border-l-0 border-b-0 shadow-md">
            {currentMonth[ourDaySelectedWeek].map((day, i) => (
              <span key={i} className='text-sm text-center flex items-center justify-center h-4'>
                {day.format("ddd D")}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-1 overflow-y-scroll">

          {/*Side Bar With hours  */}
          <div className='flex flex-col'>
            <div className='grid grid-cols-1 grid-rows-96 '>
              {currentHours.map((item, kee) => (
                <div className="grid grid-cols-1 grid-rows-4 h-36 " key={kee}>
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
