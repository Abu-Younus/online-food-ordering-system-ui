import { AccountCircle } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

const UserProfile = () => {
  {/* logout function */}
  const handleLogout = () => {

  }
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
      {/* user profile information start */}
      <div className="flex flex-col justify-center items-center">
        <AccountCircle sx={{ fontSize: "9rem" }} />
        <h1 className="text-2xl font-semibold py-5">User Name</h1>
        <p>Email: user@gamail.com</p>
        <Button onClick={handleLogout} variant="contained" sx={{ margin: "2rem 0rem" }}>Logout</Button>
      </div>
      {/* user profile information end */}       
    </div>
  )
}

export default UserProfile