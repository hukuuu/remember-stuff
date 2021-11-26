const Thing = ({ thing }) => {
  return (
    <div className=" flex flex-1 flex-col p-8  overflow-y-hidden ">
      <p className="text-green-500 text-3xl font-semibold">{thing.title}</p>
      <p className="text-lg">{thing.body}</p>
    </div>
  )
}

export default Thing
