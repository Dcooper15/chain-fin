import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "./Search";
import { Card } from "@material-ui/core";
import Symbol from "./DataPoints/Symbol";
import StockPrice from "./DataPoints/StockPrice";
import StrikeOneOtm from "./DataPoints/StrikeOneOtm";
// import PercentChange from "../DataPoints/PercentChange";
import HundredShares from "./DataPoints/HundredShares";
import BidPrice from "./DataPoints/BidPrice";
import PremiumCollected from "./DataPoints/PremiumCollected";
import OpenInterest from "./DataPoints/OpenInterest";
import Volume from "./DataPoints/Volume";
import Volatility from "./DataPoints/Volatility";
import Delta from "./DataPoints/Delta";
import Theta from "./DataPoints/Theta";
import Rho from "./DataPoints/Rho";
import Gamma from "./DataPoints/Gamma";
import Vega from "./DataPoints/Vega";
import DaysToExpiration from "./DataPoints/DaysToExpiration";
import "./MainSearch.css";

class MainSearch extends Component {
  state = {
    stockData: [],
    error: [],
  };

  searchStocks = async (text) => {
    const res = await axios.get(
      `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${text}&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=${process.env.REACT_APP_MONTH}&toDate=${process.env.REACT_APP_DATE}&range=OTM`
    );
    console.log("data", res.data);
    if (res.data.status === "FAILED") {
      this.setState({ error: [...this.state.error, res.data.symbol] });
    } else {
      this.setState({ stockData: [...this.state.stockData, res.data] });
    }
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
              <>
                {" "}
                <Link
                  to={`/chain/${option.symbol}`}
                  style={{ textDecoration: "none", color: "#d4af37" }}
                >
                  <Symbol option={option} />
                </Link>
              </>{" "}
              <StockPrice option={option} />
              <br></br>
              <hr></hr>
              <StrikeOneOtm option={option} />
              <br></br>
              <HundredShares option={option} />
              <></>
              <Delta option={option} />
              <BidPrice option={option} />
              <></>
              <Theta option={option} />
              <PremiumCollected option={option} />
              <></>
              <Rho option={option} />
              <OpenInterest option={option} />
              <></>
              <Gamma option={option} />
              <Volume option={option} />
              <></>
              <Vega option={option} />
              <Volatility option={option} />
              <DaysToExpiration option={option} />
            </Card>
          ))
        ) : (
          <p className="searchInfo"> </p>
        )}
      </div>
    );
  }
}

export default MainSearch;
