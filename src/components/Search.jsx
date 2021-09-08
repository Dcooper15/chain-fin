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
      alert("Please specifiy a Ticker Symbol");
    } else {
      this.props.searchStocks(this.state.text.toUpperCase());
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <div>
        <form className="searchForm" onSubmit={this.onSubmit}>
          <label> Search Stock by Ticker Symbol </label>
          <br></br>
          <br></br>
          <TextField
            type="text"
            name="text"
            placeholder="AAPL"
            value={this.state.text}
            onChange={this.onChange}
            variant="outlined"
            size="small"
            color="secondary"
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
