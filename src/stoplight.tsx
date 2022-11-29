export const Stoplight = () => {
  return (
    <div>
      <div className="light" data-color="red" data-active={false} />
      <div className="light" data-color="yellow" data-active={false} />
      <div className="light" data-color="green" data-active={false} />
    </div>
  )
}
