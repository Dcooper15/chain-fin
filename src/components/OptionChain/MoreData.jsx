import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { ThemeContext } from "styled-components";
import {
  SliderPageContainer,
  StyledClose,
  MoreDataHeaderContainer,
  SectorHeader,
  MoreDataButtonContainer,
} from "../Styles/styledElements";
import {
  Button,
  //   // InputLabel,
  //   // Select,
  //   // MenuItem,
  //   // FormControl,
} from "@material-ui/core";
import { useStyles } from "../Styles/muiStyles";
import { GrFormClose } from "react-icons/gr";
import Quote from "./MoreDataChildren/Quote";
import IncomeStatement from "./MoreDataChildren/IncomeStatement";
import InsiderTrading from "./MoreDataChildren/InsiderTrading";

const addCommas = /\B(?=(\d{3})+(?!\d))/g;

const MoreData = ({ moreDataActive, setMoreDataInactive }) => {
  const theme = useContext(ThemeContext);
  const classes = useStyles();
  const { symbol } = useParams();
  const [quoteData, setQuoteData] = useState([]);
  const [incStatementData, setIncStatementData] = useState([]);
  const [incStatementYears, setIncStatementYears] = useState([]);
  const [insiderData, setInsiderData] = useState([]);
  const [dataSelection, setDataSelection] = useState([]);

  const [insiderYears, setInsiderYears] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://${process.env.REACT_APP_HUB_URL}/api/v3/quote/${symbol}?apikey=${process.env.REACT_APP_FM_CLIENT_ID}`
      )
      .then((response) => {
        setQuoteData(response.data);
      });
    axios
      .get(
        `https://${process.env.REACT_APP_HUB_URL}/api/v3/income-statement/${symbol}?limit=10&apikey=${process.env.REACT_APP_FM_CLIENT_ID}`
      )
      .then((response) => {
        setIncStatementData(response.data);
        setIncStatementYears(response.data.map((years) => years.calendarYear));
      });
    axios
      .get(
        `https://${process.env.REACT_APP_HUB_URL}/api/v4/insider-trading?symbol=${symbol}&limit=250&apikey=${process.env.REACT_APP_FM_CLIENT_ID}`
      )
      .then((response) => {
        const returnYears = response.data.map((years) =>
          years.transactionDate.slice(0, 4)
        );
        const uniqueYears = [...new Set(returnYears)];
        setInsiderYears(uniqueYears);
        setInsiderData(response.data);
      });
  }, [symbol]);

  return (
    <>
      {quoteData.length > 0 &&
      incStatementData.length > 0 
      // &&
      // insiderData.length > 0 
      ? (
        <SliderPageContainer>
          <div
            className={
              moreDataActive === true && theme.name === "dark"
                ? "sliderActiveDark"
                : moreDataActive === true && theme.name !== "dark"
                ? "sliderActive"
                : "sliderInactiveMoreData"
            }
          >
            <StyledClose>
              <GrFormClose
                onClick={() => {
                  setMoreDataInactive();
                }}
              />
            </StyledClose>
            <MoreDataHeaderContainer>
              <SectorHeader>
                {quoteData[0].name} ${quoteData[0].price.toString().replace(addCommas, ",")}
              </SectorHeader>
            </MoreDataHeaderContainer>
            <Quote quoteData={quoteData[0]} />
            <MoreDataButtonContainer>
              <Button
                className={
                  dataSelection === "income statement" ? classes.moreDataButtonDarkActive : 
                  classes.moreDataButtonDark}
                variant="outlined"
                size="small"
                onClick={() => setDataSelection("income statement")}
              >
                Income Statement
              </Button>
              <Button
                className={dataSelection === "insider trades" ? classes.moreDataButtonDarkActive : 
                classes.moreDataButtonDark}
                variant="outlined"
                size="small"
                onClick={() => setDataSelection("insider trades")}
              >
                Insider Trades
              </Button>
            </MoreDataButtonContainer>

            <IncomeStatement
              incStatementYears={incStatementYears}
              incStatementData={incStatementData}
              dataSelection={dataSelection}
            />
            <InsiderTrading
              insiderTradingData={insiderData}
              dataSelection={dataSelection}
              years={insiderYears}
            />
          </div>
        </SliderPageContainer>
      ) : (
        "N/A"
      )}
    </>
  );
};

export default MoreData;
