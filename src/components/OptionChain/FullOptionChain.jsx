import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";
import { SectorHeader } from "../Styles/styledElements";
import { useStyles } from "../Styles/muiStyles";
import axios from "axios";
import { useParams } from "react-router";
import {
  Card,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";

import NameOptionChain from "../DataPoints/NameOptionChain";
import Moment from "react-moment";

const date = new Date();
const yearEnd = new Date("12/31/2021");

const offsetDays = (yearEnd.getTime() - date.getTime()) / (1000 * 3600 * 24);

// const marks = [
//   {
//     value: 2,
//     label: "2",
//   },
//   {
//     value: 6,
//     label: "6",
//   },
//   {
//     value: 8,
//     label: "8",
//   },
//   {
//     value: 12,
//     label: "12",
//   },
//   {
//     value: 16,
//     label: "16",
//   },
//   {
//     value: "All",
//     label: "All",
//   },
// ];

function FullOptionChain() {
  const classes = useStyles();
  const theme = useContext(ThemeContext);
  const { symbol } = useParams();
  const [expDays, setExpDays] = useState([]);
  const [expDate, setExpDate] = useState([]);
  const [handleTypeChange, setHandleTypeChange] = useState(false);
  const [stockPriceRender, setStockPrice] = useState([]);
  const [nameRender, setName] = useState([]);
  const [strikeCount, setStrikeCount] = useState([6]);
  const [callData, setCallData] = useState([]);
  const [putData, setPutData] = useState([]);
  const [open, setOpen] = useState(false);

  const buttonHandlerPut = () => {
    setHandleTypeChange(true);
  };
  const buttonHandlerCall = () => {
    setHandleTypeChange(false);
  };
  const handleStrikeChange = (event) => {
    setStrikeCount(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  console.log(callData);
  useEffect(() => {
    axios
      .get(
        `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&strikeCount=${strikeCount}&fromDate=2021-09-03&toDate=2023-01-30`
      )
      .then((response) => {
        const getDaysToExp = Object.keys(response.data.callExpDateMap)
          .map((entry) => {
            return Object.keys(response.data.callExpDateMap[entry]).map(
              (innerArrayID) =>
                response.data.callExpDateMap[entry][innerArrayID]
            );
          })
          .flat()
          .flat();
        const returnDays = getDaysToExp.map((days) => days.daysToExpiration);
        const uniqueDays = [...new Set(returnDays)];
        setExpDays(uniqueDays);
        setExpDate(uniqueDays[0]);
        const stockPrice = response.data.underlyingPrice.toFixed(2);
        setStockPrice([stockPrice]);
        const resSymbol = response.data.symbol;
        const callKeys = Object.keys(response.data.callExpDateMap)
          .map((entry) => {
            return Object.keys(response.data.callExpDateMap[entry]).map(
              (innerArrayID) =>
                response.data.callExpDateMap[entry][innerArrayID]
            );
          })
          .flat();
        const putKeys = Object.keys(response.data.putExpDateMap)
          .map((entry) => {
            return Object.keys(response.data.putExpDateMap[entry]).map(
              (innerArrayID) => response.data.putExpDateMap[entry][innerArrayID]
            );
          })
          .flat();

        setCallData(callKeys);
        setPutData(putKeys);

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
  }, [symbol, strikeCount]);
  try {
    return (
      <>
        {!!nameRender.length ? (
          <SectorHeader>
            <NameOptionChain namesRender={nameRender} />
          </SectorHeader>
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
        <div className="dateContainer">
          {!!expDays.length
            ? expDays.map((expDay) => (
                <div className="buttonConainer">
                  <Button
                    value={expDay}
                    size="small"
                    variant={expDate === expDay ? "contained" : "outlined"}
                    color="#d4af37"
                    style={{ height: "70%", width: "100%" }}
                    onClick={() => setExpDate(expDay)}
                  >
                    <i style={{ color: "seagreen" }}>
                      <Moment
                        style={{
                          fontSize: expDay > offsetDays ? "60%" : "80%",
                        }}
                        add={{ days: expDay }}
                        format={expDay > offsetDays ? "ll" : "MMM DD"}
                      >
                        {date}
                      </Moment>
                    </i>
                  </Button>
                </div>
              ))
            : " "}
        </div>

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
        <br></br>

        <FormControl className={classes.formControl}>
          <InputLabel id="strikeLabel" className={classes.select}>
            <strong style={{ color: "#d4af37" }}>Strikes</strong>
          </InputLabel>
          <Select
            labelId="strikeLabel"
            id="strikes"
            className={classes.select}
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={strikeCount}
            onChange={handleStrikeChange}
          >
            <MenuItem
              classes={{ root: classes.menuItem, selected: "selected" }}
              value={6}
            >
              <bold style={{ color: "#d4af37" }}>6</bold>
            </MenuItem>
            <MenuItem className={classes.menuItem} value={10}>
              <bold style={{ color: "#d4af37" }}>10</bold>
            </MenuItem>
            <MenuItem className={classes.menuItem} value={14}>
              <bold style={{ color: "#d4af37" }}>14</bold>
            </MenuItem>
            <MenuItem className={classes.menuItem} value={60}>
              <bold style={{ color: "#d4af37" }}>All</bold>
            </MenuItem>
          </Select>
        </FormControl>

        {/* <Slider 
        style={{width: '90%'}}
        defaultValue={6}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        max={"All"}
        marks={marks}
        valueLabelDisplay="auto"
        /> */}

        {!!callData.length
          ? callData
              .map((stock) =>
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
                    hidden={
                      expDate === option.daysToExpiration &&
                      handleTypeChange === false
                        ? false
                        : true
                    }
                    raised={true}
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
                        {option.delta === "NaN" ? "N/A" : option.delta}
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
                        {option.theta === "NaN" ? "N/A" : option.theta}
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
                        {option.rho === "NaN" ? "N/A" : option.rho}
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
                        {option.gamma === "NaN" ? "N/A" : option.gamma}
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
                        {option.vega === "NaN" ? "N/A" : option.vega}{" "}
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
              .reverse()
          : " "}
        {!!putData.length
          ? putData
              .map((stock) =>
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
                    hidden={
                      expDate === option.daysToExpiration &&
                      handleTypeChange === true
                        ? false
                        : true
                    }
                    raised={true}
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
                        {option.delta === "NaN" ? "N/A" : option.delta}
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
                        {option.theta === "NaN" ? "N/A" : option.theta}
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
                        {option.rho === "NaN" ? "N/A" : option.rho}
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
                        {option.gamma === "NaN" ? "N/A" : option.gamma}
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
                        {option.vega === "NaN" ? "N/A" : option.vega}{" "}
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
              .reverse()
          : " "}
      </>
    );
  } catch (error) {
    console.log("catch error", error);
    return (
      <i className="sectorHeader" style={{ fontSize: "14px" }}>
        Unable to view {symbol} option chain{" "}
      </i>
    );
  }
}

export default FullOptionChain;
