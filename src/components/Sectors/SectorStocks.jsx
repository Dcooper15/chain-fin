import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";
import { useParams } from "react-router";
import { Card, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
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

const date = new Date();
let symbolArray = [];

function SectorStocks() {
  const [namesRender, setNames] = useState([]);
  const [dataArray, setDataArray] = useState([]);
  const [handleTypeChange, setHandleTypeChange] = useState(false);
  const { sector } = useParams();

  const buttonHandlerPut = () => {
    setHandleTypeChange(true);
  };
  const buttonHandlerCall = () => {
    setHandleTypeChange(false);
  };

  let sectorError = [];
  switch (sector) {
    case "tech":
      symbolArray = [
        "AMD",
        "SONY",
        "ZM",
        "AAPL",
        "MSFT",
        "AMZN",
        "ORCL",
        "GOOGL",
        "NFLX",
        "NVDA",
        "PLTR",
        "SNOW",
      ];
      break;
    case "entertainment":
      symbolArray = ["AMC", "ATVI", "DIS", "MGM", "WYNN"];
      break;
    case "airline":
      symbolArray = ["ALGT", "DAL", "LUV", "ALK", "UAL", "AAL", "SAVE", "BA"];
      break;
    case "finance":
      symbolArray = ["AXP", "BAC", "C", "JPM", "WFC"];
      break;
    case "oil":
      symbolArray = ["PXD", "COP", "MPC", "OXY", "CVX", "XOM", "BP"];
      break;
    case "cannabis":
      symbolArray = ["CRON", "ACB", "TLRY", "HEXO", "SNDL", "IGC", "OGI"];
      break;
    case "pharmaceutics":
      symbolArray = ["JNJ", "PFE", "MRNA", "AZN", "AMGN", "BNTX", "SGEN"];
      break;
    case "energy":
      symbolArray = ["NEE", "FSLR", "SEDG", "PLUG", "BLNK", "ENPH", "SPWR"];
      break;
    case "automotive":
      symbolArray = ["HYLN", "GM", "NIO", "CVNA", "F", "TSLA", "RIDE", "WKHS"];
      break;
    case "grocery":
      symbolArray = ["WMT", "ACI", "COST", "KR", "GO", "BJ", "TGT"];
      break;
    case "crypto":
      symbolArray = ["MARA", "RIOT", "BTCM", "BITF", "BITQ", "HUT", "COIN"];
      break;
    case "social":
      symbolArray = ["PINS", "TWTR", "FB", "SNAP"];
      break;
    default:
      sectorError = `No data to display for ${sector}.`;
  }

  const capHeader = (header) => {
    return header.charAt(0).toUpperCase() + header.slice(1);
  };

  useEffect(() => {
    const names = [];
    const chainData = [];
    try {
      symbolArray.map((symbol) =>
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
    } catch (error) {
      console.log(error);
    }
    symbolArray.map((symbol) =>
      axios
        .get(
          `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&contractType=ALL&strikeCount=2&expMonth=${process.env.REACT_APP_MONTH}&toDate=${process.env.REACT_APP_DATE}&range=OTM`
        )
        .then((response) => {
          //console.log(response.data);
          chainData.push(response.data);

          setDataArray([chainData]);
        })
    );
  }, [sector]);

  return (
    <>
      {!!sectorError.length ? (
        <h2 className="sectorHeader">{capHeader(sectorError)}</h2>
      ) : (
        <h2 className="sectorHeader">
          {sector === "energy"
            ? "Alternative " + capHeader(sector)
            : capHeader(sector)}
        </h2>
      )}
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
      {!!dataArray.length
        ? dataArray.map((stock) =>
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
                <br></br>
                <Name option={option} namesRender={namesRender} /> <></>
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
                <hr></hr>
                <StrikeOneOtm option={option} />
                <></>
                <PercentChange option={option} />
                <br></br>
                <HundredShares option={option} />
                <i style={{ color: "#d4af37" }}>Greeks</i>
                <BidPrice option={option} />
                <></>
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
      {!!dataArray.length
        ? dataArray.map((stock) =>
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

export default SectorStocks;
