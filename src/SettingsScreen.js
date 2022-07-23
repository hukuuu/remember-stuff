import { useState } from 'react'
import useStore from './store'

const SettingsScreen = () => {
  const [settings, setSettings] = useStore(state => [
    state.settings,
    state.setSettings,
  ])
  const [duration, setDuration] = useState(settings.preferredWorkoutDuraiton)

  const save = () => {
    const s = { ...settings, preferredWorkoutDuraiton: duration }
    setSettings(s)
  }

  return (
    <div className="pt-8">
      <form>
        <label htmlFor="workoutDuration" className="form-label">
          How much time do you have?
          <span className="float-right">{duration}m</span>
        </label>
        <input
          type="range"
          min={1}
          max={20}
          step={1}
          className="form-range w-full h-6 p-0 "
          id="workoutDuration"
          value={duration}
          onChange={e => setDuration(parseInt(e.target.value))}
        />
        <button onClick={save}>Save</button>
      </form>
    </div>
  )
}

export default SettingsScreen
