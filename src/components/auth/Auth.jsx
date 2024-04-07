import { Box, Modal } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { style } from '../cart/Cart'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'

const Auth = () => {
    {/* auth modal function */}
    const location = useLocation()
    const navigate = useNavigate()
    const handleClose = () => {
        navigate("/")
    }
    {/* auth modal function */}

  return (
    <>
        {/* auth modal start */}
        <Modal 
            open={
                location.pathname === "/account/register" || location.pathname === "/account/login"
            }
            onClose={handleClose}
        >
            <Box sx={style}>
                {
                    location.pathname === "/account/register" ? <RegisterForm /> : <LoginForm />
                }
            </Box>
        </Modal>
        {/* auth modal end */}
    </>
  )
}

export default Auth