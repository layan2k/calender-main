import { useState } from "react"
import { getQuartoHourBlocks, getWeekHours } from "../util"
import HourDay from "./HourDay"


const DayCalender = () => {
    const [currentHours, setCurrentHours] = useState(getQuartoHourBlocks())
    const [currentStartDate, setCurrentStartDate] = useState(getWeekHours())
    return (
        <div className="flex flex-1 overflow-y-scroll ">
            {/* left */}
            <div className="">
                {/*Side Bar With hours  */}
                <div className='flex flex-col'>
                    <div className='grid grid-cols-1 grid-rows-96 '>
                        {currentHours.map((item, kee) => (
                            <div className="grid grid-cols-1 grid-rows-4 h-24 " key={kee}>
                                {item.map((hrs, kd) => (
                                    <div className={`flex justify-center items-start cursor-pointer text-xs px-5 font-semibold text-black `} key={kd} >
                                        {kd === 0 ? hrs : " "}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right */}
            {/* Hours In a Day */}
            <div className="grid grid-cols-7 grid-rows-96 flex-1" >
                {currentStartDate.map((week, ind) => (
                    <div key={ind}>
                        {week.map((hour, idl) => (
                            <span key={idl}>
                                <HourDay hour={hour} />
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DayCalender