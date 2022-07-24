import { Footer } from '../shared'

const Controls = ({ onGood, onBad }) => {
  return (
    <Footer>
      <button className="" onClick={onGood}>
        [❤️ Like]
      </button>
      <button className="" onClick={onBad}>
        [💩 Dislike]
      </button>
    </Footer>
  )
}

export default Controls
