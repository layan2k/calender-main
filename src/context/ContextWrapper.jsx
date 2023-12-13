/* eslint-disable react/prop-types */
import { useState, useEffect, useReducer } from "react"
import GlobalContext from "./GlobalContext"
import dayjs from "dayjs";

// Context Reducer
const savedEventsReducer = (state, { type, payload }) => {
    switch (type) {
        case 'push':
            return [...state, payload]
        case "update":
            return state.map(evt => evt.id === payload.id ? payload : evt)
        case "delete":
            return state.map(evt => evt.id !== payload.id)
        default:
            throw new Error();
    }
}

// Checks If there are events
const initEvents = () => {
    const storageEvents = localStorage.getItem('savedEvents')
    const parsedEvents = storageEvents ? JSON.parse(storageEvents) : []
    return parsedEvents
}

// Sets-up Our current calender to last view if it exists, Defaults to Day calender
const initView = () => {
    const storageView = localStorage.getItem('calenderView')
    return storageView ? JSON.parse(storageView) : 'Day'
}

const ContextWrapper = (props) => {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
    const [daySelected, setDaySelected] = useState(dayjs());
    const [showEventModal, setShowEventModal] = useState(false);
    const [showSideCalender, setShowSideCalender] = useState(true);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [viewCalender, setViewCalender] = useState(initView())
    const [savedEvents, dispatchCalEvent] = useReducer(savedEventsReducer, [], initEvents)

    useEffect(() => {
        localStorage.setItem('savedEvents', JSON.stringify(savedEvents))
    }, [savedEvents])

    useEffect(() => {
        localStorage.setItem('calenderView', JSON.stringify(viewCalender))
    },[viewCalender])

    useEffect(() => {
        if (smallCalendarMonth !== null) {
            setMonthIndex(smallCalendarMonth)
        }
    }, [smallCalendarMonth])
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
            setViewCalender,
            dispatchCalEvent,
            savedEvents,
            selectedEvent,
            setSelectedEvent,


        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}


export default ContextWrapper