import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Card } from "@material-ui/core";

const finArray = ['AXP', 'BAC', 'C', 'JPM', 'WFC'];

function FinanceStocks() {
    const [axp, setAxpData] = useState([]);
    const [bac, setBacData] = useState([]);
    const [c, setCData] = useState([]);
    const [jpm, setJpmData] = useState([]);
    const [wfc, setWfcData] = useState([]);
 
    const dataArray = [axp, bac, c, jpm, wfc];
    
    
      useEffect(() => {
        
       finArray.map(symbol => 
        axios.get(`https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=${process.env.REACT_APP_MONTH}&toDate=${process.env.REACT_APP_DATE}&range=OTM` 
        ).then((response) => {
          if(symbol === 'AXP'){
            setAxpData([response.data]);
          } else if (symbol === 'BAC') {
            setBacData([response.data])
          }
          else if (symbol === 'C') {
            setCData([response.data])
          }
          else if (symbol === 'JPM') {
            setJpmData([response.data])
          }
          else if (symbol === 'WFC') {
            setWfcData([response.data])
          }
          
         
        }))
        
      },[]
        
      )
      
  
  return(
  <>
            
            
            
    {!!dataArray.length ? ( dataArray.map(stock => stock.map(option => (
      <Card className="stockInfo" variant="outlined"
        style={{backgroundColor: "#6d76f7", color: '#fff', borderRadius: '15px'}}>
          {/* <i><strong>{name}</strong></i> */}
            {/* <hr></hr> */}
            <i key={1}>
           <strong>{option.symbol}</strong></i>
          <br></br>
            <i key={2}>Stock Price:{" "}
            ${option.underlyingPrice.toFixed(2)}</i>
          <br></br>
            <i key={3}> Cost for 100 shares: $
            {option.underlyingPrice.toFixed(0) * 100}</i>
          <br></br>
            <i key={4}>Bid Price: $
            {Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(
            option.callExpDateMap[entry]
            ).map((innerArrayID) =>
            option.callExpDateMap[entry][innerArrayID][0].bid.toFixed(2)
            );
            })}{" "}</i>
          <br></br>
            <i key={5}>Premium collected: $
            {Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(option.callExpDateMap[entry]).map(
            (innerArrayID) =>
            option.callExpDateMap[entry][innerArrayID][0].bid.toFixed(
            2) * 100
            );
            })}
            </i>
      </Card>
            )))
          ) : (
            <p>loading data...</p>
          )} 

  </>
        );

};


export default FinanceStocks;