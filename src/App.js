import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  lightTheme,
  darkTheme,
  GlobalBackGround,
} from "./components/Styles/theme";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "./components/HomePage/Routes";
import MainMenu from "./components/HomePage/MainMenu";
import MainSearch from "./components/MainSearch";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import { Button } from "@material-ui/core";
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import Brightness5Icon from '@mui/icons-material/Brightness5';

import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");

  const lightDarkChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalBackGround />

      <>
        <Button
          startIcon={theme === "light" ? "Dark" : "Light"}
          variant={"outlined"}
          size="small"
          color="primary"
          onClick={lightDarkChange}
          style={{ marginLeft: "3%" }}
        ></Button>{" "}
        <i style={{ fontSize: "10px" }}>light/dark in progress</i>
        <Router>
          <Route exact path="/">
            <Navbar />
            <br></br>
            <br></br>

            <MainSearch />

            <MainMenu />
            <br></br>

            <div className="Footer">
              <Footer />
            </div>
          </Route>
          <Routes theme={theme} />
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
