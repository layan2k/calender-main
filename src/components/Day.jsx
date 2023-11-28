import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';



const Day = ({ day }) => {
    const getCurrentDayClass = () => {
        return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? ' text-red-500': ' '
    }

    const getOffDay = () => {
        return day.format('ddd') === ("Sun") | day.format('ddd') === ("Sat")
    }

const cssstyle = {
    background: `${getOffDay() ? '#F4F4F4' : "#EBEBEB1A"}`,
}

    const {setDaySelected, setShowEventModal} = useContext(GlobalContext)
return (
    <div className='border border-gray-200 flex flex-col h-36 DayBox' style={cssstyle}>
        <header className='flex flex-col '>
            {day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ?
                <p className='text-left p-2 pb-0 text-base font-medium text-red-600'>Today</p>
                :
                <>
                <p className={`text-base p-2 pb-0 text-left font-semibold ${getCurrentDayClass()}`}>
                    {day.format('D')}
                    </p>
                    <div>
                    { getOffDay() ?
                    <p className='text-xs text-gray-400 text-left'>Day Off</p>: " "
                    }
                    </div>

                </>
            }
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
