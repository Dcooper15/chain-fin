import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import { Card } from "@material-ui/core";
import Symbol from "../DataPoints/Symbol";
import StockPrice from "../DataPoints/StockPrice";
import HundredShares from "../DataPoints/HundredShares";
import BidPrice from "../DataPoints/BidPrice";
import PremiumCollected from "../DataPoints/PremiumCollected";
import OpenInterest from "../DataPoints/OpenInterest";
import Volatility from "../DataPoints/Volatility";
import DaysToExpiration from "../DataPoints/DaysToExpiration";

const moverUrl = `https://api.tdameritrade.com/v1/marketdata/$DJI/movers?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&direction=up&change=percent`;

const date = new Date();

function DJI() {
  const [namesRender, setNames] = useState([]);
  const [percentChange, setPercentChange] = useState([]);
  const [djiData, setDjiData] = useState([]);

  useEffect(() => {
    const names = [];
    const djiDataArray = [];
    axios.get(moverUrl).then((response) => {
      const changePercentArray = response.data
        .map((percent) => [percent.symbol, percent.change])
        .flat();

      setPercentChange(changePercentArray);
      const djiMoversArray = response.data.map((djiSymbol) => djiSymbol.symbol);

      djiMoversArray.map((symbol) =>
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
      djiMoversArray.map((symbol) =>
        axios
          .get(
            `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=${process.env.REACT_APP_MONTH}&toDate=2022-09-04&range=OTM`
          )
          .then((response) => {
            if (response.data.status === "SUCCESS") {
              djiDataArray.push(response.data);
            }
            setDjiData([djiDataArray]);
          })
      );
    });
  }, []);

  return (
    <>
      <h5 className="sectorHeader">
        <Link to="/topmovers" style={{ color: "#fff" }}>
          Return to Top Movers
        </Link>
      </h5>
      <h2>Today's Top Movers - DJI</h2>
      {!!djiData.length ? (
        djiData.map((stock) =>
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
              <strong>
                {namesRender[0][namesRender[0].indexOf(option.symbol) + 2]}
              </strong>
              <>
                {"   "}Up{" "}
                {percentChange[
                  percentChange.indexOf(option.symbol) + 1
                ].toFixed(4) * 100}
                %
              </>
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
              <br></br>
              <>Expiration Date: </>
              <>
                <Moment
                  add={{
                    days: Object.keys(option.callExpDateMap).map((entry) => {
                      return Object.keys(option.callExpDateMap[entry]).map(
                        (innerArrayID) =>
                          option.callExpDateMap[entry][innerArrayID][0]
                            .daysToExpiration
                      );
                    })[0],
                  }}
                  format="MMM DD"
                >
                  {date}
                </Moment>
              </>
            </Card>
          ))
        )
      ) : (
        <p>Top Movers unavailable on weekends...</p>
      )}
    </>
  );
}

export default DJI;
