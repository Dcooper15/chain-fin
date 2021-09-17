import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
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


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  label: {
    marginBottom: "0",
    marginTop: "3%",
    marginLeft: "2%",
    minWidth: 75,
  },
  menuItem: {
    backgroundColor: '#756300',
    '&:hover': {
      backgroundColor: '#343434',
      '&$selected': {
        backgroundColor: '#343434'
      },
      
    },
    paddingTop: "0px",
    width: "100%",
    justifyContent: "center"
   
  },
  select: {
    width: '25%',
    marginLeft: "2%",
    "& .MuiSvgIcon-root": {
      color: "#d4af37",
    },
    
  },
  
 
}));

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
          <h2 className="sectorHeader" style={{ marginBottom: "0%" }}>
            <NameOptionChain namesRender={nameRender} />
          </h2>
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
                    size='small'
                    variant={expDate === expDay ? "contained" : "outlined"}
                    color='#d4af37'
                    style={{ height: "70%", width: "100%" }}
                    onClick={() => setExpDate(expDay)}
                  >
                   <i style={{color: "seagreen"}}><Moment
                      style={{ fontSize: expDay > offsetDays ? "60%" : "80%" }}
                      add={{ days: expDay }}
                      format={expDay > offsetDays ? "ll" : "MMM DD"}
                    >
                      {date}
                    </Moment></i> 
                  </Button>
                </div>
              ))
            : " "}
        </div>
        <Button

          type="submit"
          variant={handleTypeChange === !true ? "contained" : "outlined"}
          color="gold"
          size="small"
          onClick={buttonHandlerCall}
          style={{ marginLeft: "2%" }}
        >
          <strong style={{color: 'Green'}}>Call</strong>
        </Button>
        <Button
    
          type="submit"
          variant={handleTypeChange === true ? "contained" : "outlined"}
          size="small"
          color="gold"
          onClick={buttonHandlerPut}
        >
          <strong style={{color: 'Green'}}>Put</strong>
        </Button>
       <br></br>

        
        <FormControl className={classes.formControl}>
        <InputLabel 
        id="strikeLabel"
        className={classes.label}><strong style={{color: "#d4af37", fontFamily:'Montserrat, sans-serif'}}>Strikes</strong></InputLabel>
        <Select
          labelId="strikeLabel"
          id="strikes"
          color="gold"
          className={classes.select}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={strikeCount}
          onChange={handleStrikeChange}
        >
          <MenuItem classes={{root: classes.menuItem, selected: 'selected'}} value={6}
          ><bold style={{color: "#d4af37"}}>6</bold></MenuItem>
          <MenuItem className={classes.menuItem} value={10}><bold style={{color: "#d4af37"}}>10</bold></MenuItem>
          <MenuItem className={classes.menuItem} value={14}><bold style={{color: "#d4af37"}}>14</bold></MenuItem>
          <MenuItem className={classes.menuItem} value={60}><bold style={{color: "#d4af37"}}>All</bold></MenuItem>
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
                    hidden={
                      expDate === option.daysToExpiration &&
                      handleTypeChange === false
                        ? false
                        : true
                    }
                    className="stockInfo"
                    variant="outlined"
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
                        {option.delta == "NaN" ? "N/A" : (option.delta)}
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
                        {option.theta == "NaN" ? "N/A" : option.theta}
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
                        {option.rho == "NaN" ? "N/A" : option.rho}
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
                        {option.gamma == "NaN" ? "N/A" : option.gamma}
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
                        {option.vega == "NaN" ? "N/A" : option.vega}{" "}
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
                    hidden={
                      expDate === option.daysToExpiration &&
                      handleTypeChange === true
                        ? false
                        : true
                    }
                    className="stockInfo"
                    variant="outlined"
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
                      {option.delta == "NaN" ? "N/A" : option.delta}
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
                        {option.theta == "NaN" ? "N/A" : option.theta}
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
                        {option.rho == "NaN" ? "N/A" : option.rho}
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
                        {option.gamma == "NaN" ? "N/A" : option.gamma}
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
                        {option.vega == "NaN" ? "N/A" : option.vega}{" "}
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
