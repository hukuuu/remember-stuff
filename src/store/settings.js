import { DEFAULT_WORKOUT_DURATION } from '../constants'

const settings = set => ({
  settings: {
    preferredWorkoutDuraiton: DEFAULT_WORKOUT_DURATION,
  },
  setSettings: settings => {
    set(() => ({
      settings,
    }))
  },
})

export default settings
