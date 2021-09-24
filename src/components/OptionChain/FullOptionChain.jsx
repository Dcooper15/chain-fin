import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";
import {
  SectorHeader,
  StyledExpDate,
  StyledMenuItem,
  StyledOcCollateral,
} from "../Styles/styledElements";
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
import HeaderOptionChain from "./HeaderOptionChain";
import MapFullChainData from "./MapFullChainData";
import FullChainCardHeader from "./FullChainCardHeader";

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
  const [chainPrice, setChainPrice] = useState([]);
  const [chainPercent, setChainPercent] = useState([]);
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

  useEffect(() => {
    axios
      .get(
        `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&strikeCount=${strikeCount}&includeQuotes=TRUE&fromDate=2021-09-03&toDate=2023-01-30`
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
        const percentChange =
          response.data.underlying.markPercentChange.toFixed(2);
        setChainPrice([stockPrice]);
        setChainPercent([percentChange]);
        setName([response.data.underlying.description]);
        console.log(response.data);
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
      });
  }, [symbol, strikeCount]);
  try {
    return (
      <>
        {!!nameRender.length ? (
          <HeaderOptionChain
            nameRender={nameRender}
            chainPrice={chainPrice}
            chainPercent={chainPercent}
          />
        ) : (
          " "
        )}

        <br></br>
        <div className="dateContainer">
          {!!expDays.length
            ? expDays.map((expDay) => (
                <div style={{ marginBottom: "2%", paddingBottom: "0" }}>
                  <Button
                    className={classes.buttonExp}
                    value={expDay}
                    size="small"
                    onClick={() => setExpDate(expDay)}
                    style={{
                      background:
                        expDate === expDay
                          ? theme.name === "dark"
                            ? "black"
                            : "white"
                          : "none",
                      marginBottom: "0",
                    }}
                  >
                    <StyledExpDate>
                      <Moment
                        add={{ days: expDay }}
                        format={expDay > offsetDays ? "ll" : "MMM DD"}
                      >
                        {date}
                      </Moment>
                    </StyledExpDate>
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
          style={{ marginLeft: "2%" }}
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
          style={{ marginLeft: "1%", marginRight: "4%" }}
        >
          <strong style={{ color: theme.name === "dark" ? "#fff" : "#F8E4A5" }}>
            Put
          </strong>
        </Button>

        <FormControl className={classes.formControl}>
          <InputLabel id="strikeLabel" className={classes.select}>
            <strong
              style={{ color: theme.name === "dark" ? "#d4af37" : "#146175" }}
            >
              Strikes
            </strong>
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
              <StyledMenuItem>6</StyledMenuItem>
            </MenuItem>
            <MenuItem className={classes.menuItem} value={10}>
              <StyledMenuItem>10</StyledMenuItem>
            </MenuItem>
            <MenuItem className={classes.menuItem} value={14}>
              <StyledMenuItem>14</StyledMenuItem>
            </MenuItem>
            <MenuItem className={classes.menuItem} value={60}>
              <StyledMenuItem>All</StyledMenuItem>
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
                    <FullChainCardHeader option={option} />
                    <br></br>
                    <StyledOcCollateral>
                      CC Premium to 100 Shares Ratio{" "}
                      {(
                        ((option.mark * 100) / (chainPrice *
                          100)*100) 
                      ).toFixed(2)}
                      %
                    </StyledOcCollateral>
                    <br></br>
                    <MapFullChainData option={option} />
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
                    <FullChainCardHeader option={option} />
                    <StyledOcCollateral>
                      CSP Premium to Collateral Ratio{" "}
                      {(
                        ((option.mark * 100) / (option.strikePrice * 100)) *
                        100
                      ).toFixed(2)}
                      %
                    </StyledOcCollateral>
                    <br></br>
                    <MapFullChainData option={option} mapType={"put"} />
                    <>
                      <>Exp Date </>
                      <>
                        <Moment
                          add={{ days: option.daysToExpiration }}
                          format="MMM DD"
                        >
                          {date}
                        </Moment>
                      </>
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
      <SectorHeader style={{ fontSize: "14px" }}>
        Unable to view {symbol} option chain
      </SectorHeader>
    );
  }
}

export default FullOptionChain;
