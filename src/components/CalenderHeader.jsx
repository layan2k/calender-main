import { useContext, useEffect } from 'react'
import GlobalContext from '../context/GlobalContext'
import dayjs from 'dayjs'
import { AiOutlineBell, AiOutlineDown, AiOutlineLeft, AiOutlineMenuFold, AiOutlineMenuUnfold, AiOutlineRight, AiOutlineSearch, AiOutlineSetting,  } from "react-icons/ai";
import { useState } from 'react';

const CalenderHeader = () => {
    const { monthIndex, setMonthIndex, setDaySelected,showSideCalender, setShowSideCalender  } = useContext(GlobalContext)
    const [searchValue, setSearchValue] = useState("")

    const handlePrevMonth = () => {
        setMonthIndex(monthIndex - 1 )
    }
    const handleNextMonth = () => {
        setMonthIndex(monthIndex + 1)
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


return (
    <header className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center justify-center">
        <div className=' cursor-pointer rounded py-2 px-3 mr-5 text-3xl' onClick={handleSideCalender}>
            {showSideCalender ? <AiOutlineMenuFold/> : <AiOutlineMenuUnfold />}
        </div>
        <div className="flex items-center justify-center mr-5 border p-2 gap-12 ">Month <AiOutlineDown /></div>
        <button className="border rounded py-2 px-4 mr-5" onClick={handleReset}>Today</button>
        </div>


        <div className='flex items-center justify-center gap-4'>
        <button onClick={handlePrevMonth} className='flex items-center justify-center border rounded p-3'>
            <span className='cursor-pointer text-black '>
                <AiOutlineLeft />
            </span>
        </button>
        <div className="flex items-center justify-center border rounded px-3 py-2">
        <h2 className=' text-base text-black font-base'>{dayjs(new Date(dayjs().year(), monthIndex)).format(" MMMM YYYY") }</h2>
        </div>
        <button onClick={handleNextMonth} className='flex items-center justify-center border rounded p-3'>
            <span className='cursor-pointer text-black'>
                <AiOutlineRight />
            </span>
        </button>
        </div>


        <div className="flex justify-center items-center gap-4 text-3xl">
            <div className=""><AiOutlineSetting /> </div>
            <div className=""><AiOutlineBell /></div>
                <div name='searchBox' value={searchValue} onChange={(e)=>setSearchValue(e) } type="text" className=" py-2 px-3 border rounded text-gray-400 bg-gray-200 text-lg flex items-center justify-center gap-2 cursor-pointer"> <AiOutlineSearch/>  Search</div>
        </div>
    </header>
)
}

export default CalenderHeader