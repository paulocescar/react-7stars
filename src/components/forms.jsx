export const Select = ({name, options}) => (
    <select name={name} className="bg-white">
        <option vakue="">Dryve - Ribeirão Preto</option>
    </select>
)

export const Whitebutton = ({onClick, title, icon}) => (
    <button
    type="button"
    onClick={onClick}
    className='flex flex-row float-left mr-3 justify-center items-center bg-[#fff] p-3 rounded-[10px] cursor-pointer hover:bg-[#2952e3] z-10'>
        <p className='text-black hover:text-white text-base font-semibold'>{icon} {title}</p>
    </button>
)

export const Bluebutton = ({onClick, title, icon}) => (
    <button
    type="button"
    onClick={onClick}
    className='flex flex-row float-left mr-3 justify-center items-center bg-[#2952e3] p-3 rounded-[10px] cursor-pointer hover:bg-[#2456bd] z-10'>
        <p className='text-white text-base font-semibold'>{icon} {title}</p>
    </button>
)