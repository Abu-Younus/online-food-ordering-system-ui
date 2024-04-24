import React, { useEffect } from 'react'
import OrderCard from './OrderCard'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../state/store'
import { getUserOrders } from '../state/order/Action'

const Orders = () => {
  {/* navigate state */}
  const navigate = useNavigate()

  {/* use dispatch hook */}
  const dispatch = useDispatch()

  {/* token get */}
  const jwt = localStorage.getItem('jwt')

  {/* authenticate & cart state */}
  const {auth, order} = useSelector(store=>store)

  {/* use effect hook for user orders */}
  useEffect(() => {
    dispatch(getUserOrders(jwt))
  }, [auth.jwt])

  return (
    <div className="flex flex-col items-center">
      {/* user orders section start */}
      <h1 className="text-xl font-semibold text-center py-7">My Orders</h1>
      <div className="space-y-5 w-full lg:w-1/2">
        {
          /* order items array map function */
          order.orders.map((order) => order.items.map((item) => <OrderCard order={order} item={item} />))
        }
      </div>
      {/* user orders section end */}
    </div>
  )
}

export default Orders