import { predictRecall } from 'ebisu-js'
import { tUntilNow } from '../utils'
import useStore from '../store'

const Debug = () => {
  const things = useStore(state => state.things)
    .map(thing => ({
      ...thing,
      recallProbability: predictRecall(
        thing.memoryModel,
        tUntilNow(thing.lastReview),
        true
      ),
    }))
    .sort((a, b) => a.recallProbability - b.recallProbability)

  const lastWorkout = useStore(state => state.lastWorkout)

  return (
    <ul className="left-10 absolute">
      <li>
        <b>Last Workout: </b> {lastWorkout}
      </li>
      {things.map(thing => (
        <li key={thing.id}>
          <p>
            <b>{thing.title}</b>
          </p>
          <p className={thing.recallProbability > 0.8 ? 'text-red-400' : ''}>
            Recall Prob. {thing.recallProbability.toFixed(2)}
          </p>
          <p>Half Life: {thing.memoryModel[2]}</p>
        </li>
      ))}
    </ul>
  )
}

export default Debug
