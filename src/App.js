import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import MainTech from "./components/Tech/MainTech";
import MainFinance from "./components/Finance/MainFinance";
import MainEntertainment from "./components/Entertainment/MainEntertainment";
import MainTravel from "./components/Travel/MainTravel";


class App extends Component {
  state = {
    stockData: [],
  };

  async componentDidMount() {
    const res = await axios.get(
      `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=AAPL&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=OCT`
    );
    this.setState({ stockData: [...this.state.stockData, res.data] });
    console.log(res);
  }

  render() {
    const { stockData } = this.state;

    return (
      <>
        <div>
          <h1>Hello CC Scanner</h1>
          <h2>{stockData.symbol}</h2>
          {!!stockData.length ? (
            stockData.map((option) => (
              <i key={option.id}>
                {option.symbol}, Stock Price:{" "}
                {option.underlyingPrice.toFixed(2)} Cost for 100 shares: $
                {option.underlyingPrice * 100} ___{" "}
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
        <div className="MainTech">
          <MainTech />
        </div>
        <div className="MainFinance">
          <MainFinance />
        </div>
        <div className='MainTravel'>
            <MainTravel />
        </div>
        <div className="MainEntertainment">
            <MainEntertainment />
        </div>
      </>
    );
  }
}

export default App;
