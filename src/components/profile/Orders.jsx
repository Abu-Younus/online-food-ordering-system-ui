import React from 'react'
import OrderCard from './OrderCard'


{/* order items array */}
const orderItems = [1,1,1,1]

const Orders = () => {
  return (
    <div className="flex flex-col items-center">
      {/* user orders section start */}
      <h1 className="text-xl font-semibold text-center py-7">My Orders</h1>
      <div className="space-y-5 w-full lg:w-1/2">
        {
          /* order items array map function */
          orderItems.map((item) => <OrderCard />)
        }
      </div>
      {/* user orders section end */}
    </div>
  )
}

export default Orders