import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card } from '@material-ui/core';
import Symbol from '../DataPoints/Symbol';
import StockPrice from '../DataPoints/StockPrice';
import HundredShares from '../DataPoints/HundredShares';
import BidPrice from '../DataPoints/BidPrice';
import PremiumCollected from '../DataPoints/PremiumCollected';
import OpenInterest from '../DataPoints/OpenInterest';
import Volatility from '../DataPoints/Volatility';
import DaysToExpiration from '../DataPoints/DaysToExpiration';

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
          <Link to={`/chain/${option.symbol}`} style={{ textDecoration: 'underline', color: '#38ecf2' }}>
            <Symbol option={option}/>
          </Link>
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


export default TechStocks;