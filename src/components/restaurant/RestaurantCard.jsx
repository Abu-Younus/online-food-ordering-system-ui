import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Chip, IconButton } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { addToFavorite } from '../state/authenticate/Action'
import { store } from '../state/store'
import { isPresentInFavorites } from '../config/logic'

const RestaurantCard = ({item}) => {
    {/* restaurant card navigate hook */}
    const navigate = useNavigate()

    {/* restaurant card dispatch hook */}
    const dispatch = useDispatch()

    {/* user token */}
    const jwt = localStorage.getItem("jwt")

    {/* auth reducer store */}
    const {auth} = useSelector(store=>store)

    {/* handle add to favorite function */}
    const handleAddToFavorite = () => {
        dispatch(addToFavorite({restaurantId: item.id, jwt}))
    }

    {/* handle restaurant details page navigate function */}
    const handleNavigateToRestaurant = () => {
        if(item.open) {
            navigate(`/restaurant/${item.address.city}/${item.name}/${item.id}`)
        }
    }

  return (
    <div className="w-[18rem]">
        <div className={`${item.open ? "cursor-pointer" : "cursor-not-allowed"} relative`}>
            {/* restaurant image */}
            <img 
                className="w-full h-[10rem] rounded-t-md object-cover"
                src={item.images[0]}
                alt={item.name} 
            />

            {/* restaurant open close badge */}
            <Chip 
                size="small"
                className="absolute top-2 left-2"
                color={item.open ? "success" : "error"}
                label={item.open ? "open" : "closed"}
            />

            <div className="p-4 textPart lg:flex w-full justify-between">
                {/* restaurant food text */}
                <div className="space-y-1">
                    <p onClick={handleNavigateToRestaurant} className="font-semibold text-lg cursor-pointer">
                        {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                        {item.description}
                    </p>
                </div>

                {/* restaurant favorite button */}
                <div>
                    <IconButton onClick={handleAddToFavorite}>
                        {
                            isPresentInFavorites(auth.favorites, item) ? <Favorite/> : <FavoriteBorder/>
                        }
                    </IconButton>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RestaurantCard