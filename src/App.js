import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainSearch from './components/MainSearch';
import MainTech from "./components/Tech/MainTech";
import MainFinance from "./components/Finance/MainFinance";
import MainEntertainment from "./components/Entertainment/MainEntertainment";
import MainTravel from "./components/Travel/MainTravel";



class App extends Component {
  state = {
    stockData: [],
  };

  searchStocks = async text => {

    const res = await axios.get(
      `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${text}&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=NOV&toDate=2020-11-08&range=OTM`
    );
    
    this.setState({ stockData: [res.data] });
    console.log(res);
  }

  render() {

    return (
      <>
      <Router>
        <Route exact path="/">
        <div>
          <h1>Hello CC Scanner</h1>
         <MainSearch />
        </div>
        <h2>Sectors</h2>
        <h3><Link to="/finance">View Finance Stocks</Link></h3>
        <h3><Link to="/entertainment">View Entertainment Stocks</Link></h3>
        <h3><Link to="/tech">View Tech Stocks</Link></h3>
        <h3><Link to="/travel">View Travel Stocks</Link></h3>
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
