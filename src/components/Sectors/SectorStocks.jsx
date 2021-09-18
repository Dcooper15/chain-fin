import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";
import { SectorHeader, StyledSymbolLink } from "../Styles/styledElements";
import { useStyles } from "../Styles/muiStyles";
import axios from "axios";
import Moment from "react-moment";
import { useParams } from "react-router";
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

const date = new Date();
let symbolArray = [];

function SectorStocks() {
  const classes = useStyles();
  const theme = useContext(ThemeContext);
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

  console.log("datais, ", dataArray);
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
          chainData.push(response.data);

          setDataArray([chainData]);
        })
    );
  }, [sector]);

  return (
    <>
      {!!sectorError.length ? (
        <SectorHeader>{capHeader(sectorError)}</SectorHeader>
      ) : (
        <SectorHeader>
          {sector === "energy"
            ? "Alternative " + capHeader(sector)
            : capHeader(sector)}
        </SectorHeader>
      )}
      <Button
        className={
          theme.name === "dark"
            ? handleTypeChange === false
              ? classes.buttonDark
              : classes.buttonDarkUns
            : handleTypeChange === false
            ? classes.buttonLight
            : classes.buttonLightUns
        }
        type="submit"
        size="small"
        onClick={buttonHandlerCall}
        style={{ marginLeft: "3%" }}
      >
        <strong style={{ color: theme.name === "dark" ? "#fff" : "#F8E4A5" }}>
          Call
        </strong>
      </Button>
      <Button
        className={
          theme.name === "dark"
            ? handleTypeChange === true
              ? classes.buttonDark
              : classes.buttonDarkUns
            : handleTypeChange === true
            ? classes.buttonLight
            : classes.buttonLightUns
        }
        type="submit"
        size="small"
        onClick={buttonHandlerPut}
      >
        <strong style={{ color: theme.name === "dark" ? "#fff" : "#F8E4A5" }}>
          Put
        </strong>
      </Button>
      {!!dataArray.length
        ? dataArray.map((stock) =>
            stock.map((option) => (
              <Card
                className={classes.card}
                style={
                  theme.name === "dark"
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
                hidden={handleTypeChange === true}
                raised={true}
              >
                <>
                  {" "}
                  <StyledSymbolLink to={`/chain/${option.symbol}`}>
                    <Symbol option={option} />
                  </StyledSymbolLink>
                </>{" "}
                <StockPrice option={option} />
                <></>
                <br></br>
                <Name option={option} namesRender={namesRender} /> <></>
                <></>{" "}
                <Button
                  className={
                    theme.name === "dark"
                      ? classes.chainDark
                      : classes.chainLight
                  }
                  type="submit"
                  variant="outlined"
                  size="small"
                >
                  {
                    <StyledSymbolLink to={`/chain/${option.symbol}`}>
                      Chain
                    </StyledSymbolLink>
                  }
                </Button>
                <hr></hr>
                <StrikeOneOtm option={option} />
                <></>
                <PercentChange option={option} />
                <br></br>
                <HundredShares option={option} />
                <i>Greeks</i>
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
                className={classes.card}
                style={
                  theme.name === "dark"
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
                hidden={handleTypeChange === false}
                raised={true}
              >
                <>
                  {" "}
                  <StyledSymbolLink to={`/chain/${option.symbol}`}>
                    <Symbol option={option} />
                  </StyledSymbolLink>
                </>{" "}
                <StockPrice option={option} />
                <br></br>
                <Name option={option} namesRender={namesRender} /> <></>
                <Button
                  className={
                    theme.name === "dark"
                      ? classes.chainDark
                      : classes.chainLight
                  }
                  type="submit"
                  variant="outlined"
                  size="small"
                >
                  {
                    <StyledSymbolLink to={`/chain/${option.symbol}`}>
                      Chain
                    </StyledSymbolLink>
                  }
                </Button>
                <hr></hr>
                <StrikeOneOtmPut option={option} />
                <></>
                <PercentChangePut option={option} />
                <br></br>
                <HundredShares option={option} />
                <i>Greeks</i>
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
