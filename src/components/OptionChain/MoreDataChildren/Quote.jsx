import React, { useContext } from "react";
import Moment from "react-moment";
import { ThemeContext } from "styled-components";
import { Card } from "@material-ui/core";
import {
  QuoteContainerLeft,
  QuoteContainerRight,
  QuoteHeaderLeft,
  QuoteValueLeft,
} from "../../Styles/styledElements";
import { useStyles } from "../../Styles/muiStyles";

const addCommas = /\B(?=(\d{3})+(?!\d))/g;

const Quote = ({ quoteData }) => {
  const classes = useStyles();
  const theme = useContext(ThemeContext);

  return (
    <Card
      className={classes.quoteCard}
      style={
        theme.name === "dark"
          ? {
              backgroundColor: "#38372b",

              color: "#ffebcd",
            }
          : {
              backgroundColor: "#c9c9c9",

              color: "#002933",
            }
      }
      variant="outlined"
      // hidden={handleTypeChange === true}
      raised={true}
    >
      <QuoteContainerLeft>
        <QuoteHeaderLeft>Volume</QuoteHeaderLeft>
        <QuoteValueLeft>
          {quoteData.volume.toString().replace(addCommas, ",")}
        </QuoteValueLeft>
      </QuoteContainerLeft>
      <QuoteContainerRight>
        <QuoteHeaderLeft>Avg Volume</QuoteHeaderLeft>
        <QuoteValueLeft>
          {quoteData.avgVolume.toString().replace(addCommas, ",")}
        </QuoteValueLeft>
      </QuoteContainerRight>
      <QuoteContainerLeft>
        <QuoteHeaderLeft>Day High</QuoteHeaderLeft>
        <QuoteValueLeft>
          ${quoteData.dayHigh.toFixed(2).toString().replace(addCommas, ",")}
        </QuoteValueLeft>
      </QuoteContainerLeft>
      <QuoteContainerRight>
        <QuoteHeaderLeft>Day Low</QuoteHeaderLeft>
        <QuoteValueLeft>
          $
          {quoteData.dayLow == null
            ? "N/A"
            : quoteData.dayLow.toFixed(2).toString().replace(addCommas, ",")}
        </QuoteValueLeft>
      </QuoteContainerRight>

      <QuoteContainerLeft>
        <QuoteHeaderLeft>Today's Open</QuoteHeaderLeft>
        <QuoteValueLeft>
          $
          {quoteData.open == null
            ? "N/A"
            : quoteData.open.toFixed(2).toString().replace(addCommas, ",")}
        </QuoteValueLeft>
      </QuoteContainerLeft>
      <QuoteContainerRight>
        <QuoteHeaderLeft>Previous Close</QuoteHeaderLeft>
        <QuoteValueLeft>
          ${quoteData.previousClose.toString().replace(addCommas, ",")}
        </QuoteValueLeft>
      </QuoteContainerRight>
      <QuoteContainerLeft>
        <QuoteHeaderLeft>P/E Ratio</QuoteHeaderLeft>
        <QuoteValueLeft>
          {quoteData.pe == null
            ? "N/A"
            : quoteData.pe.toFixed(2).toString().replace(addCommas, ",")}
        </QuoteValueLeft>
      </QuoteContainerLeft>
      <QuoteContainerRight>
        <QuoteHeaderLeft>EPS</QuoteHeaderLeft>
        <QuoteValueLeft>
          {quoteData.pe == null
            ? "N/A"
            : quoteData.eps.toFixed(2).toString().replace(addCommas, ",")}
        </QuoteValueLeft>
      </QuoteContainerRight>

      <QuoteContainerLeft>
        <QuoteHeaderLeft>50 Day Avg</QuoteHeaderLeft>
        <QuoteValueLeft>
          $
          {quoteData.priceAvg50 == null
            ? "N/A"
            : quoteData.priceAvg50
                .toFixed(2)
                .toString()
                .replace(addCommas, ",")}
        </QuoteValueLeft>
      </QuoteContainerLeft>
      <QuoteContainerRight>
        <QuoteHeaderLeft>200 Day Avg</QuoteHeaderLeft>
        <QuoteValueLeft>
          $
          {quoteData.priceAvg200 == null
            ? "N/A"
            : quoteData.priceAvg200
                .toFixed(2)
                .toString()
                .replace(addCommas, ",")}
        </QuoteValueLeft>
      </QuoteContainerRight>

      <QuoteContainerLeft>
        <QuoteHeaderLeft>Year High</QuoteHeaderLeft>
        <QuoteValueLeft>
          $
          {quoteData.yearHigh == null
            ? "N/A"
            : quoteData.yearHigh.toString().replace(addCommas, ",")}
        </QuoteValueLeft>
      </QuoteContainerLeft>
      <QuoteContainerRight>
        <QuoteHeaderLeft>Year Low</QuoteHeaderLeft>
        <QuoteValueLeft>
          $
          {quoteData.yearLow == null
            ? "N/A"
            : quoteData.yearLow.toString().replace(addCommas, ",")}
        </QuoteValueLeft>
      </QuoteContainerRight>
      <QuoteContainerLeft>
        <QuoteHeaderLeft>Earnings Date</QuoteHeaderLeft>

        <QuoteValueLeft>
          {quoteData.earningsAnnouncement == null ? (
            "N/A"
          ) : (
            <Moment format="ll">
              {quoteData.earningsAnnouncement.slice(
                0,
                quoteData.earningsAnnouncement.indexOf("T")
              )}
            </Moment>
          )}
        </QuoteValueLeft>
      </QuoteContainerLeft>
      <QuoteContainerRight>
        <QuoteHeaderLeft>Market Cap</QuoteHeaderLeft>
        <QuoteValueLeft>
          $
          {quoteData.marketCap == null
            ? "N/A"
            : quoteData.marketCap.toString().replace(addCommas, ",")}
        </QuoteValueLeft>
      </QuoteContainerRight>
      <QuoteContainerLeft>
        <QuoteHeaderLeft>Shares O/S</QuoteHeaderLeft>
        <QuoteValueLeft>
          {quoteData.sharesOutstanding == null
            ? "N/A"
            : quoteData.sharesOutstanding.toString().replace(addCommas, ",")}
        </QuoteValueLeft>
      </QuoteContainerLeft>
    </Card>
  );
};

export default Quote;
