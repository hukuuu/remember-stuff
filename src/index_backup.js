import './style'
import Router from 'preact-router'
import { Link } from 'preact-router/match'
import { AddScreen, WorkoutScreen, EditListScreen, EditScreen } from './things'
import { createHashHistory } from 'history'

export default function App() {
  return (
    <div className="max-w-md mx-auto flex flex-col flex-grow w-full">
      <nav className="flex justify-evenly">
        <Link activeClassName="text-blue-500" href="/">
          home
        </Link>
        <Link activeClassName="text-blue-500" href="#/add">
          add
        </Link>
        <Link activeClassName="text-blue-500" href="#/edit">
          edit
        </Link>
        <a href="#/add">test</a>
      </nav>
      <Router history={createHashHistory()}>
        <WorkoutScreen path="/" />
        <AddScreen path="/add" />
        <EditListScreen path="edit" />
        <EditScreen path="edit/:id" />
      </Router>
    </div>
  )
}
