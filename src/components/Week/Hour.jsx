/* eslint-disable react/prop-types */


const Hour = ({ hour }) => {
    return (
        <div className='border border-gray-200 grid grid-cols-1 grid-rows-4 h-32'>
            {hour.map((quarter, idk) => (
                <div className={`flex justify-center items-center border border-gray-100 cursor-pointer ${idk === 2 ? 'border-t-blue-200 border-solid': "border-dashed"}`} key={idk}>
                    {" "}
                </div>
            ))}
        </div>
    )
}

export default Hour