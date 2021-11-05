import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";
import { SectorHeader } from "../Styles/styledElements";
import { useStyles } from "../Styles/muiStyles";
import axios from "axios";
import Moment from "react-moment";
import { Card, Button } from "@material-ui/core";
import MapDataPoints from "../DataPoints/MapDataPoints";
import MapCardHeader from "../DataPoints/MapCardHeader";

const monthNames = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
const date = new Date();
const month = date.getMonth();
const day = date.getDate();

function TrendingWsb() {
  const classes = useStyles();
  const theme = useContext(ThemeContext);
  const [marketData, setMarketData] = useState([]);
  const [handleTypeChange, setHandleTypeChange] = useState(false);
  const [minutes, setMinutes] = useState([]);
  const [occurences, setOccurences] = useState([]);

  const buttonHandlerPut = () => {
    setHandleTypeChange(true);
  };
  const buttonHandlerCall = () => {
    setHandleTypeChange(false);
  };

  const getButtonColor = theme.name === "dark" ? "#fff" : "#F8E4A5";

  useEffect(() => {
    const wsbDataArray = [];
    axios
      .get(
        `https://www.reddit.com/r/wallstreetbets/comments/ql0v5g/daily_discussion_thread_for_${monthNames[month]}_${day}_2021.json?limit=1000`
      )
      .then((response) => {
        const getMostRecentUtc =
          response.data[1].data.children[1].data.created_utc;

        const getLastPost = response.data[1].data.children.slice(-2);

        const lastPostUtc = getLastPost[0].data.created_utc;

        const minuteDifference = Math.floor(
          (getMostRecentUtc - lastPostUtc) / 60
        );

        setMinutes([minuteDifference]);

        const posts = response.data[1].data.children.map(
          (innerArray) => innerArray.data.body
        );

        const allPosts = posts.join(" -!@- ");
        const upperCaseWords = allPosts.match(/(\b[A-Z][A-Z]+|\b[A-Z]\b)/g);

        let potentialSymbols = [];
        let i;
        for (i = 0; i < upperCaseWords.length; i++) {
          if (
            upperCaseWords[i].length === 3 ||
            upperCaseWords[i].length === 4
          ) {
            potentialSymbols.push(upperCaseWords[i]);
          }
        }
        // console.log(potentialSymbols);
        const symbolCounter = potentialSymbols.reduce((obj, e) => {
          obj[e] = (obj[e] || 0) + 1;
          return obj;
        }, {});

        // console.log(symbolCounter);

        let sortedSymbols = [];
        for (let occurence in symbolCounter) {
          sortedSymbols.push([occurence, symbolCounter[occurence]]);
        }

        sortedSymbols
          .sort(function (a, b) {
            return a[1] - b[1];
          })
          .reverse();

        const limitSymbols = sortedSymbols.slice(0, 10);
        // console.log("limit", limitSymbols);
        setOccurences(limitSymbols.flat());

        limitSymbols.map((symbol) =>
          axios
            .get(
              `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol[0]}&contractType=ALL&strikeCount=2&includeQuotes=TRUE&toDate=${process.env.REACT_APP_DATE}&range=OTM`
            )
            .then((response) => {
              if (response.data.status === "SUCCESS") {
                wsbDataArray.push(response.data);
              }
              setMarketData([wsbDataArray]);
            })
        );
      });
  }, []);

  return (
    <>
      <SectorHeader style={{ marginLeft: "0.5%" }}>
        Tickers Trending on WSB
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
      {!!marketData.length ? (
        marketData.map((stock) =>
          stock.map((option) => (
            <Card
              className={classes.card}
              style={
                theme.name === "dark"
                  ? {
                      backgroundColor: "#342F01",
                      // #3D3D3D
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
              <i>
                {occurences[occurences.indexOf(option.symbol) + 1]} mention(s)
                in last {minutes} minutes
              </i>
              <MapCardHeader option={option} />
              <MapDataPoints option={option} mapType={"call"} />

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
        <SectorHeader>scanning...</SectorHeader>
      )}
      {!!marketData.length
        ? marketData.map((stock) =>
            stock.map((option) => (
              <Card
                className={classes.card}
                style={
                  theme.name === "dark"
                    ? {
                        backgroundColor: "#342F01",
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
                <i>
                  {occurences[occurences.indexOf(option.symbol) + 1]} mention(s)
                  in last {minutes} minutes
                </i>
                <MapCardHeader option={option} />
                <></>
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
}
export default TrendingWsb;
