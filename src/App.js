import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  lightTheme,
  darkTheme,
  GlobalBackGround,
} from "./components/Styles/theme";
import {
  // SectorContainer,
  IntroContainer,
} from "./components/Styles/styledElements";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import BasicNav from "./components/HomePage/BasicNav";
//import Routes from "./components/HomePage/Routes";
//import MainMenu from "./components/HomePage/MainMenu";
//import TestConnection from "./components/TestServer/TestConnection";
//import MainSearch from "./components/MainSearch";
//import MyWatchList from "./components/HomePage/MyWatchList";

import "./App.css";

function App() {
  const [theme, 
    // setTheme
  ] = useState("dark");

  // const lightDarkChange = () => {
  //   theme === "light" ? setTheme("dark") : setTheme("light");
  // };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalBackGround />
      {/* <TestConnection /> */}
      <Router>
        {/* <BasicNav theme={theme} lightDarkChange={lightDarkChange} /> */}
        <Route exact path="/">
          <IntroContainer>
            This site has moved to{" "} 
            <strong><a 
            style={{color: "#d4af37"}}
            href="https://www.chainpaddle.com/">https://www.chainpaddle.com/</a></strong>
          </IntroContainer>
          {/* <SectorContainer>
            <MainMenu /> */}

            {/* <MainSearch />  */}
            {/* <MyWatchList /> */}
          {/* </SectorContainer> */}
          <br></br>
        </Route>
        {/* <Routes theme={theme} /> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
