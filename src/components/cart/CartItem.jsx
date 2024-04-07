import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
import { Chip, IconButton } from '@mui/material'
import React from 'react'

{/* cart item ingredients array */}
const ingredients = [1,1,1]

const CartItem = () => {
  return (
    <div className="px-5">
        {/* cart item start */}
        <div className="lg:flex items-center lg:space-x-5">
            {/* cart item image */}
            <div>
                <img 
                    className="w-[5rem] h-[5rem] object-cover"
                    src="https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_960_720.jpg" 
                    alt="" 
                />
            </div>

            {/* cart item name, price & quantity increase-decrease button */}
            <div className="flex items-center justify-between lg:w-[70%]">
                <div className="space-y-1 lg:space-y-3 w-full">
                    <p>Burger</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                            <IconButton>
                                <RemoveCircleOutline />
                                <div className="flex items-center justify-center w-5 h-5 text-xs">
                                    {4}
                                </div>
                                <AddCircleOutline />
                            </IconButton>
                        </div>
                    </div>
                </div>
                <p>৳499</p>
            </div>
        </div>
        {/* cart item end */}

         {/* cart item ingredients start*/}
         <div className="pt-3 space-x-2">
            {ingredients.map((item) => <Chip label={"Bread"}/>)}
        </div>
        {/* cart item ingredients end*/}

        

    </div>
  )
}

export default CartItem