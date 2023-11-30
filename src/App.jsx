
import './App.css'
import { getMonth } from "./util"
import { useState, useContext , useEffect} from 'react'
import React from 'react'
import GlobalContext from './context/GlobalContext'
import EventModal from './components/EventModal'
import AddButton from './components/AddButton'
import CalenderHeader from './components/Header/CalenderHeader'
import Sidebar from './components/Sidebar/Sidebar'
import DayCalender from './components/Day/DayCalender'
import Week from './components/Week/Week'
import Month from './components/Month/Month'


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
          {viewCalender === "Day"? <DayCalender /> : (viewCalender === "Week"? <Week /> : <Month month = {currentMonth} />) }
        </div>
        <AddButton />
      </div>
    </React.Fragment>
  )
}

export default App
