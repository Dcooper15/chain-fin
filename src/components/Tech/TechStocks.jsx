import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Card } from "@material-ui/core";

const techArray = ['AMD', 'PINS', 'SONY', 'TWTR', 'ZM'];

function TechStocks() {
    const [amd, setAmdData] = useState([]);
    const [pins, setPinsData] = useState([]);
    const [sony, setSonyData] = useState([]);
    const [twtr, setTwtrData] = useState([]);
    const [zm, setZmData] = useState([]);
 
    const dataArray = [amd, pins, sony, twtr, zm];
    
    
      useEffect(() => {
        
       techArray.map(symbol => 
        axios.get(`https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=${process.env.REACT_APP_MONTH}&toDate=${process.env.REACT_APP_DATE}&range=OTM` 
        ).then((response) => {
          if(symbol === 'AMD'){
            setAmdData([response.data]);
          } else if (symbol === 'PINS') {
            setPinsData([response.data])
          }
          else if (symbol === 'SONY') {
            setSonyData([response.data])
          }
          else if (symbol === 'TWTR') {
            setTwtrData([response.data])
          }
          else if (symbol === 'ZM') {
            setZmData([response.data])
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
            {option.underlyingPrice.toFixed(2) * 100}</i>
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
            <br></br>
            <i key={6}>Open Interest:{' '}
            {Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(option.callExpDateMap[entry]).map(
            (innerArrayID) =>
            option.callExpDateMap[entry][innerArrayID][0].openInterest
          
            );
            })}
            </i>
            <br></br>
            <i key={7}>
            Volatility:{' '}
            {Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(option.callExpDateMap[entry]).map(
            (innerArrayID) =>
            option.callExpDateMap[entry][innerArrayID][0].volatility.toFixed(2)
          
            );
            })}
            </i>
            <br></br>
            <i key={8}>
            Days to Expiration:{' '}
            {Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(option.callExpDateMap[entry]).map(
            (innerArrayID) =>
            option.callExpDateMap[entry][innerArrayID][0].daysToExpiration
          
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


export default TechStocks;