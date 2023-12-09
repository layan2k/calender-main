/* eslint-disable react/prop-types */
/*
    Component to help us 15 minute intervals for our Day calender
*/
import dayjs from "dayjs";
import { useContext, useState, useEffect } from "react"
import GlobalContext from "../../context/GlobalContext";

const HourDay = ({ hour }) => {
    const { setDaySelected, setSelectedEvent, savedEvents, setShowEventModal } = useContext(GlobalContext)
    const [localEvents, setLocalEvents] = useState(savedEvents);

    useEffect(() => {
        setLocalEvents(savedEvents)
    }, [savedEvents])

    const changeHourToArray = Object.values(hour)
    return (
        <div className='border border-gray-200 border-r-0 border-l-0 grid grid-cols-1 grid-rows-4 h-24' style={{ "background": "#fdfdfd" }}>
            {changeHourToArray.map((quarter, idk) => (
                <div className={`flex justify-center items-center border-r-0 border-l-0 border border-gray-200 cursor-pointer  ${idk === 2 ? 'border-t-blue-200 border-solid' : "border-dashed"}`}
                    title={quarter}
                    key={idk}
                    onClick={() => {
                        setDaySelected(dayjs(quarter, 'DD-MM-YYYY HH:mm'))
                        setShowEventModal(true)
                    }}
                >
                    {localEvents.filter((item) => dayjs(item.time).format("DD-MM-YYYY HH:mm") === quarter).map((evt, idx) => (
                        <div key={idx}
                            className=" p-1 mr-3 text-white text-sm rounded mb-1 truncate"
                            style={{ backgroundColor: evt.label }}
                            onClick={() => setSelectedEvent(evt)}
                        >
                            {evt.title}
                        </div>
                    ))
                    }
                </div>
            ))}
        </div>
    )
}

export default HourDay