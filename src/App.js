import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { AddScreen, WorkoutScreen, EditListScreen, EditScreen } from './things'

export default function App() {
  return (
    <Router>
      <div className="max-w-md mx-auto flex flex-col flex-grow w-full">
        <nav className="flex justify-evenly">
          <Link to="/">home</Link>
          <Link to="/add">add</Link>
          <Link to="/edit">edit</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<WorkoutScreen />} />
          <Route path="/add" element={<AddScreen />} />
          <Route path="/edit" element={<EditListScreen />} />
          <Route path="/edit/:id" element={<EditScreen />} />
        </Routes>
      </div>
    </Router>
  )
}
