const Thing = ({ thing }) => {
  return (
    <div className="scrollbar flex flex-1 flex-col p-8 overflow-y-scroll">
      <p className="text-3xl font-semibold text-center text-yellow-400">
        {thing.title}
      </p>
      <br />
      <p className="text-lg text-center">{thing.body}</p>
    </div>
  )
}

export default Thing
