
import './App.css'
import { getMonth } from "./util"
import Month from './components/Month'
import Sidebar from './components/Sidebar'
import CalenderHeader from './components/CalenderHeader'
import { useState, useContext , useEffect} from 'react'
import React from 'react'
import GlobalContext from './context/GlobalContext'
import EventModal from './components/EventModal'
import AddButton from './components/AddButton'


function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const { monthIndex, showEventModal, showSideCalender } = useContext(GlobalContext)

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
          <Month month = {currentMonth} />
        </div>
        <AddButton />
      </div>
    </React.Fragment>
  )
}

export default App
