import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Chip, IconButton } from '@mui/material'
import React from 'react'

const RestaurantCard = () => {
  return (
    <div className="w-[18rem]">
        <div className={`${true ? "cursor-pointer" : "cursor-not-allowed"} relative`}>
            {/* restaurant image */}
            <img 
                className="w-full h-[10rem] rounded-t-md object-cover"
                src="https://cdn.pixabay.com/photo/2022/11/14/10/37/chinese-lanterns-7591296_1280.jpg" 
                alt="" 
            />

            {/* restaurant open close badge */}
            <Chip 
                size="small"
                className="absolute top-2 left-2"
                color={true ? "success" : "error"}
                label={true ? "open" : "closed"}
            />

            <div className="p-4 textPart lg:flex w-full justify-between">
                {/* restaurant food text */}
                <div className="space-y-1">
                    <p className="font-semibold text-lg">
                        Fast Food
                    </p>
                    <p className="text-sm text-gray-500">
                        Craving it all? Dive into our global fla...
                    </p>
                </div>

                {/* restaurant favorite button */}
                <div>
                    <IconButton>
                        {true ? <Favorite/> : <FavoriteBorder/>}
                    </IconButton>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RestaurantCard