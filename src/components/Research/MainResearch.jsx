import React, { useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import { useStyles } from "../Styles/muiStyles";
import ResearchChainData from "./ResearchChainData";
import ResearchInsiderTrades from "./ResearchStatements/ResearchInsiderTrades";
import ResearchIncomeStatement from "./ResearchStatements/ResearchIncomeStatement";
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

  const getButtonStyle =
    theme.name === "dark"
      ? {
          backgroundColor: "#3D3D3D",
          borderColor: "#d4af37",
          color: "#ffebcd",
          marginLeft: "1%",
        }
      : {
          backgroundColor: "#ebebeb",
          borderColor: "#00afc9",
          color: "#146175",
          marginLeft: "1%",
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
          label="Symbol"
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
              color: "#d4af37",
              fontStyle: "normal",
            },
          }}
          variant="outlined"
          size="small"
          style={{ paddingBottom: "0%" }}
        />

        <Button
          type="submit"
          variant="outlined"
          value="Search"
          size="small"
          style={getButtonStyle}
        >
          Search
        </Button>
      </form>
      <ResearchChainData submittedText={submittedText} />
      <MoreDataButtonContainer>
        <Button
          className={
            dataSelection === "income statement"
              ? classes.moreDataButtonDarkActive
              : classes.moreDataButtonDark
          }
          variant="outlined"
          size="small"
          onClick={() => setDataSelection("income statement")}
        >
          Income Statement
        </Button>
        <Button
          className={
            dataSelection === "insider trades"
              ? classes.moreDataButtonDarkActive
              : classes.moreDataButtonDark
          }
          variant="outlined"
          size="small"
          onClick={() => setDataSelection("insider trades")}
        >
          Insider Trades
        </Button>
      </MoreDataButtonContainer>
      <ResearchIncomeStatement
        submittedText={submittedText}
        dataSelection={dataSelection}
      />
      <ResearchInsiderTrades
        submittedText={submittedText}
        dataSelection={dataSelection}
      />
    </div>
  );
};

export default MainResearch;
