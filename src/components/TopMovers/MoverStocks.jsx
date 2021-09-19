import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";
import { SectorHeader, StyledSymbolLink, StyledNavLink, ButtonDiv } from "../Styles/styledElements";
import { useStyles } from "../Styles/muiStyles";
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
import DeltaPut from "../DataPoints/Puts/DeltaPut";
import ThetaPut from "../DataPoints/Puts/ThetaPut";
import RhoPut from "../DataPoints/Puts/RhoPut";
import GammaPut from "../DataPoints/Puts/GammaPut";
import VegaPut from "../DataPoints/Puts/VegaPut";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';


let header = [];
const date = new Date();

function MoverStocks() {
  const classes = useStyles();
  const theme = useContext(ThemeContext);
  const [percentChange, setPercentChange] = useState([]);
  const [marketData, setMarketData] = useState([]);
  const [handleTypeChange, setHandleTypeChange] = useState(false);
  const [direction, setDirection] = useState("up");
  const { market } = useParams();
  console.log("theme is", theme);
  const buttonHandlerPut = () => {
    setHandleTypeChange(true);
  };
  const buttonHandlerCall = () => {
    setHandleTypeChange(false);
  };
  const buttonHandlerUp = () => {
    setDirection("up");
  };
  const buttonHandlerDown = () => {
    setDirection("down");
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
    //const names = [];
    const marketDataArray = [];
    axios
      .get(
        `https://api.tdameritrade.com/v1/marketdata/$${market.toUpperCase()}/movers?apikey=${
          process.env.REACT_APP_GITHUB_CLIENT_ID
        }&direction=${direction}&change=percent`
      )
      .then((response) => {
        const changePercentArray = response.data
          .map((percent) => [percent.symbol, percent.change])
          .flat();

        setPercentChange(changePercentArray);

        const marketMoversArray = response.data.map(
          (marketSymbol) => marketSymbol.symbol
        );
        // marketMoversArray.map((symbol) =>
        //   axios
        //     .get(
        //       `https://api.tdameritrade.com/v1/instruments?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&projection=symbol-search`
        //     )
        //     .then((response) => {
        //       if (response.status === 200) {
        //         names.push(response.data);
        //       }
        //       const namesArray = names
        //         .map((symbolId) => Object.values(symbolId))
        //         .map((entryId) => Object.entries(entryId[0]))
        //         .flat();
        //       setNames([namesArray.flat()]);
        //     })
        // );
        marketMoversArray.map((symbol) =>
          axios
            .get(
              `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&contractType=ALL&strikeCount=2&includeQuotes=TRUE&toDate=${process.env.REACT_APP_DATE}&range=OTM`
            )
            .then((response) => {
              if (response.data.status === "SUCCESS") {
                marketDataArray.push(response.data);
              }
              setMarketData([marketDataArray]);
            })
        );
      });
  }, [market, direction]);

  return (
    <>
    
      <SectorHeader style={{marginLeft: '0.5%'}}>
        Today's Top Movers - {header.length ? header : " "}
        <ButtonDiv >
        <Button
        className={
          theme.name === "dark"
            ? direction === "up"
              ? classes.buttonDark
              : classes.buttonDarkUns
            : direction === "up"
            ? classes.buttonLight
            : classes.buttonLightUns
        }
      
        type="submit"
        onClick={buttonHandlerUp}
        style={{ marginLeft: '1px', paddingTop: '3px', padding: '1px', minWidth: '30px'  
      }}
      >
      <strong>
          <FaArrowUp style={{color: '#26d134' }}/>
      </strong>
      </Button>
      <Button
        className={
          theme.name === "dark"
            ? direction === "down"
              ? classes.buttonDark
              : classes.buttonDarkUns
            : direction === "down"
            ? classes.buttonLight
            : classes.buttonLightUns
        }
        type="submit"
        
        onClick={buttonHandlerDown}
        style={{ marginLeft: '3px', paddingTop: '3px', padding: '1px', minWidth: '30px'
      }}
      >
       <strong>
        <FaArrowDown style={{color: '#f53333'}}/>
      </strong>
      </Button>
      </ButtonDiv>
      </SectorHeader>
      
    

      
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
      {!!marketData.length ? (
        marketData.map((stock) =>
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
              <></>{" "}
              {direction === "up" ? (
                <i style={{ color: "#a4de02" }}>
                  {"   "}+
                  {(
                    percentChange[percentChange.indexOf(option.symbol) + 1] *
                    100
                  ).toFixed(2)}
                  %
                </i>
              ) : (
                <i style={{ color: "#ff4c4c" }}>
                  {"   "}
                  {(
                    percentChange[percentChange.indexOf(option.symbol) + 1] *
                    100
                  ).toFixed(2)}
                  %
                </i>
              )}
              <br></br>
              <Name namesRender={option.underlying.description} /> <></>
              <hr></hr>
              <StrikeOneOtm option={option} />
              <></>
              <PercentChange option={option} type={'call'} />
              <br></br>
              <HundredShares option={option} />
              <></>
              <i>Greeks</i>
              <BidPrice option={option} type={'call'}/>
              <Delta option={option} />
              <AskPrice option={option} type={'call'}/>
              <></>
              <Theta option={option} />
              <PremiumCollected option={option} type={'call'}/>
              <></>
              <Rho option={option} />
              <OpenInterest option={option} type={'call'}/>
              <></>
              <Gamma option={option} />
              <Volume option={option} type={'call'}/>
              <></>
              <Vega option={option} />
              <Volatility option={option} type={'call'}/>
              <DaysToExpiration option={option} type={'call'}/>
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
        <SectorHeader>
          Top Movers unavailable on weekends and late hours
          <br></br>
          <br></br>
          <StyledNavLink
            to="/"
           
          >
            Home
          </StyledNavLink>
        </SectorHeader>
      )}
      {!!marketData.length
        ? marketData.map((stock) =>
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
                  <Link
                    to={`/chain/${option.symbol}`}
                    style={{ textDecoration: "none", color: "#d4af37" }}
                  >
                    <Symbol option={option} />
                  </Link>
                </>{" "}
                <StockPrice option={option} />
                <></>{" "}
                {direction === "up" ? (
                  <i
                    style={{
                      color: theme.name === "dark" ? "#a4de02" : "#6b871b",
                    }}
                  >
                    {"   "}+
                    {(
                      percentChange[percentChange.indexOf(option.symbol) + 1] *
                      100
                    ).toFixed(2)}
                    %
                  </i>
                ) : (
                  <i style={{ color: "#ff4c4c" }}>
                    {"   "}
                    {(
                      percentChange[percentChange.indexOf(option.symbol) + 1] *
                      100
                    ).toFixed(2)}
                    %
                  </i>
                )}
                <br></br>
                <Name namesRender={option.underlying.description} /> <></>
                <hr></hr>
                <StrikeOneOtmPut option={option} />
                <></>
                <PercentChange option={option} type={'put'} />
                <br></br>
                <HundredShares option={option} />
                <i>Greeks</i>
                <BidPrice option={option} type={'put'}/>
                <></>
                <DeltaPut option={option} />
                <AskPrice option={option} type={'put'}/>
                <></>
                <ThetaPut option={option} />
                <PremiumCollected option={option} type={'put'}/>
                <></>
                <RhoPut option={option} />
                <OpenInterest option={option} type={'put'}/>
                <></>
                <GammaPut option={option} />
                <Volume option={option} type={'put'}/>
                <></>
                <VegaPut option={option} />
                <Volatility option={option} type={'put'}/>
                <DaysToExpiration option={option} type={'put'}/>
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
