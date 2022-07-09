const Controls = ({ onGood, onBad }) => {
  return (
    <div className="flex h-20 justify-around items-center">
      <button className="hover:bg-pink-600" onClick={onGood}>
        [❤️ Like]
      </button>
      <button className="hover:bg-pink-600" onClick={onBad}>
        [💩 Dislike]
      </button>
    </div>
  )
}

export default Controls
