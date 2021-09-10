import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import MainSearch from "./components/MainSearch";
import MainSectors from "./components/Sectors/MainSectors";
import MainTopMovers from "./components/TopMovers/MainTopMovers";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import DJI from "./components/TopMovers/DJI";
import COMPX from "./components/TopMovers/COMPX";
import SPX from "./components/TopMovers/SPX";
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
              <br></br>
              <MainSearch />
              {/* <Alert /> */}
            </div>

            <div className="sectorMenu">
              <div class="row">
                <div class="column" className="financeSect">
                  <h3 className="linkHeader">
                    <Link
                      to="/topmovers"
                      style={{ textDecoration: "none", color: "#d4af37" }}
                    >
                      Top Movers
                    </Link>
                  </h3>
                </div>
                <div class="column" className="entertainmentSect">
                  <h3 className="linkHeader">
                    <Link
                      to="/sector"
                      style={{ textDecoration: "none", color: "#d4af37" }}
                    >
                      Sectors
                    </Link>
                  </h3>
                </div>
              </div>

              {/*<div class="row">
                  <div class="column"className="techSect"><h3 className="linkHeader"><Link to="/sector" style={{ textDecoration: 'none', color: '#d4af37' }}>Sectors</Link></h3></div>
                  <div class="column" className="travelSect"><h3 className="linkHeader"><Link to="/sector/travel" style={{ textDecoration: 'none', color: '#d4af37' }}>Travel</Link></h3></div>
                  </div>
                  <div class="row">
                 <div class="column" className="travelSect"><h3 className="linkHeader"><Link to="/topmovers" style={{ textDecoration: 'none', color: '#d4af37' }}>Top Movers</Link></h3></div>
              </div> */}
            </div>
            <br></br>
            <br></br>

            <div className="Footer">
              <Footer />
            </div>
          </Route>

          <div className="Routes">
            <Route exact path="/sector">
              <MainSectors />
            </Route>

            <Route exact path="/topmovers">
              <MainTopMovers />
            </Route>

            <Route path="/topmovers/compx">
              <COMPX />
            </Route>
            <Route path="/topmovers/dji">
              <DJI />
            </Route>
            <Route path="/topmovers/spx">
              <SPX />
            </Route>
            <Route path="/chain/:symbol">
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
