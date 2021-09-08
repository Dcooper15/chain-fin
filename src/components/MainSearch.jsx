import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "./Search";
import { Card } from "@material-ui/core";
import StockPrice from "./DataPoints/StockPrice";
import HundredShares from "./DataPoints/HundredShares"
import BidPrice from "./DataPoints/BidPrice";
import PremiumCollected from "./DataPoints/PremiumCollected";
import OpenInterest from "./DataPoints/OpenInterest";
import Volatility from "./DataPoints/Volatility";
import DaysToExpiration from "./DataPoints/DaysToExpiration";
import "./MainSearch.css";

class MainSearch extends Component {
  state = {
    stockData: [],
  };

  searchStocks = async (text) => {
    const res = await axios.get(
      `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${text}&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=${process.env.REACT_APP_MONTH}&toDate=${process.env.REACT_APP_DATE}&range=OTM`
    );

    this.setState({ stockData: [...this.state.stockData, res.data] });
    console.log("search res is...", res);
  };

  render() {
    const { stockData } = this.state;

    return (
      <div>
        <Search searchStocks={this.searchStocks} />
        {!!stockData.length ? (
          stockData.map((option) => (
            <Card
              className="stockInfo"
              variant="outlined"
              raised="true"
              style={{
                backgroundColor: "#3D3D3D",
                borderColor: "#d4af37",
                color: "#fff",
                borderRadius: "15px",
              }}
            >
             <Link to={`/chain/${option.symbol}`} style={{ textDecoration: "underline", color: "#d4af37" }}>  <i key={option.id}>{option.symbol}</i></Link>
             <br></br>
              <StockPrice option={option} />

              <br></br>
       
             <HundredShares option={option}/>

              <br></br>
             <BidPrice option={option}/>

              <br></br>
              <PremiumCollected option={option} />

              <br></br>
              <OpenInterest option={option} />

              <br></br>
              <Volatility option={option} />

              <br></br>
              <DaysToExpiration option={option} /> 
            </Card>
          ))
        ) : (
          <p className="searchInfo">
            Search for stocks to view their call option data. Add multiple to
            compare data.
          </p>
        )}
      </div>
    );
  }
}

export default MainSearch;
