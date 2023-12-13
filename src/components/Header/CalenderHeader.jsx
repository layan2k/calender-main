/*
    Calender Header Component. Desktop + Mobile

*/

// Imports
import { useContext, useEffect } from 'react'
import GlobalContext from '../../context/GlobalContext'
import dayjs from 'dayjs'
import { AiOutlineBell, AiOutlineLeft, AiOutlineMenuFold, AiOutlineMenuUnfold, AiOutlineRight, AiOutlineSearch } from "react-icons/ai";
import {SettingOutlined } from '@ant-design/icons'
import { useState } from 'react';
import CalenderDropDown from './CalenderDropDown';
import { Button } from 'antd'
import { getFirstAndLastDay } from '../../util';

const CalenderHeader = () => {
    const { monthIndex, setMonthIndex, setDaySelected, showSideCalender, setShowSideCalender, viewCalender, daySelected } = useContext(GlobalContext)
    const [searchValue, setSearchValue] = useState("")
    const [currentDay, setCurrentDay] = useState(daySelected.date())

    // Returns amount of days in a Month given the Month Index 0-11
    const getDaysInMonth = (monthIndex) => {
        const currentSelectedYear = daySelected.format('YYYY')
        const date = dayjs(`${currentSelectedYear}-${monthIndex}-01`);
        return date.daysInMonth();
    };

    // Handles our Date shift Depending on the Calender Mode.
    const handleNextPrevMonth = (actionValue) => {
        if (viewCalender === "Day" || viewCalender === "Appointments") {
            if (currentDay === 1) setMonthIndex(monthIndex - 1);
            if (currentDay === getDaysInMonth(monthIndex)) setMonthIndex(monthIndex + 1);
            setDaySelected(daySelected.add(actionValue, 'day'))
        }
        else if (viewCalender === "Month") {
            setMonthIndex(monthIndex + actionValue)
        }
        else {
            setDaySelected(daySelected.add(actionValue, 'weeks'))
        }
    }

    // Resets our calender to the Current Date
    const handleReset = () => {
        setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month())
        setDaySelected(dayjs())
    }

    // Toggles our Side Bar with Calender and Jump Controls
    const handleSideCalender = () => {
        setShowSideCalender(!showSideCalender)
    }

    // Rerender when SiderBar Calender Mode Changes
    useEffect(() => {
    }, [showSideCalender])

    // Updates Our local date if global Date changes
    useEffect(() => {
        setCurrentDay(daySelected.date())
    }, [daySelected])

    // Makes sure that our month is synced with our dayselected
    useEffect(() => {
        // Check if Monthindex id different from our global state
        // Change to current if not.
        if (monthIndex !== daySelected.month()) {
            setMonthIndex(daySelected.month())
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [daySelected]);

        // Gets the First and last of the week given a date Input
    const WeekDates =  getFirstAndLastDay(daySelected);



    return (
        <header className=" calenderHeaderMenu px-4 py-3 flex items-center justify-between border shadow-md border-b-gray-200">
            <div className="flex  items-center justify-center">
                <div className='hiddenItemsSmallScreen cursor-pointer rounded py-2 px-3 mr-5 text-3xl' onClick={handleSideCalender}>
                    {showSideCalender ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
                </div>
                <CalenderDropDown />
                <Button className=" py-2 px-4 mr-5" size="large" onClick={handleReset}>Today</Button>
            </div>
            {/* Controls */}
            <div className=' controls flex items-centerjustify-center gap-4'>
                {/* Left Control */}
                <Button size='large' onClick={() => handleNextPrevMonth(-1)} className='flex items-center justify-center border rounded p-3'>
                    <span className='cursor-pointer text-black '>
                        <AiOutlineLeft />
                    </span>
                </Button>
                {/* Date Display */}
                {viewCalender === 'Month' ?
                    // Month
                    <div className="flex items-center justify-center border rounded w-48  px-3 py-2">
                        <h2 className=' text-base text-black font-base'>{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}</h2>
                    </div>
                    :
                    (viewCalender === 'Week' ?
                        // Week
                        <div className="flex items-center justify-center border rounded w-48  px-3 py-2">
                            <h2 className=' text-base text-black font-base'>{WeekDates.firstDayOfWeek + " - " + WeekDates.lastDayOfWeek}</h2>
                        </div>
                        :
                        // Day
                        <div className="flex items-center justify-center border rounded w-48  px-3 py-2">
                            <h2 className=' text-base text-black font-base'>{daySelected.format('D MMMM, YYYY')}</h2>
                        </div>
                    )
                }
                {/* Right Control */}
                <Button size='large' onClick={() => handleNextPrevMonth(1)} className='flex items-center justify-center border rounded p-3'>
                    <span className='cursor-pointer text-black'>
                        <AiOutlineRight />
                    </span>
                </Button>
            </div>

                {/*  Right Container with our Setting , Notification Icon and  Searchbox*/}
            <div className=" hiddenItemsSmallScreen flex justify-center items-center gap-4 text-3xl">
                <div className=""><SettingOutlined /> </div>
                <div className=""><AiOutlineBell /></div>
                <div name='searchBox' value={searchValue} onChange={(e) => setSearchValue(e)} type="text" className=" py-2 px-3 border rounded text-gray-400 bg-gray-200 text-lg flex items-center justify-center gap-2 cursor-pointer"> <AiOutlineSearch />  Search</div>
            </div>
        </header>
    )
}

export default CalenderHeader