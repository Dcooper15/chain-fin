import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Card } from "@material-ui/core";
import Moment from "react-moment";


const date = new Date();

function FullOptionChain() {
  const { symbol } = useParams();
  const [stockPriceRender, setStockPrice] = useState([]);
  const [nameRender, setName] = useState([]);
  const [fullChain, setFullChainData] = useState([]);

  const dataArray = fullChain;

  useEffect(() => {
    axios
      .get(
        `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&contractType=CALL&strikeCount=3&fromDate=2021-09-03&toDate=2021-10-30`
      )
      .then((response) => {
        console.log("full res, ", response);
        const stockPrice = response.data.underlyingPrice.toFixed(2);
        setStockPrice([stockPrice]);
        const resSymbol = response.data.symbol;
        const keys = Object.keys(response.data.callExpDateMap)
          .map((entry) => {
            return Object.keys(response.data.callExpDateMap[entry]).map(
              (innerArrayID) =>
                response.data.callExpDateMap[entry][innerArrayID]
            );
          })
          .flat();
        setFullChainData(keys);

        axios
          .get(
            `https://api.tdameritrade.com/v1/instruments?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${resSymbol}&projection=symbol-search`
          )
          .then((response) => {
            const nameArray = [response.data]
              .map((symbolId) => Object.values(symbolId))
              .map((entryId) => Object.entries(entryId[0]))
              .flat();
            setName([nameArray.flat()]);
          });
      });
  }, [symbol]);

  return (
    <>
      
      <h5 className="sectorHeader">
        <Link to="/" style={{ color: "#d4af37", textDecoration: "none" }}>
          {" Home"}
        </Link>
        <br></br>
        <Link to="/sector" style={{ color: "#d4af37", textDecoration: "none" }}>
          {" Sectors"}
        </Link>
        <br></br>
        <Link
          to="/topmovers"
          style={{ color: "#d4af37", textDecoration: "none" }}
        >
          {" Top Movers"}
        </Link>
      </h5>
      {!!nameRender.length ? (
        <strong>{nameRender[0][nameRender[0].indexOf("symbol") + 3]}</strong>
      ) : (
        <p>loading data...</p>
      )}
      <br></br>
      <br></br>
      {stockPriceRender.length ? (
        <strong>
          {" "}
          Share Price: ${stockPriceRender}
          <br></br> Cost for 100 Shares: ${stockPriceRender * 100}
        </strong>
      ) : (
        <p>loading data...</p>
      )}
      {!!dataArray.length ? (
        dataArray.map((stock) =>
          stock.map((option) => (
            <Card
              className="stockInfo"
              variant="outlined"
              style={{
                backgroundColor: "#3D3D3D",
                borderColor: "#d4af37",
                color: "#fff",
                borderRadius: "15px",
              }}
            >
              <i>
                <strong>{option.description}</strong>
              </i>
              <hr></hr>
              <i>Strike Price: {option.strikePrice}</i>
              <br></br>
              <i>Bid: {option.bid}</i>
              <br></br>
              <i>Ask: {option.ask}</i>
              <br></br>
              <i>
                Premium Collected: $
                {(((option.ask + option.bid) / 2) * 100).toFixed(2)}
              </i>
              <br></br>
              <i>Open Interest: {option.openInterest}</i>
              <br></br>
              <i>Volatility: {option.volatility}</i>
              <br></br>
              <i>Days to Expiration: {option.daysToExpiration}</i>
              <br></br>
              <>Expiration Date: </>
              <>
                <Moment add={{ days: option.daysToExpiration }} format="MMM DD">
                  {date}
                </Moment>
              </>
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

export default FullOptionChain;
