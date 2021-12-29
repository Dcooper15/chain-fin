import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";
import { SectorHeader } from "../Styles/styledElements";
import { useStyles } from "../Styles/muiStyles";
import axios from "axios";
import Moment from "react-moment";
import { Card, Button } from "@material-ui/core";
import MapDataPoints from "../DataPoints/MapDataPoints";
import MapCardHeader from "../DataPoints/MapCardHeader";

const date = new Date();


const Twit = () => {
  const classes = useStyles();
  const theme = useContext(ThemeContext);
  const [sentimentData, setSentimentData] = useState([]);
  const [handleTypeChange, setHandleTypeChange] = useState(false);
  //const [direction, setDirection] = useState("up");

  const buttonHandlerPut = () => {
    setHandleTypeChange(true);
  };
  const buttonHandlerCall = () => {
    setHandleTypeChange(false);
  };

  const getButtonColor = theme.name === "dark" ? "#fff" : "#F8E4A5";
  console.log("sentimentData", sentimentData);
  useEffect(() => {
    const sentimentDataArray = [];

    axios
      .get(
        `https://financialmodelingprep.com/api/v4/social-sentiment/trending?apikey=${process.env.REACT_APP_FM_CLIENT_ID}`
      )
      .then((response) => {
        const filterSyms = response.data.filter(
          (element) => element.symbol.includes("-") === false
        );

        filterSyms.map((element) =>
          axios
            .get(
              `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${element.symbol}&contractType=ALL&strikeCount=2&includeQuotes=TRUE&toDate=${process.env.REACT_APP_DATE}&range=OTM`
            )
            .then((response) => {
              if (response.data.status === "SUCCESS") {
                sentimentDataArray.push(response.data);
              }
              setSentimentData([sentimentDataArray]);
            })
        );
      });
  }, []);

  return (
    <>
     
        <SectorHeader>
         Trending on Twitter & StockTwits
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
      {!!sentimentData.length
        ? sentimentData.map((stock) =>
            stock.map((option) => (
              <Card
                className={classes.card}
                style={
                  theme.name === "dark"
                    ? {
                        backgroundColor: "#38372b",
                        borderColor: "#d4af37",
                        color: "#ffebcd",
                      }
                    : {
                        backgroundColor: "#f5f5f5",
                        borderColor: "#00afc9",
                        color: "#002933",
                      }
                }
                variant="outlined"
                hidden={handleTypeChange === true}
                raised={true}
              >
                <MapCardHeader option={option} />

                <MapDataPoints option={option} mapType={"call"} />
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
      {!!sentimentData.length
        ? sentimentData.map((stock) =>
            stock.map((option) => (
              <Card
                className={classes.card}
                style={
                  theme.name === "dark"
                    ? {
                        backgroundColor: "#38372b",
                        borderColor: "#d4af37",
                        color: "#ffebcd",
                      }
                    : {
                        backgroundColor: "#f5f5f5",
                        borderColor: "#00afc9",
                        color: "#002933",
                      }
                }
                variant="outlined"
                hidden={handleTypeChange === false}
                raised={true}
              >
                <MapCardHeader option={option} />

                <MapDataPoints option={option} mapType={"put"} />
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
};

export default Twit;
