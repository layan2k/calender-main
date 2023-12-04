/* eslint-disable no-unused-vars */
import React from "react";

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index) => { },
    smallCalendarMonth: 0,
    setSmallCalendarMonth: (index) => { },
    daySelected: null,
    setDaySelected: (day) => { },
    showEventModal: false,
    setShowEventModal: () => { },
    showSideCalender: true,
    setShowSideCalender: () => { },
    viewCalender: 'Day',
    setViewCalender: (calender) => { },
    dispatchCalEvent: ({ type, payload }) => { },
    savedEvents: [],
    selectedEvent: null,
    setSelectedEvent: () => {}

})
export default GlobalContext