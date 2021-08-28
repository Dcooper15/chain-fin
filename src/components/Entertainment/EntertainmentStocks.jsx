import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '@material-ui/core';
import Symbol from '../DataPoints/Symbol';
import StockPrice from '../DataPoints/StockPrice';
import HundredShares from '../DataPoints/HundredShares';
import BidPrice from '../DataPoints/BidPrice';
import PremiumCollected from '../DataPoints/PremiumCollected';
import OpenInterest from '../DataPoints/OpenInterest';
import Volatility from '../DataPoints/Volatility';
import DaysToExpiration from '../DataPoints/DaysToExpiration';



//const url = `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=AMC&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=${process.env.REACT_APP_MONTH}&toDate=${process.env.REACT_APP_DATE}&range=OTM` 
const entArray = ['AMC', 'T', 'DIS', 'MGM', 'WYNN'];

function EntertainmentStocks() {
    const [amc, setAmcData] = useState([]);
    const [t, setTData] = useState([]);
    const [dis, setDisData] = useState([]);
    const [mgm, setMgmData] = useState([]);
    const [wynn, setWynnData] = useState([]);
 
    const dataArray = [amc, t, dis, mgm, wynn];
    
    
      useEffect(() => {
        
       entArray.map(symbol => 
        axios.get(`https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=${process.env.REACT_APP_MONTH}&toDate=${process.env.REACT_APP_DATE}&range=OTM` 
        ).then((response) => {
          if(symbol === 'AMC'){
            setAmcData([response.data]);
          } else if (symbol === 'T') {
            setTData([response.data])
          }
          else if (symbol === 'DIS') {
            setDisData([response.data])
          }
          else if (symbol === 'MGM') {
            setMgmData([response.data])
          }
          else if (symbol === 'WYNN') {
            setWynnData([response.data])
          }
          
         
        }))
        
      },[]
        
      );



     
      
  
  return(
  <>
    {!!dataArray.length ? ( dataArray.map(stock => stock.map(option => (
      <Card className="stockInfo" variant="outlined"
        style={{backgroundColor: "#6d76f7", color: '#fff', borderRadius: '15px'}}>
          {/* <i><strong>{name}</strong></i> */}
            {/* <hr></hr> */}
            <Symbol option={option}/>
            {/* <i key={1}>
           <strong>{option.DataSymbol}</strong></i> */}
           <br></br>
           <StockPrice option={option}/>
            {/* <i key={2}>Stock Price:{" "}
            ${option.underlyingPrice.toFixed(2)}</i> */}
          <br></br>
          <HundredShares option={option}/>
            {/* <i key={3}> Cost for 100 shares: $
            {option.underlyingPrice.toFixed(2) * 100}</i> */}
          <br></br>
          <BidPrice option={option}/>
            {/* <i key={4}>Bid Price: $
            {Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(
            option.callExpDateMap[entry]
            ).map((innerArrayID) =>
            option.callExpDateMap[entry][innerArrayID][0].bid.toFixed(2)
            );
            })}{" "}</i> */}
          <br></br>
          <PremiumCollected option={option}/>
            {/* <i key={5}>Premium collected: $
            {Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(option.callExpDateMap[entry]).map(
            (innerArrayID) =>
            option.callExpDateMap[entry][innerArrayID][0].bid.toFixed(
            2) * 100
            );
            })}
            </i> */}
            <br></br>
            <OpenInterest option={option}/>
            {/* <i key={6}>Open Interest:{' '}
            {Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(option.callExpDateMap[entry]).map(
            (innerArrayID) =>
            option.callExpDateMap[entry][innerArrayID][0].openInterest
          
            );
            })}
            </i> */}
            <br></br>
            <Volatility option={option}/>
            {/* <i key={7}>
            Volatility:{' '}
            {Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(option.callExpDateMap[entry]).map(
            (innerArrayID) =>
            option.callExpDateMap[entry][innerArrayID][0].volatility.toFixed(2)
          
            );
            })}
            </i> */}
            <br></br>
            <DaysToExpiration option={option}/>
            {/* <i key={8}>
            Days to Expiration:{' '}
            {Object.keys(option.callExpDateMap).map((entry) => {
            return Object.keys(option.callExpDateMap[entry]).map(
            (innerArrayID) =>
            option.callExpDateMap[entry][innerArrayID][0].daysToExpiration
          
            );
            })}
            </i> */}
      </Card>
            )))
          ) : (
            <p>loading data...</p>
    )}; 

  </>
  );

};


export default EntertainmentStocks;