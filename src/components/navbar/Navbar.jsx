import { Avatar, Badge, IconButton } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { pink } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { store } from "../state/store";

const Navbar = () => {
  {/* navigate state */}
  const navigate = useNavigate()

  {/* authenticate & cart state */}
  const {auth, cart} = useSelector(store=>store)

  const handleUserProfileNavigate = () => {
    if(auth.user.role === "ROLE_CUSTOMER") {
      navigate("/my-profile")
    }
    else {
      navigate("/admin/restaurant")
    }
  }

  return (
    <div className="px-5 sticky top-0 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between">
      {/* App Logo */}
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li onClick={() => navigate("/")} className="logo font-semibold text-2xl text-gray-300 list-none">
          Food
        </li>
      </div>
      {/* App Logo */}

      {/* Navbar Button */}
      <div className="flex items-center space-x-2 lg:space-x-10">
        <div>
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>

        <div>
          {
            auth.user ?
            <Avatar onClick={handleUserProfileNavigate} className="cursor-pointer" sx={{ bgcolor: "white", color: pink.A400 }}>
              {auth.user?.fullName[0].toUpperCase()}
            </Avatar> :
            <IconButton onClick={() => navigate("/account/login")}>
              <Person />
            </IconButton>
          }
        </div>

        <div>
          <IconButton onClick={() => navigate("/cart")}>
            <Badge color="secondary" badgeContent={cart.cart?.item.length}>
              <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
      {/* Navbar Button */}
    </div>
  );
};

export default Navbar;
