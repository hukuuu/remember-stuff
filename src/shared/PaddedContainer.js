export const PaddedContainer = ({ children, ...rest }) => {
  return (
    <div
      className="flex flex-col flex-1 w-full p-8 break-words scrollbar overflow-y-scroll"
      {...rest}
    >
      {children}
    </div>
  )
}
