import React, { Component } from 'react'
import axios from "axios";
import Search from "./Search";

class MainSearch extends Component {
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
            <div>

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

        )
    }
}


export default MainSearch;