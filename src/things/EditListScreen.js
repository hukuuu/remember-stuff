import useStore from '../store'
import { Link } from 'react-router-dom'
import { PaddedContainer } from '../shared'

const EmptyList = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center text-xl">
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

const ThingsList = ({ things }) => (
  <ul className="">
    {things.map((thing, i) => (
      <li key={i} className="py-1">
        <Link to={`/edit/${thing.id}`}>
          {i + 1 + '. '}
          {thing.title}
        </Link>
      </li>
    ))}
  </ul>
)

const EditListScreen = () => {
  const things = useStore(state => state.things)

  return (
    <PaddedContainer>
      {!things.length ? <EmptyList /> : <ThingsList things={things} />}
    </PaddedContainer>
  )
}

export default EditListScreen
