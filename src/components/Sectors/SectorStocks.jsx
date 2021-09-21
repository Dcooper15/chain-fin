import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";
import { SectorHeader } from "../Styles/styledElements";
import { useStyles } from "../Styles/muiStyles";
import axios from "axios";
import Moment from "react-moment";
import { useParams } from "react-router";
import { Card, Button } from "@material-ui/core";
import MapCardHeader from "../DataPoints/MapCardHeader";
import MapDataPoints from "../DataPoints/MapDataPoints";

const date = new Date();
let symbolArray = [];

function SectorStocks() {
  const classes = useStyles();
  const theme = useContext(ThemeContext);
  const [dataArray, setDataArray] = useState([]);
  const [handleTypeChange, setHandleTypeChange] = useState(false);
  const { sector } = useParams();
console.log(dataArray)
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

  const getButtonColor = theme.name === "dark" ? "#fff" : "#F8E4A5";

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
        <strong style={{ color: getButtonColor }}>Call</strong>
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
        <strong style={{ color: getButtonColor }}>Put</strong>
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
                <MapCardHeader option={option} />

                <MapDataPoints
                  option={option}
                  chainType={'summary'}
                  mapType={'call'}
                />
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
                <MapCardHeader option={option} />
                <></>

                <MapDataPoints
                  option={option}
                  chainType={'summary'}
                  mapType={'put'}
                />
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
