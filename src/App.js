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
        
        <div className="sectorMenu">
          <div class="row">
            <div class="column" className="financeSect"><h3 className="linkHeader"><Link to="/finance" style={{ textDecoration: 'none' ,color: '#1F51FF'}}>Finance</Link></h3></div>
            <div class="column" className="entertainmentSect"><h3 className="linkHeader"><Link to="/entertainment"  style={{ textDecoration: 'none', color: '#1F51FF'}}>Entertainment</Link></h3></div>
          </div>
          
          <div class="row">
            <div class="column"className="techSect"><h3 className="linkHeader"><Link to="/tech" style={{ textDecoration: 'none', color: '#1F51FF' }}>Tech</Link></h3></div>
            <div class="column" className="travelSect"><h3 className="linkHeader"><Link to="/travel" style={{ textDecoration: 'none', color: '#1F51FF' }}>Travel</Link></h3></div>
          </div>
        </div>
        {/* <div className="AppInfo">
          <AppInfo />
        </div> */}
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
