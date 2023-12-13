/*
    Jump By Week Component to change Selected Date To the amount of weeks seleceted
*/

import { useContext } from "react"
import GlobalContext from "../../context/GlobalContext"

const JumpByWeek = () => {

    const { setDaySelected, daySelected } = useContext(GlobalContext)

    // Number Of Weeks Array
    const numberItems = [1, 2, 3, 4, 5, 6,]

    // Check if Number is last given the index in order to render a border
    const checkIfLast = (index) => {
    return !((numberItems.length -1) === index)
    }

    /* Handles how many weeks the calender should jump
        both foward and back
    */
    const jumpByMuch = (numberOfWeeks) => {
        setDaySelected(daySelected.add(numberOfWeeks, 'weeks'))
    }

return (
    <div>
        {/* Positive Jumps */}
        <h2 className='text-center text-base font-semibold'>Jump By Week</h2>
        <div className="flex items-center justify-center mt-6 gap-1">
            {numberItems.map((item, i) => (
                <div className={`p-1 flex items-center justify-center text-sm cursor-pointer ${checkIfLast(i)?'border-r-2': " "} `} key={i}  onClick={()=>{jumpByMuch(item)}}>
                    <span>+{item}</span>
                </div>
            ))}
        </div>
        {/* Negative Jumps */}
        <div className='flex items-center justify-center mt-5 gap-1'>
            {numberItems.map((item, idxn) => (
                <div className={`p-1 flex items-center justify-center text-sm cursor-pointer ${checkIfLast(idxn) ? 'border-r-2' : " "}`} key={idxn} onClick={() => {jumpByMuch(-item) }}>
                    <span>- {item}</span>
                </div>
            ))}
        </div>
    </div>
)
}

export default JumpByWeek