import create from 'zustand'
import { persist } from 'zustand/middleware'
import produce from 'immer'
import { v4 } from 'uuid'

const useStore = create(
  persist(
    set => ({
      things: [],
      add: thing => {
        console.log('add', thing)
        set(
          produce(draft => {
            draft.things.push({ id: v4(), ...thing })
          })
        )
      },
      update: thing => {
        console.log('update', thing)
        set(
          produce(draft => {
            const t = draft.things.find(t => thing.id === t.id)
            t.title = thing.title
            t.body = thing.body
          })
        )
      },
      del: id => {
        console.log('delete', id)
        // set(state => state.things.filter(thing => thing.id !== id))
        set(state => ({
          things: state.things.filter(thing => thing.id !== id),
        }))
      },
    }),
    {
      name: 'remember-stuff',
    }
  )
)

export default useStore
