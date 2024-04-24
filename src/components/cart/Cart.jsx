import React from 'react'
import CartItem from './CartItem'
import { Box, Button, Card, Divider, Grid, Modal, TextField } from '@mui/material'
import AddressCard from './AddressCard'
import { AddLocationAlt } from '@mui/icons-material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup';
import { store } from '../state/store'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../state/order/Action'

{/* address items array */}
const addressItems = [1,1,1]

{/* address modal styles */}
export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: 'none',
    boxShadow: 24,
    p: 4,
};

{/* address modal form initial values */}
const initialValues = {
    streetAddress: "",
    city: "",
    state: "",
    zipcode: ""
}

{/* address modal form validation */}
const validationSchema = Yup.object().shape({
    streetAddress: Yup.string()
                .min(3, 'Street Address is Too Short!')
                .max(255, 'Street Address is Too Long!')
                .required('Street Address is Required'),

    city: Yup.string()
                .min(2, 'City is Too Short!')
                .max(50, 'City is Too Long!')
                .required('City is Required'),

    state: Yup.string()
                .min(2, 'State is Too Short!')
                .max(50, 'State is Too Long!')
                .required('State is Required'),

    zipcode: Yup.string()
                .max(6, 'Zip Code is Too Long!')
                .required('Zip Code is Required'),
})

const Cart = () => {
    {/* user selected address function */}
    const userSelectedAddress = () => {

    }

    {/* address modal open state, open & close button function */}
    const [open, setOpen] = React.useState(false);
    const handleAddressModal = () => setOpen(true)
    const handleAddressModalClose = () => setOpen(false);

    {/* authenticate use selector hook */}
    const {cart, auth} = useSelector(store=>store)

    {/* use dispatch hook */}
    const dispatch = useDispatch()

    {/* address form submit function */}
    const handleAddressSubmit = (values) => {
        const data = {
            jwt: localStorage.getItem('jwt'),
            order: {
                restaurantId: cart.cartItems[0].food?.restaurant.id,
                deliveryAddress: {
                    fullName: auth.user?.fullName,
                    streetAddress: values.streetAddress,
                    city: values.city,
                    state: values.state,
                    zipcode: values.zipcode,
                    country: "Bangladesh"
                }
            }
        }
        dispatch(createOrder(data))
        console.log("form value ", values)
    } 

  return (
    <>
        <main className="lg:flex justify-between">
            {/* cart & billing details section start */}
            <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
                {/* cart items */}
                {
                    cart.cart?.item.map((item) => <CartItem item={item} />)
                }
                {/* cart items */}

                <Divider />

                {/* billing details */}
                <div className="billingDetails px-5 text-sm">
                    <p className="font-extralight py-5">Billing Details</p>
                    <div className="space-y-3">
                        <div className="flex justify-between text-gray-400">
                            <p>Item Total</p>
                            <p>৳{cart.cart?.total}</p>
                        </div>

                        <div className="flex justify-between text-gray-400">
                            <p>Deliver Fee</p>
                            <p>৳21</p>
                        </div>

                        <div className="flex justify-between text-gray-400">
                            <p>Platform Fee</p>
                            <p>৳10</p>
                        </div>

                        <div className="flex justify-between text-gray-400">
                            <p>GST and Restaurant Charges</p>
                            <p>৳40</p>
                        </div>
                        <Divider />
                    </div>

                    <div className="flex justify-between text-gray-400">
                        <p>Total Pay</p>
                        <p>৳{cart.cart?.total + 21 + 10 + 40}</p>
                    </div>
                    {/* billing details */}
                </div>
            </section>
            {/* cart & billing details section end */}

            <Divider orientation="vertical" flexItem />

            {/* delivery address section start */}
            <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
                <div>
                    <h1 className="text-center font-semibold text-2xl py-10">Choose Delivery Address</h1>
                    <div className="flex flex-wrap justify-center gap-5">
                        {
                            addressItems.map((item) => 
                                <AddressCard item={item} showBtn={true} handleSelectAddress={userSelectedAddress} />
                            )
                        }
                        {/* add new address card section start */}
                        <Card className="flex gap-5 w-64 p-5">
                            <AddLocationAlt />
                            <div className="space-y-3 text-gray-500">
                                <h1 className="font-semibold text-lg text-white">Add New Address</h1>
                                <Button variant="outlined" fullWidth onClick={handleAddressModal}>Add</Button>
                            </div>
                        </Card>
                        {/* add new address card section end */}
                    </div>
                </div>
            </section>
            {/* delivery address section end */}
        </main>

        {/* address modal */}
        <Modal
            open={open}
            onClose={handleAddressModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {/* address form */}
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleAddressSubmit}
                >
                    <Form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <h1 className="font-semibold text-lg text-center text-white">Add New</h1>
                            </Grid>

                            <Grid item xs={12}>
                                <Divider />
                            </Grid>
                            
                            <Grid item xs={12}>
                                <Field 
                                    as={TextField}
                                    name="streetAddress"
                                    label="Street Address"
                                    fullWidth
                                    variant="outlined"
                                    error={!ErrorMessage("streetAddress")}
                                    // helperText = {
                                    //     <ErrorMessage>
                                    //         {(msg) => <span className="text-red-600">{msg}</span>}
                                    //     </ErrorMessage>
                                    // }
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <Field 
                                    as={TextField}
                                    name="city"
                                    label="City"
                                    fullWidth
                                    variant="outlined"
                                    error={!ErrorMessage("city")}
                                    // helperText = {
                                    //     <ErrorMessage>
                                    //         {(msg) => <span className="text-red-600">{msg}</span>}
                                    //     </ErrorMessage>
                                    // }
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <Field 
                                    as={TextField}
                                    name="state"
                                    label="State"
                                    fullWidth
                                    variant="outlined"
                                    error={!ErrorMessage("state")}
                                    // helperText = {
                                    //     <ErrorMessage>
                                    //         {(msg) => <span className="text-red-600">{msg}</span>}
                                    //     </ErrorMessage>
                                    // }
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Field 
                                    as={TextField}
                                    name="zipcode"
                                    label="Zip Code"
                                    fullWidth
                                    variant="outlined"
                                    error={!ErrorMessage("zipcode")}
                                    // helperText = {
                                    //     <ErrorMessage>
                                    //         {(msg) => <span className="text-red-600">{msg}</span>}
                                    //     </ErrorMessage>
                                    // }
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button fullWidth variant="contained" type="submit">Deliver Here</Button>
                            </Grid>
                        </Grid>
                    </Form>
                </Formik>
                {/* address form */}
            </Box>
        </Modal>
        {/* address modal*/}
    </>
  )
}

export default Cart