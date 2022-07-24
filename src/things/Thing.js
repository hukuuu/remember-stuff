const Thing = ({ thing }) => {
  return (
    <div className="flex flex-1 flex-col">
      <p className="text-3xl font-semibold text-center text-highlight">
        {thing.title}
      </p>
      <br />
      <p className="text-lg text-center">{thing.body}</p>
    </div>
  )
}

export default Thing
