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


export default FinanceStocks;