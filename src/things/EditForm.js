import { useState, useEffect } from 'react'
import { Footer, PaddedContainer } from '../shared'

const defaultConfig = {
  showDelete: true,
}

const EditForm = ({
  thing,
  onSave,
  onCancel,
  onDelete,
  config = defaultConfig,
}) => {
  const [title, setTitle] = useState(thing.title)
  const [body, setBody] = useState(thing.body)

  useEffect(() => {
    setTitle(thing.title)
    setBody(thing.body)
  }, [thing])

  const confirmDelete = () => {
    if (window.confirm('Confirm Deletion?')) onDelete(thing.id)
  }

  const { showDelete } = config

  return (
    <div className="flex flex-col flex-1 w-full">
      <PaddedContainer>
        <div className="flex flex-col flex-1">
          <form className="flex flex-col flex-1">
            <div className="flex flex-col flex-1 mb-8">
              <label className="block text-sm mb-2" htmlFor="title">
                Title
              </label>
              <textarea
                className="h-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows={3}
                id="title"
                type="text"
                placeholder=""
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col" style={{ flex: 2 }}>
              <label className="block text-sm mb-2" htmlFor="details">
                Details
              </label>
              <textarea
                rows={15}
                className="h-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="details"
                type="details"
                placeholder=""
                value={body}
                onChange={e => setBody(e.target.value)}
              />
            </div>
          </form>
        </div>
      </PaddedContainer>
      <Footer>
        <button
          className=""
          type="button"
          onClick={() => onSave({ ...thing, title, body })}
        >
          [Save]
        </button>
        {showDelete && (
          <button className="" type="button" onClick={confirmDelete}>
            [Delete]
          </button>
        )}
        <button className="" type="button" onClick={onCancel}>
          [Cancel]
        </button>
      </Footer>
    </div>
  )
}

export default EditForm
