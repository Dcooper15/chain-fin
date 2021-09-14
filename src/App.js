import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import MainSearch from "./components/MainSearch";
import MainSectors from "./components/Sectors/MainSectors";
import MainTopMovers from "./components/TopMovers/MainTopMovers";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import MoverStocks from "./components/TopMovers/MoverStocks";
import FullOptionChain from "./components/OptionChain/FullOptionChain";
import SectorStocks from "./components/Sectors/SectorStocks";
import "./App.css";

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#756300",
    },
    secondary: {
      main: "#d4af37",
      dark: "#d4af37",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <>
        <Router>
          <Route exact path="/">
            <Navbar />
            <br></br>
            <div>
              <br></br>
              <br></br>
              <br></br>
              <MainSearch />
            </div>

            <div className="sectorMenu">
              <div className="menuRow">
                <div className="columnLeft">
                  <h3 className="menuLink">
                    <Link
                      to="/sector"
                      style={{ textDecoration: "none", color: "#d4af37" }}
                    >
                      Sectors
                    </Link>
                  </h3>
                </div>
                <div className="columnRight">
                  <h3 className="menuLink">
                    <Link
                      to="/topmovers"
                      style={{ textDecoration: "none", color: "#d4af37" }}
                    >
                      Top Movers
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
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
              <ThemeProvider>
            <Navbar />
            <Link to="/topmovers" style={{ color: "#d4af37", textDecoration: "none" }}>
                {"< Top Movers"}
            </Link>
              <MoverStocks />
              </ThemeProvider>
            </Route>
           
            <Route path="/chain/:symbol">
            <Navbar />
            <Link to="/" style={{ color: "#d4af37", textDecoration: "none", fontSize:"90%" }}>
                {"Home"}
            </Link>
            <br></br>
            <Link to="/sector" style={{ color: "#d4af37", textDecoration: "none", fontSize:"90%"  }}>
                {"Sectors"}
              </Link>
              <br></br>
            <Link to="/topmovers" style={{ color: "#d4af37", textDecoration: "none", fontSize:"90%"  }}>
                {"Top Movers"}
            </Link>
            <br></br>
              <FullOptionChain />
            </Route>
            <Route path="/sector/:sector">
              <Navbar />
              <Link to="/sector" style={{ color: "#d4af37", textDecoration: "none" }}>
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
