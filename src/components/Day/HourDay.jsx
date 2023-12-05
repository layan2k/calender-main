/* eslint-disable react/prop-types */
/*
    Component to help us 15 minute intervals for our Day calender
*/

const HourDay = ({ hour }) => {
    const changeHourToArray = Object.values(hour)
    return (
        <div className='border border-gray-200 border-r-0 border-l-0 grid grid-cols-1 grid-rows-4 h-24' style={{"background": "#fdfdfd"}}>
            {changeHourToArray.map((quarter, idk) => (
                <div className={`flex justify-center items-center border-r-0 border-l-0 border border-gray-200 cursor-pointer  ${idk === 2 ? 'border-t-blue-200 border-solid': "border-dashed"}`} key={idk}>
                    {" "}
                </div>
            ))}
        </div>
    )
}

export default HourDay