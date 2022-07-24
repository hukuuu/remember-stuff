import create from 'zustand'
import { persist } from 'zustand/middleware'
import settings from './settings'
import things from './things'

export default create(
  persist(
    set => ({
      ...settings(set),
      ...things(set),
      lastWorkout: 0,
      setLastWorkout: () => {
        set(() => ({
          lastWorkout: Date.now(),
        }))
      },
    }),
    {
      name: 'remember-stuff',
    }
  )
)
