const Controls = ({ onNext }) => {
  return (
    <div className="flex align-middle justify-evenly">
      <button
        onClick={onNext}
        className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 w-1/3 rounded focus:outline-none focus:shadow-outline"
      >
        NICE
      </button>
      <button
        onClick={onNext}
        className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 w-1/3 rounded focus:outline-none focus:shadow-outline"
      >
        BULLSHIT
      </button>
    </div>
  )
}

export default Controls
