import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const Day = ({ day }) => {
    const getCurrentDayClass = () => {
        return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 'bg-blue-600 text-white rounded-full w-7': ' '
    }

    const {setDaySelected, setShowEventModal} = useContext(GlobalContext)
return (
    <div className='border border-gray-200 flex flex-col h-36'>
        <header className='flex flex-col '>
            <p className={`text-sm p-2 text-left ${getCurrentDayClass()}`}>
                {day.format('DD')}
            </p>
        </header>
        <div className="flex-1 cursor-pointer" onClick={() => {
            setDaySelected(day)
            setShowEventModal(true)
        }}>
            {" "}
        </div>
    </div>
)
}

Day.propTypes = {
    rowIdx: PropTypes.number,
    day : PropTypes.any
}


export default Day
