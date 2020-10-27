import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from './components/Search';
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
    const { stockData } = this.state;

    return (
      <>
      <Router>
        <Route exact path="/">
        <div>
          <h1>Hello CC Scanner</h1>
          <Search searchStocks={this.searchStocks} />
          {!!stockData.length ? (
            stockData.map((option) => (
              <i key={option.id}>
                {option.symbol}, Stock Price:{" "}
                {option.underlyingPrice.toFixed(2)} Cost for 100 shares: $
                {option.underlyingPrice.toFixed(2) * 100} ___{" "}
                {Object.keys(option.callExpDateMap).map((entry) => {
                  return Object.keys(
                    option.callExpDateMap[entry]
                  ).map((innerArrayID) =>
                    option.callExpDateMap[entry][innerArrayID][0].ask.toFixed(2)
                  );
                })}{" "}
                Premium collected: $
                {Object.keys(option.callExpDateMap).map((entry) => {
                  return Object.keys(option.callExpDateMap[entry]).map(
                    (innerArrayID) =>
                      option.callExpDateMap[entry][innerArrayID][0].ask.toFixed(
                        2
                      ) * 100
                  );
                })}
              </i>
            ))
          ) : (
            <p>loading data...</p>
          )}
        </div>
        <h2>Sectors</h2>
        <h3><Link to="/finance">View Finance Stocks</Link></h3>
        <h3><Link to="/entertainment">View Entertainment Stocks</Link></h3>
        <h3><Link to="/tech">View Tech Stocks</Link></h3>
        <h3><Link to="/travel">View Travel Stocks</Link></h3>
        </Route>
        
        
        <div className="MainTech">
          <Route path="/tech">
            <MainTech />
          </Route>
        </div>
        <div className="MainFinance">
          <Route path="/finance">
            <MainFinance />
          </Route>
        </div>
        <div className='MainTravel'>
          <Route path="/travel">
            <MainTravel />
          </Route>
        </div>
        <div className="MainEntertainment">
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
