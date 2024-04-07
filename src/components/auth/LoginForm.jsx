import { Button, TextField, Typography } from '@mui/material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../state/authenticate/Action'

{/* login modal form initial values */}
const initialValues = {
    email: "",
    password: ""
}

const LoginForm = () => {
    {/* navigate state */}
    const navigate = useNavigate();
    
    {/* dispatch state */}
    const dispatch = useDispatch();

    {/* login form submit function */}
    const handleLoginFormSubmit = (values) => {
        dispatch(loginUser({userData: values, navigate}))
    }

  return (
    <div>
        {/* login modal form section start */}
        <Typography variant="h5" className="text-center">
            Login
        </Typography>
        <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleLoginFormSubmit}
        >
            <Form>
                <Field 
                    as={TextField}
                    name="email"
                    type="email"
                    label="Email Address"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    error={!ErrorMessage("email")}
                    // helperText = {
                    //     <ErrorMessage>
                    //         {(msg) => <span className="text-red-600">{msg}</span>}
                    //     </ErrorMessage>
                    // }
                />
                <Field 
                    as={TextField}
                    name="password"
                    type="password"
                    label="Password"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    error={!ErrorMessage("password")}
                    // helperText = {
                    //     <ErrorMessage>
                    //         {(msg) => <span className="text-red-600">{msg}</span>}
                    //     </ErrorMessage>
                    // }
                />
                <Button sx={{ mt: 2, padding: "1rem" }} fullWidth variant="contained" type="submit">
                    Login
                </Button>
            </Form>
        </Formik>
        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
            Don't have an account?
            <Button onClick={() => navigate("/account/register")} size="small">
                Register
            </Button>
        </Typography>
        {/* login modal form section end */}
    </div>
  )
}

export default LoginForm