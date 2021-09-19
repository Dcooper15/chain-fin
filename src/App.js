import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  lightTheme,
  darkTheme,
  GlobalBackGround,
} from "./components/Styles/theme";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BasicNav from "./components/HomePage/BasicNav";
import Routes from "./components/HomePage/Routes";
import MainMenu from "./components/HomePage/MainMenu";
import MainSearch from "./components/MainSearch";
//import Navbar from "./components/Navbar/Navbar";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");

  const lightDarkChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalBackGround />

      <Router>
        <BasicNav theme={theme} lightDarkChange={lightDarkChange} />
        <Route exact path="/">
          <br></br>
          <br></br>
          <br></br>

          <MainSearch />

          <MainMenu />
          <br></br>
        </Route>
        <Routes theme={theme} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
