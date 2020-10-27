import React, { Component } from 'react'
import axios from "axios";

class Citi extends Component {
    state = {
        citiData: [],
        
      }

      async componentDidMount() {
      
        const res = await axios.get(`https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=C&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=NOV&toDate=2020-11-08&range=OTM`);
        this.setState({ citiData: [...this.state.citiData, res.data] });
        console.log(res)
      }
      
  
    render() {
       
        const { citiData } = this.state;


        return(
          <> 
            <div>
            {/* Citi Bank Data */}
        
            {!!citiData.length ? ( citiData.map(option => (
            
            
            <i key={option.id}>{option.symbol}, Stock Price: {option.underlyingPrice.toFixed(2)} Cost for 100 shares: ${option.underlyingPrice.toFixed(2) * 100} ___ {Object.keys(option.callExpDateMap).map((entry) => {
                return Object.keys(option.callExpDateMap[entry]).map((innerArrayID) => option.callExpDateMap[entry][innerArrayID][0].ask);
            })} Premium Collected: ${Object.keys(option.callExpDateMap).map((entry) => {
                return Object.keys(option.callExpDateMap[entry]).map((innerArrayID) => option.callExpDateMap[entry][innerArrayID][0].ask.toFixed(2) * 100);
            })}</i>
            ))) : (<p>loading data...</p>)}

            </div>
          
        </>
        );
}
}


export default Citi;