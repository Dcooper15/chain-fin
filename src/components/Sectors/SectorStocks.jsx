import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";
import { SectorHeader, StyledSymbolLink } from "../Styles/styledElements";
import { useStyles } from "../Styles/muiStyles";
import axios from "axios";
import Moment from "react-moment";
import { useParams } from "react-router";
import { Card, Button } from "@material-ui/core";
import MapDataPoints from '../DataPoints/MapDataPoints';
import Name from "../DataPoints/Name";
import Symbol from "../DataPoints/Symbol";
import StockPercentChange from '../DataPoints/StockPercentChange';
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
import DeltaPut from "../DataPoints/Puts/DeltaPut";
import ThetaPut from "../DataPoints/Puts/ThetaPut";
import RhoPut from "../DataPoints/Puts/RhoPut";
import GammaPut from "../DataPoints/Puts/GammaPut";
import VegaPut from "../DataPoints/Puts/VegaPut";


const date = new Date();
let symbolArray = [];

function SectorStocks() {
  const classes = useStyles();
  const theme = useContext(ThemeContext);
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
    const chainData = [];
    console.log(chainData);
    symbolArray.map((symbol) =>
      axios
        .get(
          `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&contractType=ALL&strikeCount=2&includeQuotes=TRUE&toDate=${process.env.REACT_APP_DATE}range=OTM`
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
                <StockPrice option={option} /><></>
                <StockPercentChange option={option} />
                <></>
                <br></br>
                <Name namesRender={option.underlying.description} /> <></>
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
                
                {/* <MapDataPoints  option={option} 
               dataComp={option.volatility} fixedDec={0} />
               
               {console.log(<MapDataPoints option={option} 
               dataComp={option.volatility} fixedDec={0} />)} */}
               
                <StrikeOneOtm option={option} />
                <></>
                <PercentChange option={option} type={'call'} />
                <br></br>
                <HundredShares option={option} type={'call'}/>
                <i>Greeks</i>
                <BidPrice option={option} type={'call'} />
                <></>
                <Delta option={option} />
                <AskPrice option={option} type={'call'}/>
                <></>
                <Theta option={option} />
                <PremiumCollected option={option} type={'call'} />
                <></>
                <Rho option={option} />
                <OpenInterest option={option} type={'call'} />
                <></>
                <Gamma option={option} />
                <Volume option={option} type={'call'} />
                <></>
                <Vega option={option} />
                <Volatility option={option} type={'call'}/>
                <DaysToExpiration option={option} type={'call'}/>
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
                <StockPrice option={option} /><></><StockPercentChange option={option} />
                <br></br>
                <Name namesRender={option.underlying.description} /> <></>
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
                <PercentChange option={option} type={'put'} />
                <br></br>
                <HundredShares option={option} />
                <i>Greeks</i>
                <BidPrice option={option} type={'put'} />
                <></>
                <DeltaPut option={option} />
                <AskPrice option={option} type={'put'} />
                <></>
                <ThetaPut option={option} />
                <PremiumCollected option={option} type={'put'} />
                <></>
                <RhoPut option={option} />
                <OpenInterest option={option} type={'put'} />
                <></>
                <GammaPut option={option} />
                <Volume option={option} type={'put'}/>
                <></>
                <VegaPut option={option} />
                <Volatility option={option} type={'put'} />
                <DaysToExpiration option={option} type={'put'} />
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
