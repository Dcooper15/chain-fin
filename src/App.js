import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainSearch from './components/MainSearch';
import MainTech from "./components/Tech/MainTech";
import MainFinance from "./components/Finance/MainFinance";
import MainEntertainment from "./components/Entertainment/MainEntertainment";
import MainTravel from "./components/Travel/MainTravel";
import AppInfo from "./components/AppInfo";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import './App.css';



class App extends Component {
  render() {

    return (
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
        <div className="AppInfo">
          <AppInfo />
        </div>
        <div className="sectorMenu">
          <h2 className="sectorMain">Sectors</h2>
          <div className="financeSect"><h3><Link to="/finance" style={{ textDecoration: 'none' }}>Finance Stocks</Link></h3></div>
          <div className="entertainmentSect"><h3><Link to="/entertainment"  style={{ textDecoration: 'none' }}>Entertainment Stocks</Link></h3></div>
          <div className="techSect"><h3><Link to="/tech" style={{ textDecoration: 'none' }}>Tech Stocks</Link></h3></div>
          <div className="travelSect"><h3><Link to="/travel" style={{ textDecoration: 'none' }}>Travel Stocks</Link></h3></div>
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
        </div>
        </Router>
       
      </>
    );
  }
}

export default App;
