import React, { useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import { useStyles } from "../Styles/muiStyles";
import ResearchChainData from "./ResearchChainData";
import ResearchInsiderTrades from "./ResearchStatements/ResearchInsiderTrades";
import ResearchIncomeStatement from "./ResearchStatements/ResearchIncomeStatement";
import BalanceSheet from "./ResearchStatements/BalanceSheet";
import {
  StyledSearchHeader,
  MoreDataButtonContainer,
} from "../Styles/styledElements";
import { Button, TextField } from "@material-ui/core";

const MainResearch = () => {
  const classes = useStyles();
  const theme = useContext(ThemeContext);
  const [text, setText] = useState("");
  const [submittedText, setSubmittedText] = useState([]);
  const [dataSelection, setDataSelection] = useState([]);
  const [emptyBalanceSheet, setEmptyBalanceSheet] = useState([]);
  const [emptyIncomeStatement, setEmptyIncomeStatement] = useState([]);
  const [emptyInsiderTrades, setEmptyInsiderTrades] = useState([]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      //check to make sure search text isn't blank
    } else {
      setSubmittedText(text.toUpperCase());
    }
  };

  const getSubmitButtonStyle =
    theme.name === "dark"
      ? {
          backgroundColor: "#3D3D3D",
          borderColor: "#d4af37",
          color: "#ffebcd",
          marginLeft: "1%",
        }
      : {
          backgroundColor: "#ebebeb",
          borderColor: "#146175",
          color: "#146175",
          marginLeft: "1%",
        };

  const getStatementButtonClass = (theme, selection, dataSelection) => {
    if (dataSelection === selection && theme === "dark") {
      return classes.moreDataButtonDarkActive;
    } else if (dataSelection === selection && theme === "light") {
      return classes.moreDataButtonLightActive;
    } else if (dataSelection !== selection && theme === "dark") {
      return classes.moreDataButtonDark;
    } else if (dataSelection !== selection && theme === "light") {
      return classes.moreDataButtonLight;
    }
  };

  return (
    <div>
      <form className="searchForm" onSubmit={handleSubmit}>
        <StyledSearchHeader>Search Stock by Ticker Symbol</StyledSearchHeader>
        <br></br>
        <br></br>
        <TextField
          disabled={false}
          type="text"
          name="text"
          label={text.length ? "Symbol" : "AAPL"}
          onChange={handleTextChange}
          value={text}
          InputLabelProps={{
            style: {
              color: theme.name === "dark" ? "#d4af37" : "#146175",
              fontStyle: text.length ? "normal" : "oblique",
              borderColor: "#fff",
            },
          }}
          InputProps={{
            style: {
              color: theme.name === "dark" ? "#d4af37" : "#146175",
              fontStyle: "normal",
            },
          }}
          variant="outlined"
          size="small"
          style={{ paddingBottom: "0%", marginLeft: "2%" }}
        />

        <Button
          type="submit"
          variant="outlined"
          value="Search"
          size="small"
          style={getSubmitButtonStyle}
        >
          Search
        </Button>
      </form>
      <ResearchChainData submittedText={submittedText} />
      {submittedText.length ? (
        <MoreDataButtonContainer>
          {/* if income statement data empty, hide button */}
          {emptyIncomeStatement === true ? (
            ""
          ) : (
            <Button
              className={
                getStatementButtonClass(
                  theme.name,
                  "income statement",
                  dataSelection
                )
              }
              variant="outlined"
              size="small"
              onClick={() => setDataSelection("income statement")}
            >
              Income Statement
            </Button>
          )}
          {/* if balance sheet data empty, hide button */}
          {emptyBalanceSheet === true ? (
            ""
          ) : (
            <Button
              className={
                getStatementButtonClass(
                  theme.name,
                  "balance sheet",
                  dataSelection
                )
                
              }
             
              variant="outlined"
              size="small"
              onClick={() => setDataSelection("balance sheet")}
            >
              Balance Sheet
            </Button>
          )}
          {/* if insider trades data empty, hide button */}
          {emptyInsiderTrades === true ? (
            ""
          ) : (
            <Button
              className={
                getStatementButtonClass(
                  theme.name,
                  "insider trades",
                  dataSelection
                )
              }
              variant="outlined"
              size="small"
              onClick={() => setDataSelection("insider trades")}
            >
              Insider Trades
            </Button>
          )}
        </MoreDataButtonContainer>
      ) : (
        ""
      )}
      <ResearchIncomeStatement
        submittedText={submittedText}
        dataSelection={dataSelection}
        isEmptyIncomeStatement={setEmptyIncomeStatement}
      />
      <ResearchInsiderTrades
        submittedText={submittedText}
        dataSelection={dataSelection}
        isEmptyInsiderTrades={setEmptyInsiderTrades}
      />
      <BalanceSheet
        submittedText={submittedText}
        dataSelection={dataSelection}
        isEmptyBalanceSheet={setEmptyBalanceSheet}
      />
    </div>
  );
};

export default MainResearch;
