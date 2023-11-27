import dayjs from 'dayjs'
import React, { useState, useEffect, useContext } from 'react'
import { getMonth } from '../util'
import GlobalContext from '../context/GlobalContext'
import { AiOutlineLeft, AiOutlineRight,  } from "react-icons/ai";

const SmallCalender = () => {
    const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month())
    const [currentMonth, setCurrentMonth] = useState(getMonth())

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIdx))
    }, [currentMonthIdx]);

    const { monthIndex, daySelected, setSmallCalendarMonth, setDaySelected,  } = useContext(GlobalContext)

    useEffect(() => {
        setCurrentMonthIdx(monthIndex)
    }, [monthIndex])


    const handlePrevMonth = () => {
        setCurrentMonthIdx(currentMonthIdx - 1 )
    }
    const handleNextMonth = () => {
        setCurrentMonthIdx(currentMonthIdx + 1)
    }

    const getDayClass = (day) => {
        const format = "DD-MM-YY"
        const nowDay = dayjs().format(format)
        const currDay = day.format(format)
        const slcDay = daySelected && daySelected.format(format)
        return nowDay === currDay ? 'bg-blue-500 text-white rounded-full ': (currDay == slcDay ? "bg-blue-100 rounded-full text-blue-600 font-bold" : "")
    }

    const getMonthClass = (day) => {
        const format = "MM"
        const nowMonth = dayjs().format(format)
        const currMonth = day.format(format)


        return nowMonth === currMonth ? 'text-black' : 'text-gray-300'
    }
return (
    <div className='mt-9 '>
        <header className="flex justify-between items-center">
            <p className="text-gray-500 font-bold">
                {dayjs(new Date(dayjs().year(), currentMonthIdx)).format('MMMM YYYY')}
            </p>
            <div>
            <button onClick={handlePrevMonth} className=''>
                <span className='material-icons-outlines cursor-pointer text-gray-600 mx-2'>
                    <AiOutlineLeft />
                </span>
            </button>
            <button onClick={ handleNextMonth} className=''>
                <span className='cursor-pointer text-gray-600  mx-2'>
                    <AiOutlineRight />
                </span>
            </button>
            </div>
        </header>
            <div className="grid grid-cols-7 grid-rows-6">
                {currentMonth[0].map((day, i) => (
                <span key={i} className='text-sm py-1 text-center'>
                {day.format('dd').charAt(0)}
                </span>
                ))}
            {currentMonth.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((day, idx) => (
                        <button onClick={() => {
                            setSmallCalendarMonth(currentMonthIdx)
                            setDaySelected(day)
                        }} key={idx} className={`py-1 w-full ${getDayClass(day)} ${getMonthClass(day)}`}>
                            <span className='text-sm'>
                                {day.format('D')}
                            </span>
                        </button>
                    ))}
                </React.Fragment>
            ))}
            </div>
    </div>
)
}

export default SmallCalender