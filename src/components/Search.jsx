import React, { Component } from "react";
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
      this.props.alert("Invalid Symbol");
    } else {
      this.props.searchStocks(this.state.text.toUpperCase());
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <div>
        <form className="searchForm" onSubmit={this.onSubmit}>
          <label
            className="sectorHeader"
            style={{ fontSize: "14px", paddingBottom: "0%" }}
          >
            {" "}
            Search Stock by Ticker Symbol{" "}
          </label>
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
                color: "#d4af37",
                fontStyle: this.state.text.length ? "normal" : "oblique",
              },
            }}
            InputProps={{
              style: { color: "#d4af37", fontStyle: "normal" },
            }}
            variant="outlined"
            size="small"
            color="secondary"
            text="secondary"
          />
          <p></p>
          <Button
            className="searchButton"
            type="submit"
            variant="outlined"
            value="Search"
            color="secondary"
          >
            Search
          </Button>
        </form>
      </div>
    );
  }
}

export default Search;
