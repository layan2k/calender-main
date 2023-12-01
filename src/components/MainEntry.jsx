import React, { lazy, useState, useEffect, Suspense } from 'react'
import { getMonth } from '../util'
import EventModal from './EventModal'
import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import CalenderHeader from './Header/CalenderHeader'
import Sidebar from './Sidebar/Sidebar'
import Loading from './Loading'
import AddButton from './AddButton'
const DayCalender = lazy(() => import('./Day/DayCalender'))
const Week = lazy(() => import('./Week/Week'))
const Month = lazy(() => import('./Month/Month'))


const MainEntry = ()=> {
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const { monthIndex, showEventModal, showSideCalender, viewCalender } = useContext(GlobalContext)


    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex, showSideCalender]);


    return (
        <React.Fragment>
            {showEventModal && <EventModal />}
            <div className="h-screen flex flex-col relative">
                <CalenderHeader />
                <div className="flex flex-1 monthCalender">
                    {showSideCalender &&
                        <Sidebar />
                    }
                    <Suspense fallback={<Loading />}>
                        {viewCalender === "Day" ? <DayCalender /> : (viewCalender === "Week" ? <Week /> : <Month month={currentMonth} />)}
                    </Suspense>
                </div>
                <AddButton />
            </div>
        </React.Fragment>
    )
}

export default MainEntry
