import { useContext } from 'react'
import { AiOutlineAlignLeft, AiOutlineBook, AiOutlineCheck, AiOutlineClockCircle, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import GlobalContext from '../context/GlobalContext'
import { useState } from 'react'
const lableClasses = ["indigo", "gray", "green", "blue", "red", "purple"]

const EventModal = () => {
    const { setShowEventModal, daySelected } = useContext(GlobalContext)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [selectedLabel, setSelectedLabel] = useState(lableClasses[0]);
return (
    <div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center'>
        <form className='bg-white rounded-lg shadow-2xl w-1/4'>
            <header className='bg-gray-100 px-4 py-2 flex justify-between items-center'>
                <span className='text-gray-400'>
                    <AiOutlineMenu />
                </span>
                <button onClick={()=> setShowEventModal(false)}>
                <span className='text-gray-400'>
                    <AiOutlineClose />
                </span>
            </button>
            </header>
            <div className="p-3">
                <div className="grid grid-cols-1/5 items-end gap-y-7">
                    <div></div>
                    <input type="text"
                        name="title"
                        placeholder='Add title'
                        required
                        className='pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-200'
                        value={title} onChange={(e) => setTitle(e.target.value)
                        } />
                    <span className='text-gray-400'>
                        <AiOutlineClockCircle />
                    </span>
                    <p>{daySelected.format("dddd, MMMM, DD")}</p>
                    <span className='text-gray-400'>
                        <AiOutlineAlignLeft />
                    </span>
                    <input type="text"
                        name="description"
                        placeholder='Add a description'
                        required
                        className='pt-3 border-0 text-gray-600  pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-200 flex items-center justify-center'
                        value={description} onChange={(e) => setDescription(e.target.value)
                        } />
                    <span className='text-gray-400'>
                        <AiOutlineBook />
                    </span>
                    <div className="flex gap-x-2">
                        {lableClasses.map((lblClass, i) => (
                            <span key={i}
                                className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                                onClick={()=> setSelectedLabel(lblClass)}
                            >
                                <span className='text-white text-sm'>
                                    {selectedLabel === lblClass && < AiOutlineCheck />}
                                </span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <footer className='flex justify-end w-100 border-t p-3 mt-5'>
                <button type='submit' className='bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white'>
                        Save
                </button>

            </footer>
        </form>
    </div>
)
}

export default EventModal