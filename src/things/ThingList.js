import { useMemo, useState } from 'react'
import Controls from './Controls'
import Thing from './Thing'
import { predictRecall, updateRecall } from 'ebisu-js'
import useStore from '../store'
import { tUntilNow } from '../utils'

const EmptyList = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center text-6xl ">
      ALL GOOD!
    </div>
  )
}

const ThingList = ({ things }) => {
  const [index, setIndex] = useState(0)
  const update = useStore(state => state.update)
  const [lastWorkout, setLastWorkout] = useStore(state => [
    state.lastWorkout,
    state.setLastWorkout,
  ])

  const makeThingUpdater = (thing, success) => () => {
    console.log('before update: ', thing)
    const updated = {
      ...thing,
      memoryModel: updateRecall(
        thing.memoryModel,
        success,
        1,
        tUntilNow(thing.lastReview)
      ),
      lastReview: Date.now(),
    }
    console.log('new value: ', updated)
    update(updated)
    if (index + 1 >= interestingThings.length) setLastWorkout(Date.now())
    setIndex(index + 1)
  }

  const interestingThings = useMemo(
    () =>
      things
        .map(thing => ({
          ...thing,
          recallProbability: predictRecall(
            thing.memoryModel,
            tUntilNow(thing.lastReview),
            true
          ),
        }))
        .sort((a, b) => a.recallProbability - b.recallProbability),
    // .filter(thing => thing.recallProbability < 0.8),
    [lastWorkout]
  )

  if (index >= interestingThings.length) return <EmptyList />

  const thing = interestingThings[index]

  return (
    <>
      <Thing thing={thing} />
      <Controls
        onGood={makeThingUpdater(thing, false)}
        onBad={makeThingUpdater(thing, true)}
      />
    </>
  )
}

export default ThingList
