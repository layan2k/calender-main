import CreateEventButton from "./CreateEventButton"
import SmallCalender from "./SmallCalender"

const Sidebar = () => {
return (
    <aside className="border p-5 w-64">
        <CreateEventButton />
        <SmallCalender />
    </aside>
)
}

export default Sidebar