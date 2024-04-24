import React from 'react'
import RestaurantCard from '../restaurant/RestaurantCard'
import { useSelector } from "react-redux"
import { store } from '../state/store'

const Favorites = () => {
  const {auth} = useSelector(store=>store)
  return (
    <div>
      {/* user favorites section start */}
      <h1 className="text-xl text-center font-semibold py-5">My Favorites</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {
          /* favorites items map function */
          auth.favorites.map((item) => <RestaurantCard item={item} />)
        }
      </div>
      {/* user favorites section end */}
    </div>
  )
}

export default Favorites