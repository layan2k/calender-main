/* eslint-disable react/prop-types */

import { useContext, useState, useEffect } from "react"
import GlobalContext from "../../context/GlobalContext"
import dayjs from "dayjs"


const Hour = ({ hour }) => {
    const { setDaySelected, setSelectedEvent, savedEvents, setShowEventModal } = useContext(GlobalContext)
    const [localEvents, setLocalEvents] = useState(savedEvents);


    useEffect(() => {
        setLocalEvents(savedEvents)
    }, [savedEvents])

    const checkifSunSat = () => {
        const checkVarible = dayjs(hour[0].toString(), 'DD-MM-YYYY HH:mm')
        if (checkVarible.format('ddd') === 'Sun' | checkVarible.format('ddd') === 'Sat') {
            return true
        }
    }
    const cssstyle = {
        background: `${checkifSunSat() ? '#F4F4F4' : "#EBEBEB1A"}`,
    }

    // console.log(localEvents.filter((item)=> dayjs(item.time).format("DD-MM-YYYY HH:mm") === hour[3]))


    return (
        <div className={`border border-gray-200  h-32 ${checkifSunSat() ? 'flex items-start justify-start' : 'grid grid-cols-1 grid-rows-4'}`} style={cssstyle}>
            {checkifSunSat() ?
                <div className="mt-1 text-xs text-gray-400 cursor-pointer"
                    title="Day-Off"
                >
                    Day-Off
                </div> :
                hour.map((quarter, idk) => (
                    <div
                        className={`flex justify-start items-center border border-gray-100 cursor-pointer ${idk === 2 && !checkifSunSat() ? 'border-t-blue-200 border-solid' : "border-dashed"}`} key={idk}
                        onClick={() => {
                            setDaySelected(dayjs(quarter, 'DD-MM-YYYY HH:mm'))
                            setShowEventModal(true)
                        }
                        }
                        title={!checkifSunSat() && quarter.slice(10)}
                    >
                        {localEvents.filter((item)=> dayjs(item.time).format("DD-MM-YYYY HH:mm") === quarter).map((evt, idx) => (
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
                ))
            }
        </div>
    )
}

export default Hour