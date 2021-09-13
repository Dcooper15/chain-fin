import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Card } from "@material-ui/core";
import NameOptionChain from "../DataPoints/NameOptionChain"
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
      <h5 >
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
        <strong className="sectorHeader"><NameOptionChain namesRender={nameRender}/></strong>
      ) : (
        <p>loading data...</p>
      )}
      <br></br>
      {stockPriceRender.length ? (
        <strong>
          {" "}
          ${stockPriceRender}
          <br></br>100 Shares ${stockPriceRender * 100}
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
              <bold>
                <strong>{option.description}</strong>
              </bold>
              <hr></hr>
              <div className="dataContainer">
                <div className="dataHeader">Strike</div>
                <bold className="dataComponentData">{option.strikePrice}</bold>
              </div>
              <i style={{ color: "#d4af37" }}>Greeks</i>

              <div className="dataContainer">
                <div className="dataHeader">Bid</div>
                <bold className="dataComponentData">{option.bid}</bold>
              </div>
              <div className="dataGreekContainer">
                <div className="dataGreekHeader">Delta</div>
                <bold className="dataGreekComponentData">{option.delta}</bold>
              </div>
              <></>
              <div className="dataContainer">
                <div className="dataHeader">Ask</div>
                <bold className="dataComponentData">{option.ask}</bold>
              </div>
              <div className="dataGreekContainer">
                <div className="dataGreekHeader">Theta</div>
                <bold className="dataGreekComponentData">{option.theta}</bold>
              </div>
              <></>

              <div className="dataContainer">
                <div className="dataHeader">Premium</div>
                <bold className="dataComponentData">
                  ${(((option.ask + option.bid) / 2) * 100).toFixed(2)}
                </bold>
              </div>
              <div className="dataGreekContainer">
                <div className="dataGreekHeader">Rho</div>
                <bold className="dataGreekComponentData">{option.rho}</bold>
              </div>
              <></>
              <div className="dataContainer">
                <div className="dataHeader">Open Interest</div>
                <bold className="dataComponentData">{option.openInterest}</bold>
              </div>
              <div className="dataGreekContainer">
                <div className="dataGreekHeader">Gamma</div>
                <bold className="dataGreekComponentData">{option.gamma}</bold>
              </div>
              <></>
              <div className="dataContainer">
                <div className="dataHeader">Volume</div>
                <bold className="dataComponentData">{option.totalVolume}</bold>
              </div>
              <div className="dataGreekContainer">
                <div className="dataGreekHeader">Vega</div>
                <bold className="dataGreekComponentData">{option.vega}</bold>
              </div>
              <></>
              <div className="dataContainer">
                <div className="dataHeader">Volatility</div>
                <bold className="dataComponentData">{option.volatility}</bold>
              </div>
              <div className="dataContainer">
                <div className="dataHeader">Days/Expiration</div>
                <bold className="dataComponentData">{option.daysToExpiration}</bold>
              </div>
              <div className="dataContainer">
                <div className="dataHeader">Expr Date</div>
                <bold className="dataComponentData">
                  <Moment
                    add={{ days: option.daysToExpiration }}
                    format="MMM DD"
                  >
                    {date}
                  </Moment>
                </bold>
              </div>
              {/* <>
                <Moment add={{ days: option.daysToExpiration }} format="MMM DD">
                  {date}
                </Moment>
              </> */}
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
