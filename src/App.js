import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { AddScreen, WorkoutScreen, EditListScreen, EditScreen } from './things'

const MyLink = ({ to, text }) => (
  <Link className="hover:bg-pink-600" to={to}>
    [{text}]
  </Link>
)

export default function App() {
  return (
    <Router>
      <div className="max-w-md mx-auto flex flex-col flex-grow w-full bg-gray-700 text-gray-100 font-mono">
        <nav className="flex justify-evenly">
          <MyLink to="/" text="Home" />
          <MyLink to="/add" text="Add" />
          <MyLink to="/edit" text="Edit" />
        </nav>
        <div className="flex flex-1 flex-col">
          <Routes>
            <Route exact path="/" element={<WorkoutScreen />} />
            <Route path="/add" element={<AddScreen />} />
            <Route path="/edit" element={<EditListScreen />} />
            <Route path="/edit/:id" element={<EditScreen />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
