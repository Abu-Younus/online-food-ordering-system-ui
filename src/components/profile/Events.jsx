import React from 'react'
import EventCard from './EventCard'

{/* event items array */}
const eventItems = [1,1,1]

const Events = () => {
  return (
    <>
      {/* event section start */}
      <div className="flex flex-wrap mt-5 px-5 gap-5">
        {
          /* event items array map function */
          eventItems.map((item) => <EventCard />)
        }
      </div>
      {/* event section end */}
    </>
  )
}

export default Events