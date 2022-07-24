import { useMemo, useState } from 'react'
import Controls from './Controls'
import Thing from './Thing'
import { predictRecall, updateRecall } from 'ebisu-js'
import useStore from '../store'
import { tUntilNow } from '../utils'
import { Link } from 'react-router-dom'
import { PaddedContainer } from '../shared'

const EmptyList = () => {
  return (
    <PaddedContainer>
      <div className="flex flex-1 flex-col justify-center items-center text-xl">
        <div>
          You don't have any Quotes yet. Why don't you{' '}
          <Link className="underline" to={'/add'}>
            add
          </Link>{' '}
          some?
        </div>
      </div>
    </PaddedContainer>
  )
}

const AllDone = () => {
  return (
    <PaddedContainer>
      <div className="flex flex-1 flex-col justify-center items-center text-xl">
        <p className="text-5xl mb-8">¯\_(ツ)_/¯</p>
        All good for now. <br /> Come back later!
      </div>
    </PaddedContainer>
  )
}

const ThingList = ({ things }) => {
  const [index, setIndex] = useState(0)
  const update = useStore(state => state.update)
  const [lastWorkout, setLastWorkout] = useStore(state => [
    state.lastWorkout,
    state.setLastWorkout,
  ])

  const makeThingUpdater = (thing, success) => {
    const start = Date.now()
    return () => {
      console.log('before update: ', thing)
      const readTimes = thing.readTimes || []

      readTimes.push(Date.now() - start)
      if (readTimes.length > 3) readTimes.shift()
      const avgReadTime = readTimes.reduce((a, b) => a + b) / readTimes.length

      const updated = {
        ...thing,
        memoryModel: updateRecall(
          thing.memoryModel,
          success,
          1,
          tUntilNow(thing.lastReview)
        ),
        lastReview: Date.now(),
        readTimes,
        avgReadTime,
      }
      console.log('new value: ', updated)
      update(updated)
      if (index + 1 >= interestingThings.length) setLastWorkout(Date.now())
      setIndex(index + 1)
    }
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

  if (!things.length) return <EmptyList />
  if (index >= interestingThings.length) return <AllDone />

  const thing = interestingThings[index]

  return (
    <>
      <PaddedContainer>
        <Thing thing={thing} />
      </PaddedContainer>
      <Controls
        onGood={makeThingUpdater(thing, false)}
        onBad={makeThingUpdater(thing, true)}
      />
    </>
  )
}

export default ThingList
