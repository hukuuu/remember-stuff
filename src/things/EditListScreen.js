import useStore from '../store'
import { Link } from 'react-router-dom'

const EditListScreen = () => {
  const things = useStore(state => state.things)

  return (
    <ul className="mt-12 px-12">
      {things.map((thing, i) => (
        <li key={i} className="py-1 ">
          <Link to={`/edit/${thing.id}`}>
            {i + 1 + '. '}
            {thing.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default EditListScreen
