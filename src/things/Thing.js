const Thing = ({ thing }) => {
  return (
    <div className=" flex flex-1 flex-col p-8  overflow-y-hidden ">
      <p className="text-green-500 text-3xl font-semibold text-center">
        {thing.title}
      </p>
      <br />
      <p className="text-lg text-center">{thing.body}</p>
    </div>
  )
}

export default Thing
