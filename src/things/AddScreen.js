import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useStore from '../store'
import EditForm from './EditForm'

const emptyThing = { title: '', body: '' }

const AddScreen = () => {
  const navigate = useNavigate()
  const add = useStore(state => state.add)
  const [thing, setThing] = useState(emptyThing)

  const onSave = ({ title, body }) => {
    console.log('onsave', title, body)
    add({ title, body })
    setThing({ ...emptyThing })
  }

  const onCancel = () => {
    navigate(-1)
  }

  const config = {
    showDelete: false,
  }

  return <EditForm {...{ thing, onSave, onCancel, config }} />
}

export default AddScreen
