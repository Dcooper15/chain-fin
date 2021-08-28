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

const travelArray = ['CCL', 'DAL', 'LUV', 'NCLH', 'UAL'];

function TravelStocks() {
    const [ccl, setCclData] = useState([]);
    const [dal, setDalData] = useState([]);
    const [luv, setLuvData] = useState([]);
    const [nclh, setNclhData] = useState([]);
    const [ual, setUalData] = useState([]);
 
    const dataArray = [ccl, dal, luv, nclh, ual];
    
    
      useEffect(() => {
        
       travelArray.map(symbol => 
        axios.get(`https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=${process.env.REACT_APP_MONTH}&toDate=${process.env.REACT_APP_DATE}&range=OTM` 
        ).then((response) => {
          if(symbol === 'CCL'){
            setCclData([response.data]);
          } else if (symbol === 'DAL') {
            setDalData([response.data])
          }
          else if (symbol === 'LUV') {
            setLuvData([response.data])
          }
          else if (symbol === 'NCLH') {
            setNclhData([response.data])
          }
          else if (symbol === 'UAL') {
            setUalData([response.data])
          }
          
         
        }))
        
      },[]
        
      )
      
  
  return(
    <>
    {!!dataArray.length ? ( dataArray.map(stock => stock.map(option => (
      <Card className="stockInfo" variant="outlined"
        style={{backgroundColor: "#6d76f7", color: '#fff', borderRadius: '15px'}}>
         <Symbol option={option} />
         <br></br>
         <StockPrice option={option} />
         <br></br>
         <HundredShares option={option} />
         <br></br>
         <BidPrice option={option} />
         <br></br>
         <PremiumCollected option={option} />
         <br></br>
         <OpenInterest option={option} />
         <br></br>
         <Volatility option={option} />
         <br></br>
         <DaysToExpiration option={option} />
      </Card>
            )))
          ) : (
            <p>loading data...</p>
          )} 
  </>
  );

};


export default TravelStocks;