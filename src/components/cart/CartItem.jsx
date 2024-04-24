import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
import { Chip, IconButton } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { store } from '../state/store'
import { removeCartItem, updateCartItem } from '../state/cart/Action'

const CartItem = ({item}) => {
  {/* navigate state */}
  const navigate = useNavigate()

  {/* use dispatch hook */}
  const dispatch = useDispatch()

  {/* authenticate & cart state */}
  const {auth, cart} = useSelector(store=>store)

  {/* token get */}
  const jwt = localStorage.getItem('jwt')

  {/* handle update cart item function */}
  const handleUpdateCartItem = (value) => {
    if(value === -1 && item === 1) {
        handleRemoveCartItem()
    }
    const data = {cartItemId: item.id, quantity: item.quantity + value}
    dispatch(updateCartItem({data, jwt}))
  }
   
  {/* handle update cart item function */}
  const handleRemoveCartItem = () => {
    dispatch(removeCartItem({cartItemId: item.id, jwt: auth.jwt || jwt}))
  }


  return (
    <div className="px-5">
        {/* cart item start */}
        <div className="lg:flex items-center lg:space-x-5">
            {/* cart item image */}
            <div>
                <img 
                    className="w-[5rem] h-[5rem] object-cover"
                    src={item.food.images[0]} 
                    alt="" 
                />
            </div>

            {/* cart item name, price & quantity increase-decrease button */}
            <div className="flex items-center justify-between lg:w-[70%]">
                <div className="space-y-1 lg:space-y-3 w-full">
                    <p>{item.food.name}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                            <IconButton onClick={() => handleUpdateCartItem(-1)}>
                                <RemoveCircleOutline />
                            </IconButton>
                                <div className="flex items-center justify-center w-5 h-5 text-xs">
                                    {item.quantity}
                                </div>
                            <IconButton onClick={() => handleUpdateCartItem(1)}>
                                <AddCircleOutline />
                            </IconButton>
                        </div>
                    </div>
                </div>
                <p>৳{item.totalPrice}</p>
            </div>
        </div>
        {/* cart item end */}

         {/* cart item ingredients start*/}
         <div className="pt-3 space-x-2">
            {item.ingredients.map((item) => <Chip label={item}/>)}
        </div>
        {/* cart item ingredients end*/}

        

    </div>
  )
}

export default CartItem