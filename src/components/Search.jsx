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
          disabled={false}
            type="text"
            name="text"
            label="Symbol"
            value={this.state.text}
            onChange={this.onChange}
            InputLabelProps={{
              style: { color: '#d4af37'}, 
           }}
            variant="outlined"
            size="small"
            color="#d4af37"
        
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
