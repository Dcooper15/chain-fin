import React, { Component } from "react";
import axios from "axios";
import Moment from "react-moment";
import { withTheme } from "styled-components";
import Search from "./Search";
import { Card } from "@material-ui/core";
import MapDataPoints from "./DataPoints/MapDataPoints";
import MapCardHeader from "./DataPoints/MapCardHeader";
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
      `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${text}&contractType=ALL&strikeCount=2&includeQuotes=TRUE&toDate=${process.env.REACT_APP_DATE}&range=OTM`
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
    console.log(this.props.theme);
    return (
      <div>
        <Search searchStocks={this.searchStocks} />
        {error.length ? <i style={{ color: "#d4af37" }}>{errorSymbol}</i> : " "}
        {!!stockData.length ? (
          stockData.map((option) => (
            <Card
              className="stockInfo"
              style={
                this.props.theme.name === "dark"
                  ? {
                      backgroundColor: "#3D3D3D",
                      borderColor: "#d4af37",
                      color: "#ffebcd",
                    }
                  : {
                      backgroundColor: "#ebebeb",
                      borderColor: "#00afc9",
                      color: "#002933",
                    }
              }
              variant="outlined"
              //hidden={handleTypeChange === true}
              raised={true}
            >
              {" "}
              <MapCardHeader option={option} />
              <MapDataPoints
                option={option}
                chainType={"summary"}
                mapType={"call"}
              />
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

export default withTheme(MainSearch);
