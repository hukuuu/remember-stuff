const ButtonHolder = ({ children }) => {
  return (
    <div className="flex flex-1 justify-center items-center px-3">
      {children}
    </div>
  )
}

const Controls = ({ onGood, onBad }) => {
  return (
    <div className="flex h-52 justify-center items-center">
      <ButtonHolder>
        <button
          onClick={onGood}
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 w-full rounded focus:outline-none focus:shadow-outline"
        >
          NICE
        </button>
      </ButtonHolder>
      <ButtonHolder>
        <button
          onClick={onBad}
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 w-full rounded focus:outline-none focus:shadow-outline"
        >
          BULLSHIT
        </button>
      </ButtonHolder>
    </div>
  )
}

export default Controls
