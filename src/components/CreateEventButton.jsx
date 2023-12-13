// Unused
import { useContext } from "react"
import GlobalContext from "../context/GlobalContext"

const CreateEventButton = () => {
    const {setShowEventModal} = useContext(GlobalContext)
return (
    <button onClick={() => setShowEventModal(true)} className='border p-4 rounded-full flex items-center shadow-md hover:shadow-2xl'> <span className='pl-3 pr-7'>Create</span> <span className='text-xl font-bold'>+</span></button>
)
}

export default CreateEventButton