import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Card } from "@material-ui/core";

const entArray = ['AMC', 'T', 'DIS', 'MGM', 'WYNN'];
const symbols = [];
entArray.forEach(symbol => symbols.push(symbol));

console.log("Symbols are..", symbols)

const url = `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=AMC&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=${process.env.REACT_APP_MONTH}&toDate=${process.env.REACT_APP_DATE}&range=OTM` 


function Amc() {
    const [amc, setAmcData] = useState([]);
    const [t, setTData] = useState([]);
    const [dis, setDisData] = useState([]);
    const [mgm, setMgmData] = useState([]);
    const [wynn, setWynnData] = useState([]);
       
    console.log("AMC issss..", amc);
      useEffect(() => {
        
       entArray.forEach(symbol => 
        axios.get(`https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=${process.env.REACT_APP_MONTH}&toDate=${process.env.REACT_APP_DATE}&range=OTM` 
        ).then((response) => {
          if(symbol == 'AMC'){
            setAmcData([response.data]);
          } else if (symbol == 'T') {
            setTData([response.data])
          }
          else if (symbol == 'DIS') {
            setDisData([response.data])
          }
          else if (symbol == 'MGM') {
            setMgmData([response.data])
          }
          else if (symbol == 'WYNN') {
            setWynnData([response.data])
          }
          
         
        }))
        
      },[]
        
      )
      
  
  return(
  <>
            
            
            
    {!!amc.length ? ( amc.map(option => (
      <Card className="stockInfo" variant="outlined"
        style={{backgroundColor: "#6d76f7", color: '#fff', borderRadius: '15px'}}>
          <i><strong>AMC Theatres</strong></i>
            <hr></hr>
            <i key={option.index}>
            {option.symbol}</i>
          <br></br>
            <i>Stock Price:{" "}
            ${option.underlyingPrice.toFixed(2)}</i>
          <br></br>
            <i> Cost for 100 shares: $
            {option.underlyingPrice.toFixed(0) * 100}</i>
          <br></br>
            <i>Bid Price: $
            {Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(
            option.callExpDateMap[entry]
            ).map((innerArrayID) =>
            option.callExpDateMap[entry][innerArrayID][0].bid.toFixed(2)
            );
            })}{" "}</i>
          <br></br>
            <i>Premium collected: $
            {Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(option.callExpDateMap[entry]).map(
            (innerArrayID) =>
            option.callExpDateMap[entry][innerArrayID][0].bid.toFixed(
            2) * 100
            );
            })}
            </i>
      </Card>
            ))
          ) : (
            <p>loading data...</p>
          )} 

  </>
        );

};


export default Amc;