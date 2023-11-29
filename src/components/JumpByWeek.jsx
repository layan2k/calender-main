// No logic implemented


const JumpByWeek = () => {


    const numberItems = [1, 2, 3, 4, 5, 6,]
    const checkIfLast = (index) => {
    return !((numberItems.length -1) === index)
    }

    const jumpByMuch = (numberOfWeeks) => {
        return numberOfWeeks
    }

return (
    <div>
        <h2 className='text-center text-base font-semibold'>Jump By Week</h2>
        <div className="flex items-center justify-center mt-6 gap-1">
            {numberItems.map((item, i) => (
                <div className={`p-1 flex items-center justify-center text-sm cursor-pointer ${checkIfLast(i)?'border-r-2': " "} `} key={i}  onClick={()=>{jumpByMuch(item)}}>
                    <span>+{item}</span>
                </div>
            ))}
        </div>
        <div className='flex items-center justify-center mt-5 gap-1'>
            {numberItems.map((item, idxn) => (
                <div className={`p-1 flex items-center justify-center text-sm cursor-pointer ${checkIfLast(idxn) ? 'border-r-2' : " "}`} key={idxn} onClick={() => {jumpByMuch(item *-1) }}>
                    <span>- {item}</span>
                </div>
            ))}
        </div>
    </div>
)
}

export default JumpByWeek