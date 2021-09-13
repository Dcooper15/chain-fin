import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import { Card } from "@material-ui/core";
import Navbar from "../Navbar/Navbar";
import Name from "../DataPoints/Name";
import Symbol from "../DataPoints/Symbol";
import StockPrice from "../DataPoints/StockPrice";
import StrikeOneOtm from "../DataPoints/StrikeOneOtm";
import PercentChange from "../DataPoints/PercentChange";
import HundredShares from "../DataPoints/HundredShares";
import BidPrice from "../DataPoints/BidPrice";
import AskPrice from "../DataPoints/AskPrice";
import PremiumCollected from "../DataPoints/PremiumCollected";
import OpenInterest from "../DataPoints/OpenInterest";
import Volume from "../DataPoints/Volume";
import Volatility from "../DataPoints/Volatility";
import Delta from "../DataPoints/Delta";
import Theta from "../DataPoints/Theta";
import Rho from "../DataPoints/Rho";
import Gamma from "../DataPoints/Gamma";
import Vega from "../DataPoints/Vega";
import DaysToExpiration from "../DataPoints/DaysToExpiration";


const moverUrl = `https://api.tdameritrade.com/v1/marketdata/$COMPX/movers?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&direction=up&change=percent`;

const date = new Date();

function COMPX() {
  const [namesRender, setNames] = useState([]);
  const [percentChange, setPercentChange] = useState([]);
  const [compxData, setCompxData] = useState([]);

  useEffect(() => {
    const names = [];
    const compxDataArray = [];
    axios.get(moverUrl).then((response) => {
      const changePercentArray = response.data
        .map((percent) => [percent.symbol, percent.change])
        .flat();

      setPercentChange(changePercentArray);

      const compxMoversArray = response.data.map(
        (compxSymbol) => compxSymbol.symbol
      );
      compxMoversArray.map((symbol) =>
        axios
          .get(
            `https://api.tdameritrade.com/v1/instruments?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&projection=symbol-search`
          )
          .then((response) => {
            if (response.status === 200) {
              names.push(response.data);
            }
            const namesArray = names
              .map((symbolId) => Object.values(symbolId))
              .map((entryId) => Object.entries(entryId[0]))
              .flat();
            setNames([namesArray.flat()]);
          })
      );
      compxMoversArray.map((symbol) =>
        axios
          .get(
            `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=${process.env.REACT_APP_MONTH}&toDate=2022-09-04&range=OTM`
          )
          .then((response) => {
            console.log("compxres", response);
            if (response.data.status === "SUCCESS") {
              compxDataArray.push(response.data);
            }
            setCompxData([compxDataArray]);
          })
      );
    });
  }, []);

  return (
    <>
      <Navbar />
      <h5 className="sectorHeader">
        <Link
          to="/topmovers"
          style={{ color: "#d4af37", textDecoration: "none" }}
        >
          {"< Top Movers"}
        </Link>
      </h5>
      <h2 style={{ color: "#d4af37" }}>Today's Top Movers - NASDAQ</h2>

      {!!compxData.length ? (
        compxData.map((stock) =>
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
                marginRight: "3%"
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
              </> {" "}<StockPrice option={option} />
              <i style={{color: "#a4de02"}}>{"   "}+
                {(percentChange[
                  percentChange.indexOf(option.symbol) + 1
                ] * 100).toFixed(2)}
                %
                </i>
              <br></br>
              <Name option={option} namesRender={namesRender} /> <></>
              <hr></hr>
              <StrikeOneOtm option={option} /><></><PercentChange option={option}/>
              <br></br>
             
              <HundredShares option={option} />
              <></>
              <i style={{ color: "#d4af37" }}>Greeks</i>
              <BidPrice option={option} />
              <Delta option={option} />
              <AskPrice option={option} />
              <></>
              <Theta option={option} />
              <PremiumCollected option={option} />
              <></>
              <Rho option={option} />
              <OpenInterest option={option} />
              <></>
              <Gamma option={option} />
              <Volume option={option}/>
              <></>
              <Vega option={option} />
              <Volatility option={option} />
              <DaysToExpiration option={option} />
              <>Exp Date </>
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

export default COMPX;
