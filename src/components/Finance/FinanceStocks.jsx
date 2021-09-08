import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import Symbol from "../DataPoints/Symbol";
import StockPrice from "../DataPoints/StockPrice";
import HundredShares from "../DataPoints/HundredShares";
import BidPrice from "../DataPoints/BidPrice";
import PremiumCollected from "../DataPoints/PremiumCollected";
import OpenInterest from "../DataPoints/OpenInterest";
import Volatility from "../DataPoints/Volatility";
import DaysToExpiration from "../DataPoints/DaysToExpiration";

const finArray = ['AXP', 'BAC', 'C', 'JPM', 'WFC'];

function FinanceStocks() {
  const [namesRender, setNames] = useState([]);
  const [dataArray, setDataArray] = useState([]);

  
  useEffect(() => {
    const names = [];
    const chainData = [];
    finArray.map((symbol) =>
      axios
        .get(
          `https://api.tdameritrade.com/v1/instruments?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&projection=symbol-search`
        )
        .then((response) => {
          names.push(response.data);
          const namesArray = names
            .map((symbolId) => Object.values(symbolId))
            .map((entryId) => Object.entries(entryId[0]))
            .flat();
          setNames([namesArray.flat()]);
        })
        );
          finArray.map((symbol) =>
            axios
              .get(
                `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=${process.env.REACT_APP_MONTH}&toDate=${process.env.REACT_APP_DATE}&range=OTM`
              )
              .then((response) => {
                chainData.push(response.data);
              
                setDataArray([chainData]); 
              })
              
          );
     
  }, []);

  return (
    <>
      {!!dataArray.length ? (
        dataArray.map((stock) =>
          stock.map((option) => (
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
              <strong>
                {namesRender[0][namesRender[0].indexOf(option.symbol) + 2]}
              </strong>
              <br></br>
              <Link
                to={`/chain/${option.symbol}`}
                style={{ textDecoration: "underline", color: "#d4af37" }}
              >
                <Symbol option={option} />
              </Link>

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
      ;
    </>
  );
}

export default FinanceStocks;
