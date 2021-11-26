import useStore from '../store'
import { Link } from 'react-router-dom'

const Thing = ({ thing }) => {
  return thing.title
}

const EditListScreen = () => {
  const things = useStore(state => state.things)

  return (
    <ul>
      {things.map((thing, i) => (
        <li key={i}>
          <Link to={`/edit/${thing.id}`}>
            <Thing thing={thing} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default EditListScreen
