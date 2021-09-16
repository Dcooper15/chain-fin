import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";
import Moment from "react-moment";
import { Card, Button } from "@material-ui/core";
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
import StrikeOneOtmPut from "../DataPoints/Puts/StrikeOneOtmPut";
import PercentChangePut from "../DataPoints/Puts/PercentChangePut";
import BidPricePut from "../DataPoints/Puts/BidPricePut";
import AskPricePut from "../DataPoints/Puts/AskPricePut";
import PremiumCollectedPut from "../DataPoints/Puts/PremiumCollectedPut";
import OpenInterestPut from "../DataPoints/Puts/OpenInterestPut";
import VolumePut from "../DataPoints/Puts/VolumePut";
import VolatilityPut from "../DataPoints/Puts/VolatilityPut";
import DeltaPut from "../DataPoints/Puts/DeltaPut";
import ThetaPut from "../DataPoints/Puts/ThetaPut";
import RhoPut from "../DataPoints/Puts/RhoPut";
import GammaPut from "../DataPoints/Puts/GammaPut";
import VegaPut from "../DataPoints/Puts/VegaPut";
import DaysToExpirationPut from "../DataPoints/Puts/DaysToExpirationPut";

let header = [];
const date = new Date();

function MoverStocks() {
  const [namesRender, setNames] = useState([]);
  const [percentChange, setPercentChange] = useState([]);
  const [marketData, setMarketData] = useState([]);
  const [handleTypeChange, setHandleTypeChange] = useState(false);
  const { market } = useParams();

  const buttonHandlerPut = () => {
    setHandleTypeChange(true);
  };
  const buttonHandlerCall = () => {
    setHandleTypeChange(false);
  };

  switch (market) {
    case "compx":
      header = "NASDAQ";
      break;
    case "dji":
      header = "DJI";
      break;
    case "spx.x":
      header = "SPX";
      break;
    default:
      header = `No data to display for ${market}.`;
  }

  useEffect(() => {
    const names = [];
    const marketDataArray = [];
    axios
      .get(
        `https://api.tdameritrade.com/v1/marketdata/$${market.toUpperCase()}/movers?apikey=${
          process.env.REACT_APP_GITHUB_CLIENT_ID
        }&direction=up&change=percent`
      )
      .then((response) => {
        const changePercentArray = response.data
          .map((percent) => [percent.symbol, percent.change])
          .flat();

        setPercentChange(changePercentArray);

        const marketMoversArray = response.data.map(
          (marketSymbol) => marketSymbol.symbol
        );
        marketMoversArray.map((symbol) =>
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
        marketMoversArray.map((symbol) =>
          axios
            .get(
              `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&contractType=ALL&strikeCount=2&expMonth=${process.env.REACT_APP_MONTH}&toDate=${process.env.REACT_APP_DATE}&range=OTM`
            )
            .then((response) => {
              if (response.data.status === "SUCCESS") {
                marketDataArray.push(response.data);
              }
              setMarketData([marketDataArray]);
            })
        );
      });
  }, [market]);

  return (
    <>
      <h2 className="sectorHeader">
        Today's Top Movers - {header.length ? header : " "}
      </h2>
      <Button
        className="searchButton"
        type="submit"
        variant={handleTypeChange === !true ? "contained" : "outlined"}
        color="secondary"
        size="small"
        onClick={buttonHandlerCall}
        style={{ marginLeft: "3%" }}
      >
        Call
      </Button>
      <Button
        className="searchButton"
        type="submit"
        variant={handleTypeChange === true ? "contained" : "outlined"}
        size="small"
        color="secondary"
        onClick={buttonHandlerPut}
      >
        Put
      </Button>
      {!!marketData.length ? (
        marketData.map((stock) =>
          stock.map((option) => (
            <Card
              className="stockInfo"
              variant="outlined"
              hidden={handleTypeChange === true}
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
              <></>
              <></>{" "}
              <Button
                  className="searchButton"
                  type="submit"
                  variant="outlined"
                  size="small"
                  style={{ height: "20px", width: "7%" }}
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
              <i style={{ color: "#a4de02" }}>
                {"   "}+
                {(
                  percentChange[percentChange.indexOf(option.symbol) + 1] * 100
                ).toFixed(2)}
                %
              </i>
              <br></br>
              <Name option={option} namesRender={namesRender} /> <></>
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
              <AskPrice option={option} />
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
                    })[0][1],
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
        <p className="sectorHeader">
          Top Movers unavailable on weekends and late hours
          <br></br>
          <br></br>
          <Link
            to="/"
            style={{
              color: "#d4af37",
              textDecoration: "underlined",
              fontSize: "90%",
            }}
          >
            {"Home"}
          </Link>
        </p>
      )}
      {!!marketData.length
        ? marketData.map((stock) =>
            stock.map((option) => (
              <Card
                className="stockInfo"
                variant="outlined"
                hidden={handleTypeChange === false}
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
                <br></br>
                <Name option={option} namesRender={namesRender} /> <></>
                <hr></hr>
                <StrikeOneOtmPut option={option} />
                <></>
                <PercentChangePut option={option} />
                <br></br>
                <HundredShares option={option} />
                <i style={{ color: "#d4af37" }}>Greeks</i>
                <BidPricePut option={option} />
                <></>
                <DeltaPut option={option} />
                <AskPricePut option={option} />
                <></>
                <ThetaPut option={option} />
                <PremiumCollectedPut option={option} />
                <></>
                <RhoPut option={option} />
                <OpenInterestPut option={option} />
                <></>
                <GammaPut option={option} />
                <VolumePut option={option} />
                <></>
                <VegaPut option={option} />
                <VolatilityPut option={option} />
                <DaysToExpirationPut option={option} />
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
          )
        : " "}
    </>
  );
}

export default MoverStocks;
