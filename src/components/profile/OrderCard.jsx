import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <>
        {/* order items card section start */}
        <Card className="flex items-center justify-between p-5">
            <div className="flex items-center space-x-5">
                <img 
                    className="w-16 h-16"
                    src="https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_960_720.jpg" 
                    alt="" 
                />
                <div>
                    <p>Burger</p>
                    <p>৳499</p>
                </div>
            </div>
            <div>
                <Button className="cursor-not-allowed" variant="contained">Completed</Button>
            </div>
        </Card>
        {/* order items card section end */}
    </>
  )
}

export default OrderCard