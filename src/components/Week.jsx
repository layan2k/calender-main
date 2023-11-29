import dayjs from 'dayjs'
import { useState } from 'react'
import {  getMonth, getWeekOfMonth } from '../util'
import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { useEffect } from 'react'

const Week = () => {
  const { daySelected, monthIndex } = useContext(GlobalContext)
  const [currentMonth, setCurrentMonth] = useState(getMonth())

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex]);

  const ourDaySelectedWeek = getWeekOfMonth(daySelected) - 1

  console.log(ourDaySelectedWeek)

  return (
    <div className='flex flex-1'>
      <div>
        Hello
      </div>
    <div className='flex flex-col flex-1'>
        <div className="grid grid-cols-7 grid-rows-1 py-4 border border-b-0 shadow-md">
        {currentMonth[ourDaySelectedWeek].map((day, i) => (
            <span key={i} className='text-sm text-center flex items-center justify-center h-4'>
        {day.format("ddd D")}
        </span>
        ))}
            </div>
      </div>
      </div>
  )
}

export default Week