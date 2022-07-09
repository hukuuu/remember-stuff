import { useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import useStore from '../store'
import EditForm from './EditForm'

const EditScreen = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const thing = useStore(
    useCallback(state => state.things.find(thing => thing.id === id), [id])
  )

  const update = useStore(state => state.update)
  const del = useStore(state => state.del)

  const onDelete = id => {
    del(id)
    onCancel()
  }
  const onCancel = () => {
    navigate(-1)
  }

  if (!thing) return <div>Item not found!</div>

  return <EditForm {...{ thing, onDelete, onCancel }} onSave={update} />
}

export default EditScreen
