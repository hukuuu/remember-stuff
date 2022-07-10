import useStore from '../store'
import { Link } from 'react-router-dom'

const EmptyList = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center text-xl p-8">
      <div>
        Nothing to edit. Why don't you{' '}
        <Link className="underline" to={'/add'}>
          add
        </Link>{' '}
        some quotes?
      </div>
    </div>
  )
}

const EditListScreen = () => {
  const things = useStore(state => state.things)

  if (!things.length) return <EmptyList />

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
