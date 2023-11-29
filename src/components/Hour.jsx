/* eslint-disable react/prop-types */


const Hour = ({hour}) => {
return (
    <div className='border border-gray-200 grid grid-cols-1 grid-rows-4 h-36'>
        {hour.map((quarter, idk) => (
            <div className="flex justify-center items-center border border-dashed border-gray-100 cursor-pointer" key={idk}>
                {" "}
            </div>
        ))}
    </div>
)
}

export default Hour