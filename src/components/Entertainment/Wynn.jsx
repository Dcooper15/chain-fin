import React, { Component } from 'react'
import axios from "axios";
import { Card } from "@material-ui/core";

class Wynn extends Component {
    state = {
        wynnData: [],
        
      }

      async componentDidMount() {
      
        const res = await axios.get(`https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=WYNN&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=NOV&toDate=${process.env.REACT_APP_DATE}&range=OTM`);
        this.setState({ wynnData: [...this.state.wynnData, res.data] });
        
      }
      
  
    render() {
       
        const { wynnData } = this.state;


        return(
          <> 
            <div>
            {/* wynn Data */}
        
            {!!wynnData.length ? ( wynnData.map(option => (
            
            <Card className="stockInfo" variant="outlined" style={{backgroundColor: "#6d76f7", color: '#fff', borderRadius: '15px'}}><i><strong>Wynn Resorts</strong></i><hr></hr><i key={option.index}>
            {option.symbol}</i><br></br><i>Stock Price:{" "}
            ${option.underlyingPrice.toFixed(2)}</i><br></br><i> Cost for 100 shares: $
            {option.underlyingPrice.toFixed(2) * 100}</i><br></br><i>Ask Price: $
            {Object.keys(option.callExpDateMap).map((entry) => {
              return Object.keys(
                option.callExpDateMap[entry]
              ).map((innerArrayID) =>
                option.callExpDateMap[entry][innerArrayID][0].ask.toFixed(2)
              );
            })}{" "}</i>
            <br></br><i>Premium collected: $
            {Object.keys(option.callExpDateMap).map((entry) => {
              return Object.keys(option.callExpDateMap[entry]).map(
                (innerArrayID) =>
                  option.callExpDateMap[entry][innerArrayID][0].ask.toFixed(
                    2
                  ) * 100
              );
            })}
          </i></Card>
        ))
      ) : (
        <p>loading data...</p>
      )}
            </div>
          
        </>
        );
}
}


export default Wynn;