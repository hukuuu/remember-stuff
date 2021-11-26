import ThingList from './ThingList'
import useStore from '../store'

const WorkoutScreen = () => {
  const things = useStore(state => state.things)

  return (
    <div className="flex">
      <ThingList things={things} />
    </div>
  )
}

export default WorkoutScreen
