import CreateEventButton from "./CreateEventButton"
import SmallCalender from "./SmallCalender"

const Sidebar = () => {
return (
    <aside className="border p-5 w-64">
        {/* Create Event Dummy Button for testing  */}
        <CreateEventButton />
        <SmallCalender />
    </aside>
)
}

export default Sidebar