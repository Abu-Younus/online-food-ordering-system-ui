import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme/DarkTheme";
import UserRoutes from "./routers/UserRoutes";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { getUser } from "./components/state/authenticate/Action";
import { store } from "./components/state/store";

function App() {
  /* dispatch state */
  const dispatch = useDispatch();

  /* get jwt for user data */
  const jwt = localStorage.getItem("jwt")

  /* auth reducer initialize */
  const {auth} = useSelector(store=>store)

  /* use effect hook for get data to login user */
  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt))
  },[auth.jwt])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <UserRoutes />
    </ThemeProvider>
  );
}

export default App;
