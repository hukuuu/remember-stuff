import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { AddScreen, WorkoutScreen, EditListScreen, EditScreen } from './things'
import SettingsScreen from './SettingsScreen'

const MyLink = ({ to, text }) => (
  <Link className="" to={to}>
    [{text}]
  </Link>
)

export default function App() {
  return (
    <Router>
      <div className="text-primary bg-primary max-w-md mx-auto flex flex-col flex-grow w-full  font-mono overflow-y-hidden py-3 ">
        <nav className="flex h-10 justify-evenly items-center border-b-2">
          <MyLink to="/" text="Home" />
          <MyLink to="/add" text="Add" />
          <MyLink to="/edit" text="Edit" />
          <Link className="text-2xl" to="/settings">
            ⚙️
          </Link>
        </nav>
        <div className="flex flex-1 flex-col overflow-y-hidden">
          <Routes>
            <Route exact path="/" element={<WorkoutScreen />} />
            <Route path="/add" element={<AddScreen />} />
            <Route path="/edit" element={<EditListScreen />} />
            <Route path="/edit/:id" element={<EditScreen />} />
            <Route path="/settings" element={<SettingsScreen />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
