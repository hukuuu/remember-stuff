export const Footer = ({ children, ...rest }) => (
  <div
    className="flex h-10 justify-between items-center border-t-2 px-8"
    {...rest}
  >
    {children}
  </div>
)
