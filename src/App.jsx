
import './App.css'
import { getMonth } from "./util"
import { useState, useContext, useEffect } from 'react'
import React, { lazy, Suspense } from 'react'
import GlobalContext from './context/GlobalContext'
import EventModal from './components/EventModal'
import AddButton from './components/AddButton'
import CalenderHeader from './components/Header/CalenderHeader'
import Sidebar from './components/Sidebar/Sidebar'
import Loading from './components/Loading'
const DayCalender = lazy(() => import('./components/Day/DayCalender'))
const Week = lazy(() => import('./components/Week/Week'))
const Month = lazy(() => import('./components/Month/Month'))


function App() {
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

export default App
