import React, { Component } from 'react';
import axios from "axios";
import './App.css';

class App extends Component {
  state = {
    stockData: [],
    
  }

  
    
    async componentDidMount() {
      
      const res = await axios.get(`https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=SPY&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=OCT`);
      this.setState({ stockData: res.data, });
      console.log(res)
    }
    


  render() {
    return(
        <>
          <h1>Hello CC Scanner</h1>

        </>

    )
  }

}


export default App;
