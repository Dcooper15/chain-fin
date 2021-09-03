import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "@material-ui/core";
import Symbol from "../DataPoints/Symbol";
import StockPrice from "../DataPoints/StockPrice";
import HundredShares from "../DataPoints/HundredShares";
import BidPrice from "../DataPoints/BidPrice";
import PremiumCollected from "../DataPoints/PremiumCollected";
import OpenInterest from "../DataPoints/OpenInterest";
import Volatility from "../DataPoints/Volatility";
import DaysToExpiration from "../DataPoints/DaysToExpiration";

//const moverUrl = `https://api.tdameritrade.com/v1/marketdata/$COMPX/movers?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&direction=up&change=percent`;

function COMPX() {
  const [compxData, setCompxData] = useState([]);
  const compxDataArray = [];
  console.log("comxar", compxDataArray);
  useEffect(() => {
    
    axios
      .get(
        `https://api.tdameritrade.com/v1/marketdata/$COMPX/movers?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&direction=up&change=percent`
      )
      .then((response) => {
        response.data
          .map((compxSymbol) => compxSymbol.symbol)

          .map((symbol) =>
            axios
              .get(
                `https:api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=SEP&toDate=2022-09-04&range=OTM`
              )
              .then((response) => {
                if (response.data.status === "SUCCESS") {
                  compxDataArray.push(response.data);
                }
                setCompxData([compxDataArray])
              })
          );
      });
  }, []);

  return (
    <>
      <h2>NASDAQ</h2>
      {!!compxData.length ? (
        compxData.map((stock) =>
          stock.map((option) => (
            <Card
              className="stockInfo"
              variant="outlined"
              style={{
                backgroundColor: "#6d76f7",
                color: "#fff",
                borderRadius: "15px",
              }}
            >
              <Symbol option={option} />
              <br></br>
              <StockPrice option={option} />
              <br></br>
              <HundredShares option={option} />
              <br></br>
              <BidPrice option={option} />
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
        )
      ) : (
        <p>loading data...</p>
      )}
    </>
  );
}

export default COMPX;
