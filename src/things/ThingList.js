import { useState } from 'react'
import Controls from './Controls'
import Thing from './Thing'

const EmptyList = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center text-6xl ">
      ALL GOOD!
    </div>
  )
}

const ThingList = ({ things }) => {
  const [active, setActive] = useState(0)

  if (active >= things.length) return <EmptyList />

  return (
    <>
      <Thing thing={things[active]} />
      <Controls onNext={() => setActive(active + 1)} />
    </>
  )
}

export default ThingList
