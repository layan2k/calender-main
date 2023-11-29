/* eslint-disable react/prop-types */


const HourDay = ({hour}) => {
    return (
        <div className='border border-gray-200 border-r-0 border-l-0 grid grid-cols-1 grid-rows-4 h-24' >
            {hour.map((quarter, idk) => (
                <div className={`flex justify-center items-center border-r-0 border-l-0 border border-gray-200 cursor-pointer  ${idk === 2 ? 'border-t-blue-200 border-solid': "border-dashed"}`} style={{"background": "#fdfdfd"}} key={idk}>
                    {" "}
                </div>
            ))}
        </div>
    )
}

export default HourDay