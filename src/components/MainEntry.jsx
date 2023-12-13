/*
Main entry file that bundles up all components and is called as on single component to App.jsx
*/

// Imports
import React, { lazy, useState, useEffect, Suspense } from 'react'
import { getMonth } from '../util'
import EventModal from './EventModal'
import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import CalenderHeader from './Header/CalenderHeader'
import Sidebar from './Sidebar/Sidebar'
import Loading from './Loading'
import AddButton from './AddButton'
import MobileMenu from './Header/MobileMenu'

// Lazy Loaded Components
const Appointments = lazy(() => import('./Appointments/Appointments'))
const DayCalender = lazy(() => import('./Day/DayCalender'))
const Week = lazy(() => import('./Week/Week'))
const Month = lazy(() => import('./Month/Month'))


const MainEntry = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const { monthIndex, showEventModal, showSideCalender, viewCalender, daySelected } = useContext(GlobalContext)


    // Update Current Month for our month Calender if global monthindex changes
    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);

    // Set Current Month if day selected changes mainly on sideCalender
    useEffect(() => {
        setCurrentMonth(getMonth(daySelected.month()))
    }, [daySelected])



    return (
        <React.Fragment>
            {/* Event Modal For handling our appointments  */}
            {showEventModal && <EventModal />}
            {/* Calender Headers */}
            <div className="h-screen flex flex-col relative">
                <div className="mobileScreenView ">
                <MobileMenu />
                </div>
                <CalenderHeader />
                <div className="flex flex-1 monthCalender">
                    <div className="hiddenItemsSmallScreen flex">
                        {showSideCalender &&
                            <Sidebar />
                        }
                    </div>
                    {/* Calender + Appointment components loads when calender mode is met */}
                    <Suspense fallback={<Loading />}>
                        {viewCalender === "Day" ? <DayCalender /> : (viewCalender === "Week" ? <Week /> :( viewCalender === "Month" ? <Month month={currentMonth}/> : <Appointments />) )}
                    </Suspense>
                </div>
                <AddButton />
            </div>
        </React.Fragment>
    )
}

export default MainEntry
