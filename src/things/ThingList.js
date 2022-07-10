import { useMemo, useState } from 'react'
import Controls from './Controls'
import Thing from './Thing'
import { predictRecall, updateRecall } from 'ebisu-js'
import useStore from '../store'
import { tUntilNow } from '../utils'
import { Link } from 'react-router-dom'

const EmptyList = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center text-xl p-8">
      <div>
        You don't have any Quotes yet. Why don't you{' '}
        <Link className="underline" to={'/add'}>
          add
        </Link>{' '}
        some?
      </div>
    </div>
  )
}

const AllDone = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center text-xl p-8">
      <p className="text-5xl mb-8">¯\_(ツ)_/¯</p>
      All good for now. <br /> Come back later!
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
        .sort((a, b) => a.recallProbability - b.recallProbability)
        .filter(thing => thing.recallProbability < 0.8),
    [lastWorkout]
  )

  if (!things.length) return <EmptyList />
  if (index >= interestingThings.length) return <AllDone />

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
