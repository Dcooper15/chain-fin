import React, { Component } from 'react'
import axios from "axios";
import { Card } from "@material-ui/core";

class Nclh extends Component {
    state = {
        nclhData: [],
        
      }

      async componentDidMount() {
      
        const res = await axios.get(`https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=NCLH&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=NOV&toDate=2020-11-08&range=OTM`);
        this.setState({ nclhData: [...this.state.nclhData, res.data] });
        console.log(res)
      }
      
  
    render() {
       
        const { nclhData } = this.state;


        return(
          <> 
            <div>
            {/* Norwegian Cruise Line Data */}
        
            {!!nclhData.length ? ( nclhData.map(option => (
            
            <Card className="stockInfo" variant="outlined" style={{backgroundColor: "#6d76f7", color: '#fff'}}><i><strong>Norwegian Cruise Line</strong></i><hr></hr><i key={option.id}>
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


export default Nclh;