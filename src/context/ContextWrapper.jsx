/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import GlobalContext from "./GlobalContext"
import dayjs from "dayjs";
import {  } from "react";


const ContextWrapper = (props) => {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
    const [daySelected, setDaySelected] = useState(dayjs());
    const [showEventModal, setShowEventModal] = useState(false);
    const [showSideCalender, setShowSideCalender] = useState(true);
    const [viewCalender, setViewCalender] = useState('Day')

    useEffect(() => {
        if (smallCalendarMonth !== null) {
            setMonthIndex(smallCalendarMonth)
        }
    },[smallCalendarMonth])
return (
    <GlobalContext.Provider value={{
        smallCalendarMonth,
        setSmallCalendarMonth,
        monthIndex,
        setMonthIndex,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
        showSideCalender,
        setShowSideCalender,
        viewCalender,
        setViewCalender

    }}>
        {props.children}
    </GlobalContext.Provider>
)
}


export default ContextWrapper