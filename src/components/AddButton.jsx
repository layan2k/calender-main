import { AiOutlinePlus } from "react-icons/ai"

const cssstyle = {
  background : "#2A2C32"
}

const AddButton = () => {
  return (
    <div className="text-3xl fixed text-white  border p-3 cursor-pointer shadow-lg rounded-full bottom-5 right-5" style={cssstyle}>
      <AiOutlinePlus />
    </div>
  )
}

export default AddButton