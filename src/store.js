import create from 'zustand'
import { persist } from 'zustand/middleware'
import produce from 'immer'
import { v4 } from 'uuid'
import { DEFAULT_WORKOUT_DURATION } from './constants'

const useStore = create(
  persist(
    set => ({
      settings: {
        preferredWorkoutDuraiton: DEFAULT_WORKOUT_DURATION,
      },
      setSettings: settings => {
        set(() => ({
          settings,
        }))
      },
      things: [],
      add: thing => {
        console.log('add', thing)
        set(
          produce(draft => {
            draft.things.push({ id: v4(), ...thing })
          })
        )
      },
      update: t => {
        console.log('update', t)
        set(state => ({
          things: state.things.map(thing => (thing.id === t.id ? t : thing)),
        }))
      },
      del: id => {
        console.log('delete', id)
        // set(state => state.things.filter(thing => thing.id !== id))
        set(state => ({
          things: state.things.filter(thing => thing.id !== id),
        }))
      },
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

export default useStore
