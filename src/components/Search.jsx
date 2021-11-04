import React, { Component } from "react";
import { withTheme } from "styled-components";
import { StyledSearchHeader } from "./Styles/styledElements";
import { Button, TextField } from "@material-ui/core";
import "./MainSearch.css";

class Search extends Component {
  state = {
    text: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      console.log(" ");
    } else {
      this.props.searchStocks(this.state.text.toUpperCase());
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <div>
        <form className="searchForm" onSubmit={this.onSubmit}>
        <StyledSearchHeader>
              Search Stock by Ticker Symbol
        </StyledSearchHeader>
        <br></br>
        <br></br>
          <TextField
            disabled={false}
            type="text"
            name="text"
            label="Symbol"
            value={this.state.text}
            onChange={this.onChange}
            InputLabelProps={{
              style: {
                color: this.props.theme.name === "dark" ? "#d4af37" : "#146175",
                fontStyle: this.state.text.length ? "normal" : "oblique",
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
            style={{paddingBottom: '0%'}}
            
          />
          <p></p>
          <Button
            type="submit"
            variant="outlined"
            value="Search"
            size="small"
            style={
              this.props.theme.name === "dark"
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
      </div>
    );
  }
}

export default withTheme(Search);
