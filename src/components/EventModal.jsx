import { useContext } from 'react'
import { AiOutlineAlignLeft, AiOutlineBook, AiOutlineCheck, AiOutlineClockCircle, AiOutlineClose, AiOutlineDelete, AiOutlineMenu } from 'react-icons/ai'
import GlobalContext from '../context/GlobalContext'
import { useState } from 'react'
import { TimePicker } from 'antd'

const hexCodes = {
    "indigo": "#3F00FF",
    "gray": "#808080",
    "green": "#00FF00",
    "blue": "#0000FF",
    "red": "#FF0000",
    "purple": "#800080",
};

const lableClasses = ["indigo", "gray", "green", "blue", "red", "purple"]
// Convert each label to its corresponding hex code using the map function
const labelHexCodes = lableClasses.map(label => hexCodes[label]);

const EventModal = () => {
    const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent, setSelectedEvent } = useContext(GlobalContext)
    const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "")
    const [description, setDescription] = useState(selectedEvent != null ? selectedEvent.description : "");
    const [selectedLabel, setSelectedLabel] = useState(
        selectedEvent != null ? lableClasses.find((lbl) => lbl === selectedEvent.label) :
            lableClasses[0]
    );

    const [selectedTime, setSelectedTime] = useState(daySelected.set('hour', 9).set('minute', 15)); // Initial state

    const handleChange = (time) => {
        setSelectedTime(time);
    };



    const handleSubmit = (e) => {
        e.preventDefault()
        const calenderEvent = {
            title,
            description,
            label: selectedLabel,
            day: daySelected.valueOf(),
            time: selectedTime,
            id: selectedEvent ? selectedEvent.id : Date.now()
        }
        if (selectedEvent) {
            dispatchCalEvent({ type: 'update', payload: calenderEvent })
        }
        else {
            dispatchCalEvent({ type: 'push', payload: calenderEvent })
        }
        setSelectedEvent("")
        setShowEventModal(false)
    }

    return (
        <div className=' event h-screen w-full fixed md:left-0 top-0 flex justify-center items-center z-10'>
            <form className='bg-white rounded-lg shadow-2xl w-1/4'>
                {/* Header Top Part Of the Event Model(form) */}
                <header className='bg-gray-100 px-4 py-2 flex justify-between items-center'>
                    <span className='text-gray-400'>
                        <AiOutlineMenu />
                    </span>
                    <div className='flex gap-2'>
                        {selectedEvent && (
                            <span
                                className='text-gray-400 cursor-pointer'
                                onClick={() => {
                                    dispatchCalEvent({
                                        type: "delete", payload: selectedEvent
                                    })
                                    setSelectedEvent("")
                                    setShowEventModal(false)
                                }}
                                title='Delete'
                            >
                                <AiOutlineDelete />
                            </span>
                        )}
                        <button title='Close' onClick={() => setShowEventModal(false)}>
                            <span className='text-gray-400'>
                                <AiOutlineClose />
                            </span>
                        </button>
                    </div>
                </header>
                {/* Content Part of our form */}
                <div className="p-3">
                    {/* Items Container grid set to 1/5 */}
                    <div className="grid grid-cols-1/5 items-end gap-y-7">
                        <div></div>
                        {/* First Input Titke */}
                        <input type="text"
                            name="title"
                            placeholder='Add title'
                            required
                            className='pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-200'
                            value={title} onChange={(e) => setTitle(e.target.value)
                            } />
                        {/* Left Clock */}
                        <span className='text-gray-400'>
                            <AiOutlineClockCircle />
                        </span>
                        {/* Date Selected + Time Picker */}
                        <div className='flex flex-col gap-3'>
                            <p>{daySelected.format("dddd, MMMM, DD")}</p>
                            <TimePicker
                                format="HH:mm"
                                minuteStep={15}
                                value={selectedTime}
                                onChange={handleChange}
                            />
                        </div>
                        <span className='text-gray-400'>
                            <AiOutlineAlignLeft />
                        </span>
                        {/* Second Input Description */}
                        <input type="text"
                            name="description"
                            placeholder='Add a description'
                            required
                            className='pt-3 border-0 text-gray-600  pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-200 flex items-center justify-center'
                            value={description} onChange={(e) => setDescription(e.target.value)
                            } />
                        {/* Left Book Icon */}
                        <span className='text-gray-400'>
                            <AiOutlineBook />
                        </span>
                        {/* Labels Container */}
                        <div className="flex gap-x-2">
                            {labelHexCodes.map((lblClass, i) => (
                                <div key={i}
                                    className=" w-6  h-4  flex items-center justify-center cursor-pointer"
                                    style={{ backgroundColor: `${lblClass}` }}
                                    onClick={() => setSelectedLabel(lblClass)}
                                >
                                    <span className='text-white text-xs'>
                                        {selectedLabel === lblClass && < AiOutlineCheck />}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* The bottom part of our Event Model(form) */}
                <footer className='flex justify-end w-100 border-t p-3 mt-5'>
                    <button type='submit' className='bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white' onClick={handleSubmit}>
                        Save
                    </button>
                </footer>
            </form>
        </div>
    )
}

export default EventModal