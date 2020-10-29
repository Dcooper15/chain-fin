import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainSearch from './components/MainSearch';
import MainTech from "./components/Tech/MainTech";
import MainFinance from "./components/Finance/MainFinance";
import MainEntertainment from "./components/Entertainment/MainEntertainment";
import MainTravel from "./components/Travel/MainTravel";
import AppInfo from "./components/AppInfo";
import Navbar from "./components/Navbar/Navbar";
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
        </div>
        <div className="AppInfo">
          <AppInfo />
        </div>
        <div className="sectorMenu">
          <h2 className="sectorMain">Sectors</h2>
          <div className="financeSect"><h3><Link to="/finance" style={{color: '#4B0082'}} style={{ textDecoration: 'none' }}>View Finance Stocks</Link></h3></div>
          <div className="entertainmentSect"><h3><Link to="/entertainment" style={{color: '#6568f4'}} style={{ textDecoration: 'none' }}>View Entertainment Stocks</Link></h3></div>
          <div className="techSect"><h3><Link to="/tech" style={{color: '#6568f4'}} style={{ textDecoration: 'none' }}>View Tech Stocks</Link></h3></div>
          <div className="travelSect"><h3><Link to="/travel" style={{color: '#6568f4'}} style={{ textDecoration: 'none' }}>View Travel Stocks</Link></h3></div>
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
