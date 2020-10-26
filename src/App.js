import React, { Component } from 'react';
import axios from "axios";
import './App.css';

class App extends Component {
  state = {
    stockData: [],
    
  }

  
    
    async componentDidMount() {
      
      const res = await axios.get(`https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=SPY&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=OCT`);
      this.setState({ stockData: [...this.state.stockData, res.data], });
      console.log(res)
    }
    


  render() {
    
    const { stockData } = this.state;
   


    return(
      <>
      <div>
        <h1>Hello CC Scanner</h1>
          {!!stockData.length ? ( stockData.map(option => (
        
        
        <i key={option.id}>{option.symbol}, Stock Price: {option.underlyingPrice.toFixed(2)} Cost for 100 shares: {option.underlyingPrice * 100} </i>
        ))) : (<p>loading data</p>)}
      

          

        </div>
    </>
    );

  }
}


export default App;
