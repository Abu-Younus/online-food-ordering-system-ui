import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { registerUser } from '../state/authenticate/Action';

{/* register modal form initial values */}
const initialValues = {
    fullName: "",
    email: "",
    password: "",
    role: "ROLE_CUSTOMER"
}

const RegisterForm = () => {
    {/* navigate state */}
    const navigate = useNavigate();

    {/* dispatch state */}
    const dispatch = useDispatch();

    {/* register form submit function */}
    const handleRegisterFormSubmit = (values) => {
        dispatch(registerUser({userData: values, navigate}))
    }

  return (
    <div>
        {/* register modal form section start */}
        <Typography variant="h5" className="text-center">
            Register
        </Typography>
        <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleRegisterFormSubmit}
        >
            <Form>
                <Field 
                    as={TextField}
                    name="fullName"
                    label="Full Name"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    error={!ErrorMessage("fullName")}
                    // helperText = {
                    //     <ErrorMessage>
                    //         {(msg) => <span className="text-red-600">{msg}</span>}
                    //     </ErrorMessage>
                    // }
                />
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
                <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel id="role-select-label">Role</InputLabel>
                    <Field
                        labelId="role-select-label"
                        id="role-select"
                        as={Select}
                        name="role"
                        label="Role"
                        variant="outlined"
                        // value={role}
                        // onChange={handleChange}
                    >
                        <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                        <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
                    </Field>
                </FormControl>
                <Button sx={{ mt: 2, padding: "1rem" }} fullWidth variant="contained" type="submit">
                    Register
                </Button>
            </Form>
        </Formik>
        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
            If have an already account?
            <Button onClick={() => navigate("/account/login")} size="small">
                Login
            </Button>
        </Typography>
        {/* register modal form section end */}
    </div>
  )
}

export default RegisterForm