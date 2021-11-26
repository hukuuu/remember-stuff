import ThingList from './ThingList'
import useStore from '../store'

const WorkoutScreen = () => {
  const things = useStore(state => state.things)

  return <ThingList things={things} />
}

export default WorkoutScreen
