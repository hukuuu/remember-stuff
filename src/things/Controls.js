const Controls = ({ onGood, onBad }) => {
  return (
    <div className="flex h-10 justify-evenly items-center border-t-2">
      <button className="" onClick={onGood}>
        [❤️ Like]
      </button>
      <button className="" onClick={onBad}>
        [💩 Dislike]
      </button>
    </div>
  )
}

export default Controls
