import ThingList from './ThingList'
import useStore from '../store'
import Debug from './Debug'

const WorkoutScreen = () => {
  const things = useStore(state => state.things)

  return (
    <>
      <ThingList things={things} />
      {/* <Debug /> */}
    </>
  )
}

export default WorkoutScreen
