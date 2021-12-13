import React, { useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import ResearchChainData from "./ResearchChainData";
import ResearchInsiderTrades from "./ResearchStatements/ResearchInsiderTrades";
import { StyledSearchHeader } from "../Styles/styledElements";
import { Button, TextField } from "@material-ui/core";


const SearchForm = () => {
  const theme = useContext(ThemeContext);
  const [text, setText] = useState("");
  const [submittedText, setSubmittedText] = useState([]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      console.log(" ");
    } else {
      setSubmittedText(text.toUpperCase());
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
          // color="#fff"
          // text="#fff"
          style={{ paddingBottom: "0%" }}
        />
        <p></p>
        <Button
          type="submit"
          variant="outlined"
          value="Search"
          size="small"
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
                  color: "#146175",
                }
          }
        >
          Search
        </Button>
      </form>
      <ResearchChainData submittedText={submittedText} />
      <ResearchInsiderTrades submittedText={submittedText} />
    </div>
  );
};

export default SearchForm;
