import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Card } from "@material-ui/core";
import NameOptionChain from "../DataPoints/NameOptionChain";
import Moment from "react-moment";

const date = new Date();
//console.log("reg date form", date);
function FullOptionChain() {
  const { symbol } = useParams();
  const [expDates, setExpDates] = useState([]);
  const [stockPriceRender, setStockPrice] = useState([]);
  const [nameRender, setName] = useState([]);
  const [fullChain, setFullChainData] = useState([]);

  const dataArray = fullChain;
  //console.log("exprs", expDates);
  //console.log("fullChain", fullChain);
  useEffect(() => {
    axios
      .get(
        `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&contractType=CALL&strikeCount=3&fromDate=2021-09-03&toDate=2021-10-30`
      )
      .then((response) => {
        //console.log("full res, ", response.data.callExpDateMap);
        //console.log("o keys", Object.keys(response.data.callExpDateMap));
        const expirationDates = Object.keys(response.data.callExpDateMap).map(
          (red) => red.slice(5, 10) + " ,"
        );
        //console.log("exp dates bef", expirationDates);
       
        setExpDates([expirationDates]);

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
  try {
    return (
      <>
        {!!nameRender.length ? (
          <h2 className="sectorHeader" style={{ marginBottom: "0%" }}>
            <NameOptionChain namesRender={nameRender} />
          </h2>
        ) : (
          " "
        )}
        {stockPriceRender.length ? (
          <div className="sectorHeader">
            {" "}
            ${stockPriceRender}
            <br></br>
            <i style={{ fontSize: "90%", color: "#d4af37" }}>
              100 Shares ${(stockPriceRender * 100).toFixed(0)}
            </i>
          </div>
        ) : (
          " "
        )}
        <br></br>
        {/* {!!expDates.length ? expDates.map((exDate) => exDate) : "loading exprs"} */}
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
                  paddingLeft: "2%",
                  marginLeft: "3%",
                  marginRight: "3%",
                }}
              >
                <bold>
                  <strong>
                    {option.description.includes("(")
                      ? option.description.slice(
                          0,
                          option.description.indexOf("(")
                        )
                      : option.description}
                  </strong>
                </bold>
                <></>
                {option.markPercentChange >= 0 ? (
                  <i
                    style={{ color: "#a4de02" }}
                    key={12}
                    className="dataComponentData"
                  >
                    {" "}
                    +{option.markPercentChange}%
                  </i>
                ) : (
                  <i
                    style={{ color: "#ff4c4c" }}
                    key={12}
                    className="dataComponentData"
                  >
                    {" "}
                    {option.markPercentChange}%
                  </i>
                )}
                <hr></hr>
                <div className="dataContainer">
                  <div className="dataHeader">Strike</div>
                  <bold className="dataComponentData">
                    {option.strikePrice}
                  </bold>
                </div>
                <i style={{ color: "#d4af37" }}>Greeks</i>

                <div className="dataContainer">
                  <div className="dataHeader">Bid</div>
                  <bold className="dataComponentData">{option.bid}</bold>
                </div>
                <div className="dataGreekContainer">
                  <div className="dataGreekHeader">Delta</div>
                  <bold className="dataGreekComponentData">
                    {option.delta > 0 ? option.delta.toFixed(4) : "N/A"}
                  </bold>
                </div>
                <></>
                <div className="dataContainer">
                  <div className="dataHeader">Ask</div>
                  <bold className="dataComponentData">{option.ask}</bold>
                </div>
                <div className="dataGreekContainer">
                  <div className="dataGreekHeader">Theta</div>
                  <bold className="dataGreekComponentData">
                    {option.theta > 0 ? option.theta.toFixed(4) : "N/A"}
                  </bold>
                </div>
                <></>

                <div className="dataContainer">
                  <div className="dataHeader">Premium</div>
                  <bold className="dataComponentData">
                    ${(option.mark * 100).toFixed(2)}
                  </bold>
                </div>
                <div className="dataGreekContainer">
                  <div className="dataGreekHeader">Rho</div>
                  <bold className="dataGreekComponentData">
                    {option.rho > 0 ? option.rho.toFixed(4) : "N/A"}
                  </bold>
                </div>
                <></>
                <div className="dataContainer">
                  <div className="dataHeader">Open Interest</div>
                  <bold className="dataComponentData">
                    {option.openInterest}
                  </bold>
                </div>
                <div className="dataGreekContainer">
                  <div className="dataGreekHeader">Gamma</div>
                  <bold className="dataGreekComponentData">
                    {option.gamma > 0 ? option.gamma.toFixed(4) : "N/A"}
                  </bold>
                </div>
                <></>
                <div className="dataContainer">
                  <div className="dataHeader">Volume</div>
                  <bold className="dataComponentData">
                    {option.totalVolume}
                  </bold>
                </div>
                <div className="dataGreekContainer">
                  <div className="dataGreekHeader">Vega</div>
                  <bold className="dataGreekComponentData">
                    {option.vega > 0 ? option.vega.toFixed(4) : "N/A"}{" "}
                  </bold>
                </div>
                <></>
                <div className="dataContainer">
                  <div className="dataHeader">Implied Volatility</div>
                  <bold className="dataComponentData">
                    {option.volatility > 0
                      ? option.volatility.toFixed(2)
                      : "N/A"}
                  </bold>
                </div>
                <div className="dataContainer">
                  <div className="dataHeader">Days/Expiration</div>
                  <bold className="dataComponentData">
                    {option.daysToExpiration}
                  </bold>
                </div>
                <>
                  <>Exp Date </>
                  <bold>
                    <Moment
                      add={{ days: option.daysToExpiration }}
                      format="MMM DD"
                    >
                      {date}
                    </Moment>
                  </bold>
                </>
              </Card>
            ))
          )
        ) : (
          " "
        )}
        ;
      </>
    );
  } catch (error) {
    return (
      <i className="sectorHeader" style={{ fontSize: "14px" }}>
        Unable to view {symbol} option chain{" "}
      </i>
    );
  }
}

export default FullOptionChain;
