/*
Day Calender View Component
*/
import { useState, useContext, useEffect } from "react"
import { getHourBlocks, getQuartoHourBlocks } from "../../util"
import HourDay from "./HourDay"
import GlobalContext from "../../context/GlobalContext"


const DayCalender = () => {
    const {daySelected } = useContext(GlobalContext)
    const [currentHours, setCurrentHours] = useState(getQuartoHourBlocks())
    const [currentStartDate, setCurrentStartDate] = useState(getHourBlocks())

    // Updates Hours when our Global Day State changes
    useEffect(() => {
        setCurrentHours(getQuartoHourBlocks(daySelected))
        setCurrentStartDate(getHourBlocks(daySelected))
    }, [daySelected])

    return (
        <div className="animate__delay-2s animate__backOutLeft animate__backInRight flex flex-1 overflow-y-scroll mt-0.5">
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
            <div className="grid grid-cols-1 grid-rows-96 flex-1" >
                {currentStartDate.map((week, ind) => (
                    <div key={ind}>
                        <HourDay hour={week} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DayCalender