import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  lightTheme,
  darkTheme,
  GlobalBackGround,
} from "./components/Styles/theme";
import {
  SectorMenu,
  MenuRow,
  ColumnRight,
  ColumnLeft,
  StyledLink,
} from "./components/Styles/styledElements";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainSearch from "./components/MainSearch";
import MainSectors from "./components/Sectors/MainSectors";
import MainTopMovers from "./components/TopMovers/MainTopMovers";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import MoverStocks from "./components/TopMovers/MoverStocks";
import FullOptionChain from "./components/OptionChain/FullOptionChain";
import SectorStocks from "./components/Sectors/SectorStocks";
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
        <Router>
          <Route exact path="/">
            <Navbar />

            <Button
              startIcon={theme === "light" ? "Dark" : "Light"}
              variant={"outlined"}
              size="small"
              color="primary"
              onClick={lightDarkChange}
              style={{ marginLeft: "3%" }}
            ></Button>

            <p className="anySymbol">
              Light Theme is in progress. Stay in Dark Theme for now...
              Some accent colors (buttons)
              may seem a bit off in Dark Theme at the moment.
            </p>
            <br></br>
            <div>
              <br></br>
              <br></br>
              <br></br>
              <MainSearch />
            </div>

            <SectorMenu>
              <MenuRow>
                <ColumnLeft>
                  <h3>
                    <StyledLink to="/sector">Sectors</StyledLink>
                  </h3>
                </ColumnLeft>

                <ColumnRight>
                  <h3>
                    <StyledLink to="/topmovers">Top Movers</StyledLink>
                  </h3>
                </ColumnRight>
              </MenuRow>
            </SectorMenu>
            <br></br>
            <br></br>

            <div className="Footer">
              <Footer />
            </div>
          </Route>

          <div className="Routes">
            <Route exact path="/sector">
              <Navbar />
              <Link to="/" style={{ color: "#d4af37", textDecoration: "none" }}>
                {"< Home"}
              </Link>
              <MainSectors />
            </Route>

            <Route exact path="/topmovers">
              <Navbar />
              <Link to="/" style={{ color: "#d4af37", textDecoration: "none" }}>
                {"< Home"}
              </Link>
              <MainTopMovers />
            </Route>

            <Route path="/topmovers/:market">
              
                <Navbar />
                <Link
                  to="/topmovers"
                  style={{ color: "#d4af37", textDecoration: "none" }}
                >
                  {"< Top Movers"}
                </Link>
                <MoverStocks />
              
            </Route>

            <Route path="/chain/:symbol">
              <Navbar />
              <Link
                to="/"
                style={{
                  color: "#d4af37",
                  textDecoration: "none",
                  fontSize: "90%",
                }}
              >
                {"Home"}
              </Link>
              <br></br>
              <Link
                to="/sector"
                style={{
                  color: "#d4af37",
                  textDecoration: "none",
                  fontSize: "90%",
                }}
              >
                {"Sectors"}
              </Link>
              <br></br>
              <Link
                to="/topmovers"
                style={{
                  color: "#d4af37",
                  textDecoration: "none",
                  fontSize: "90%",
                }}
              >
                {"Top Movers"}
              </Link>
              <br></br>
              <FullOptionChain />
            </Route>
            <Route path="/sector/:sector">
              <Navbar />
              <Link
                to="/sector"
                style={{ color: "#d4af37", textDecoration: "none" }}
              >
                {"< Sectors"}
              </Link>
              <SectorStocks />
            </Route>
          </div>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
