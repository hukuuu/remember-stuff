import { useState, useEffect } from 'react'

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
    // if (confirm('Confirm Deletion?')) onDelete(thing.id)
    onDelete(thing.id)
  }

  const { showDelete } = config

  return (
    <div className="w-full">
      <form className="px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block  text-sm mb-2" htmlFor="title">
            Title
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={3}
            id="title"
            type="text"
            placeholder=""
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm mb-2" htmlFor="details">
            Details
          </label>
          <textarea
            rows={15}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="details"
            type="details"
            placeholder=""
            value={body}
            onChange={e => setBody(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="hover:bg-pink-600"
            type="button"
            onClick={() => onSave({ ...thing, title, body })}
          >
            [Save]
          </button>
          {showDelete && (
            <button
              className="hover:bg-pink-600"
              type="button"
              onClick={confirmDelete}
            >
              [Delete]
            </button>
          )}
          <button
            className="hover:bg-pink-600"
            type="button"
            onClick={onCancel}
          >
            [Cancel]
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditForm
