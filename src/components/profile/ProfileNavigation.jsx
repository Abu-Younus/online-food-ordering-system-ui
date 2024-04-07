import { AccountBalanceWallet, AddReaction, Event, Favorite, Logout, NotificationsActive, ShoppingBag } from '@mui/icons-material'
import { Divider, Drawer, useMediaQuery } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../state/authenticate/Action'
import { useDispatch } from 'react-redux'


{/* profile navigation menu item array start */}
const menu = [
    {
        title: "Orders",
        icon: <ShoppingBag />
    },
    {
        title: "Favorites",
        icon: <Favorite />
    },
    {
        title: "Address",
        icon: <AddReaction />
    },
    {
        title: "Payments",
        icon: <AccountBalanceWallet />
    },
    {
        title: "Notifications",
        icon: <NotificationsActive />
    },
    {
        title: "Events",
        icon: <Event />
    },
    {
        title: "Logout",
        icon: <Logout />
    },
]
{/* profile navigation menu item array end */}

const ProfileNavigation = ({open, handleClose}) => {

  {/* small screen max width value */}
  const isSmallScreen = useMediaQuery('(max-width:900px)');

  const dispatch = useDispatch()

  {/* router navigate function */}
  const navigate = useNavigate()
  const handleNavigate = (item) => {
    if(item.title === "Logout") {
        dispatch(logout())
        navigate("/")
    }
    else {
        navigate(`/my-profile/${item.title.toLowerCase()}`)
    }
  }
    
  return (
    <div>
        {/* profile navigation drawer start */}
        <Drawer 
            variant={isSmallScreen ? "temporary" : "permanent"} 
            open={isSmallScreen ? open : false} 
            onClose={handleClose} 
            anchor="left" 
            sx={{ zIndex: 1, position: "sticky" }}
        >
            <div className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-6 pt-16">
                {
                    /* profile navigation menu item array map function */
                    menu.map((item, index) =>
                        <>
                            <div onClick={() => handleNavigate(item)} className="px-5 flex items-center space-x-5 cursor-pointer">
                                {item.icon}
                                <span>{item.title}</span>
                            </div>
                            {
                                index !== menu.length - 1 && <Divider />
                            }
                        </>
                    )
                }
            </div>
        </Drawer>
        {/* profile navigation drawer end */}
    </div>
  )
}

export default ProfileNavigation