import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = ({order, item}) => {
  return (
    <>
        {/* order items card section start */}
        <Card className="flex items-center justify-between p-5">
            <div className="flex items-center space-x-5">
                <img 
                    className="w-16 h-16"
                    src={item.food.images[0]} 
                    alt={item.food.name} 
                />
                <div>
                    <p>{item.food.name}</p>
                    <p>৳{item.totalPrice}</p>
                </div>
            </div>
            <div>
                <Button className="cursor-not-allowed" variant="contained">{order.orderStatus}</Button>
            </div>
        </Card>
        {/* order items card section end */}
    </>
  )
}

export default OrderCard