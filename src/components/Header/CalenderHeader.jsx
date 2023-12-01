import { useContext, useEffect } from 'react'
import GlobalContext from '../../context/GlobalContext'
import dayjs from 'dayjs'
import { AiOutlineBell, AiOutlineLeft, AiOutlineMenuFold, AiOutlineMenuUnfold, AiOutlineRight, AiOutlineSearch, AiOutlineSetting, } from "react-icons/ai";
import { useState } from 'react';
import CalenderDropDown from './CalenderDropDown';
import { Button } from 'antd'

const CalenderHeader = () => {
    const { monthIndex, setMonthIndex, setDaySelected, showSideCalender, setShowSideCalender, viewCalender, daySelected } = useContext(GlobalContext)
    const [searchValue, setSearchValue] = useState("")
    const [currentDay, setCurrentDay] = useState(daySelected.date())

    const getDaysInMonth = (monthIndex) => {
        const date = dayjs(`2023-${monthIndex}-01`);
        return date.daysInMonth();
    };


    const handleNextPrevMonth = (actionValue) => {
        if (viewCalender === "Day") {
            if (currentDay === 1) setMonthIndex(monthIndex - 1);
            if (currentDay === getDaysInMonth(monthIndex)) setMonthIndex(monthIndex + 1);
            setDaySelected(daySelected.add(actionValue, 'day'))
        }
        else if (viewCalender === "Month") {
            setMonthIndex(monthIndex - actionValue)
        }
    }

    const handleReset = () => {
        setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month())
        setDaySelected(dayjs())
    }

    const handleSideCalender = () => {
        setShowSideCalender(!showSideCalender)
    }
    useEffect(() => {
    }, [showSideCalender])

    useEffect(() => {
        setCurrentDay(daySelected.date())
    }, [daySelected])



    return (
        <header className="px-4 py-3 flex items-center justify-between border shadow-md border-b-gray-200">
            <div className="flex items-center justify-center">
                <div className=' cursor-pointer rounded py-2 px-3 mr-5 text-3xl' onClick={handleSideCalender}>
                    {showSideCalender ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
                </div>
                <CalenderDropDown />
                <Button className=" py-2 px-4 mr-5" size="large" onClick={handleReset}>Today</Button>
            </div>
            <div className='flex items-center justify-center gap-4'>
                <Button size='large' onClick={() => handleNextPrevMonth(-1)} className='flex items-center justify-center border rounded p-3'>
                    <span className='cursor-pointer text-black '>
                        <AiOutlineLeft />
                    </span>
                </Button>
                {viewCalender === 'Month' ?
                    // Month
                    <div className="flex items-center justify-center border rounded w-48  px-3 py-2">
                        <h2 className=' text-base text-black font-base'>{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}</h2>
                    </div>
                    :
                    (viewCalender === 'Week' ?
                        // Week
                        <div className="flex items-center justify-center border rounded w-48  px-3 py-2">
                            <h2 className=' text-base text-black font-base'>{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}</h2>
                        </div>
                        :
                        // Day
                        <div className="flex items-center justify-center border rounded w-48  px-3 py-2">
                            <h2 className=' text-base text-black font-base'>{daySelected.format('D MMMM YYYY')}</h2>
                        </div>


                    )

                }
                <Button size='large' onClick={() => handleNextPrevMonth(1)} className='flex items-center justify-center border rounded p-3'>
                    <span className='cursor-pointer text-black'>
                        <AiOutlineRight />
                    </span>
                </Button>
            </div>


            <div className="flex justify-center items-center gap-4 text-3xl">
                <div className=""><AiOutlineSetting /> </div>
                <div className=""><AiOutlineBell /></div>
                <div name='searchBox' value={searchValue} onChange={(e) => setSearchValue(e)} type="text" className=" py-2 px-3 border rounded text-gray-400 bg-gray-200 text-lg flex items-center justify-center gap-2 cursor-pointer"> <AiOutlineSearch />  Search</div>
            </div>
        </header>
    )
}

export default CalenderHeader