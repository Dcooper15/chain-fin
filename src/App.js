import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import MainSearch from './components/MainSearch';
import MainTech from "./components/Tech/MainTech";
import MainFinance from "./components/Finance/MainFinance";
import MainEntertainment from "./components/Entertainment/MainEntertainment";
import MainTravel from "./components/Travel/MainTravel";
import MainTopMovers from './components/TopMovers/MainTopMovers';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import DJI from './components/TopMovers/DJI';
import COMPX from './components/TopMovers/COMPX';
import SPX from './components/TopMovers/SPX';
import FullOptionChain from './components/OptionChain/FullOptionChain';
import './App.css';

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#756300',
      
 
    },
    secondary: {
      main: '#d4af37',
      dark: '#d4af37'
    }
  }
})


function App() {
  

    return (
      <ThemeProvider theme={darkTheme}>
      <>
       
      <Router>
        <Route exact path="/">
        <Navbar />
        <br></br>
        <div>
          <br></br><br></br><br></br><br></br>
         <MainSearch />
         {/* <Alert /> */}
        </div>
        
        <div className="sectorMenu">
          <div class="row">
            <div class="column" className="financeSect"><h3 className="linkHeader"><Link to="/finance" style={{ textDecoration: 'none' ,color: '#d4af37'}}>Finance</Link></h3></div>
            <div class="column" className="entertainmentSect"><h3 className="linkHeader"><Link to="/entertainment"  style={{ textDecoration: 'none', color: '#d4af37'}}>Entertainment</Link></h3></div>
          </div>
          
          <div class="row">
            <div class="column"className="techSect"><h3 className="linkHeader"><Link to="/tech" style={{ textDecoration: 'none', color: '#d4af37' }}>Tech</Link></h3></div>
            <div class="column" className="travelSect"><h3 className="linkHeader"><Link to="/travel" style={{ textDecoration: 'none', color: '#d4af37' }}>Travel</Link></h3></div>
          </div>
          <div class="row">
            <div class="column" className="travelSect"><h3 className="linkHeader"><Link to="/topmovers" style={{ textDecoration: 'none', color: '#d4af37' }}>Top Movers</Link></h3></div>
          </div>
        </div>
        <br></br><br></br>
        
        <div className="Footer">
          <Footer />
        </div>
        </Route>
        
        
        <div className="Routes">
          <Route path="/tech">
            <MainTech />
          </Route>
        
        
          <Route path="/finance">
            <MainFinance />
          </Route>
        
       
          <Route path="/travel">
            <MainTravel />
          </Route>
        
           <Route path="/entertainment">
            <MainEntertainment />
          </Route>

           <Route path="/topmovers">
             <MainTopMovers />
           </Route>
           
           <Route path="/compx">
            <COMPX />
           </Route>
           <Route path="/dji">
             <DJI />
           </Route>
           <Route path="/spx">
            <SPX />
           </Route> 
           <Route path="/chain/:symbol">
            <FullOptionChain />
           </Route>
          
        </div>
        </Router>
       
      </>
      </ThemeProvider>
    );
  
}

export default App;
