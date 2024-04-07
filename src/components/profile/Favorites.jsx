import React from 'react'
import RestaurantCard from '../restaurant/RestaurantCard'


{/* favorites items array */}
const favoritesItem = [1,1,1]

const Favorites = () => {
  return (
    <div>
      {/* user favorites section start */}
      <h1 className="text-xl text-center font-semibold py-5">My Favorites</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {
          /* favorites items array map function */
          favoritesItem.map((item) => <RestaurantCard />)
        }
      </div>
      {/* user favorites section end */}
    </div>
  )
}

export default Favorites