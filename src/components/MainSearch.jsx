import React, { Component } from "react";
import axios from "axios";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Search from "./Search";
import { Card, Button } from "@material-ui/core";
import Symbol from "./DataPoints/Symbol";
import StockPrice from "./DataPoints/StockPrice";
import StrikeOneOtm from "./DataPoints/StrikeOneOtm";
import PercentChange from "./DataPoints/PercentChange";
import HundredShares from "./DataPoints/HundredShares";
import BidPrice from "./DataPoints/BidPrice";
import AskPrice from "./DataPoints/AskPrice";
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

const date = new Date();
let errorSymbol = [];
class MainSearch extends Component {
  state = {
    stockData: [],
    error: [],
  };

  searchStocks = async (text) => {
    const res = await axios.get(
      `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${text}&contractType=ALL&strikeCount=2&toDate=${process.env.REACT_APP_DATE}&range=OTM`
    );
    console.log("data", res.data);
    if (res.data.status === "FAILED") {
      errorSymbol = res.data.symbol + " is not a valid symbol";
      this.setState({ error: [...this.state.error, res.data.symbol] });
    } else {
      errorSymbol = [];
      this.setState({ stockData: [...this.state.stockData, res.data] });
    }
  };

  render() {
    const { stockData } = this.state;
    const { error } = this.state;
    return (
      <div>
        <Search searchStocks={this.searchStocks} />
        {error.length ? <i style={{ color: "#d4af37" }}>{errorSymbol}</i> : " "}
        {!!stockData.length ? (
          stockData.map((option) => (
            <Card
              className="stockInfo"
              variant="outlined"
              raised={true}
              style={{
                backgroundColor: "#3D3D3D",
                borderColor: "#d4af37",
                color: "#fff",
                borderRadius: "15px",
                paddingLeft: "2%",
                marginLeft: "3%",
                marginRight: "3%",
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
              <></>{" "}
              <Button
                className="searchButton"
                type="submit"
                variant="outlined"
                size="small"
                style={{ marginLeft: "4%" }}
                color="secondary"
              >
                {
                  <Link
                    to={`/chain/${option.symbol}`}
                    style={{ textDecoration: "none", color: "#d4af37" }}
                  >
                    Chain
                  </Link>
                }
              </Button>
              <br></br>
              <hr></hr>
              <StrikeOneOtm option={option} />
              <></>
              <PercentChange option={option} />
              <br></br>
              <HundredShares option={option} />
              <></>
              <i style={{ color: "#d4af37" }}>Greeks</i>
              <BidPrice option={option} />
              <Delta option={option} />
              <AskPrice option={option} type={'call'}/>
              <></>
              <Theta option={option} />
              <PremiumCollected option={option} type={'call'} />
              <></>
              <Rho option={option} />
              <OpenInterest option={option} type={'call'} />
              <></>
              <Gamma option={option} />
              <Volume option={option} type={'call'}/>
              <></>
              <Vega option={option} type={'call'}/>
              <Volatility option={option} type={'call'}/>
              <DaysToExpiration option={option} type={'call'}/>
              <>
                <>Exp Date </>
                <Moment
                  add={{
                    days: Object.keys(option.callExpDateMap).map((entry) => {
                      return Object.keys(option.callExpDateMap[entry]).map(
                        (innerArrayID) =>
                          option.callExpDateMap[entry][innerArrayID][0]
                            .daysToExpiration
                      );
                    })[0][1],
                  }}
                  format="MMM DD"
                >
                  {date}
                </Moment>
              </>
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
