import React, { Component } from 'react'
import axios from "axios";
import Search from "./Search";
import { Card } from "@material-ui/core";
import './MainSearch.css';



class MainSearch extends Component {
    state = {
      stockData: [],
    };
    
  
    searchStocks = async text => {
  
      const res = await axios.get(
        `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${text}&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=${process.env.REACT_APP_MONTH}&toDate=${process.env.REACT_APP_DATE}&range=OTM`
      );
      
      this.setState({ stockData: [...this.state.stockData, res.data] });
      console.log("search res is...", res);
    }

    render() {
        const { stockData } = this.state;
       


        return (
            <div>

            <Search searchStocks={this.searchStocks} />
          {!!stockData.length ? (
            
            stockData.map((option) => (
              <Card className="stockInfo" variant="outlined" style={{backgroundColor: "#7161ef", color: '#fff', borderRadius: '17px'}}><i key={option.id}>
                {option.symbol}</i><br></br><i>Stock Price:{" "}
                ${option.underlyingPrice.toFixed(2)}</i><br></br><i> Cost for 100 shares: $
                {option.underlyingPrice.toFixed(2) * 100}</i><br></br><i>Bid Price: $
                {Object.keys(option.callExpDateMap).map((entry) => {
                  return Object.keys(
                    option.callExpDateMap[entry]
                  ).map((innerArrayID) =>
                    option.callExpDateMap[entry][innerArrayID][0].bid.toFixed(2)
                  );
                })}{" "}</i>
                <br></br><i>Premium collected: $
                {Object.keys(option.callExpDateMap).map((entry) => {
                  return Object.keys(option.callExpDateMap[entry]).map(
                    (innerArrayID) =>
                      option.callExpDateMap[entry][innerArrayID][0].bid.toFixed(
                        2
                      ) * 100
                  );
                })}
                 <br></br>
            <i key={6}>Open Interest:{' '}
            {Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(option.callExpDateMap[entry]).map(
            (innerArrayID) =>
            option.callExpDateMap[entry][innerArrayID][0].openInterest
          
            );
            })}
            </i>
            <br></br>
            <i key={7}>
            Volatility:{' '}
            {Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(option.callExpDateMap[entry]).map(
            (innerArrayID) =>
            option.callExpDateMap[entry][innerArrayID][0].volatility.toFixed(2)
          
            );
            })}
            </i>
            <br></br>
            <i key={8}>
            Days to Expiration:{' '}
            {Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(option.callExpDateMap[entry]).map(
            (innerArrayID) =>
            option.callExpDateMap[entry][innerArrayID][0].daysToExpiration
          
            );
            })}
            </i>
              </i></Card>
            ))
          ) : ( <p className="searchInfo">Search for stocks to view their call option data. Add multiple to compare data.</p>
          )}



            </div>

        )
    }
}


export default MainSearch;