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

// const url = `https://api.tdameritrade.com/v1/marketdata/$SPX.X/movers?apikey=M74VSIZFEUQQ8NLQJ7KRUGGJRYA2YCNQ&direction=up&change=percent`

//using Mock data now because api returns empty array on weekends
const djiMovers = [
    {
        "change": 1,
        "description": "string",
        "direction": "'up' or 'down'",
        "last": 0,
        "symbol": "BAC",
        "totalVolume": 0
      },
      {
        "change": 2,
        "description": "string",
        "direction": "'up' or 'down'",
        "last": 3,
        "symbol": "WFC",
        "totalVolume": 0
      },
      {
        "change": 3,
        "description": "string",
        "direction": "'up' or 'down'",
        "last": 3,
        "symbol": "C",
        "totalVolume": 0
      },
      {
        "change": 4,
        "description": "string",
        "direction": "'up' or 'down'",
        "last": 0,
        "symbol": "NOK",
        "totalVolume": 0
      },
      {
        "change": 5,
        "description": "ACB",
        "direction": "'up' or 'down'",
        "last": 0,
        "symbol": "RKT",
        "totalVolume": 0
      },
      {
        "change": 6,
        "description": "string",
        "direction": "'up' or 'down'",
        "last": 0,
        "symbol": "PLTR",
        "totalVolume": 0
      },
      {
        "change": 7,
        "description": "string",
        "direction": "'up' or 'down'",
        "last": 0,
        "symbol": "AAPL",
        "totalVolume": 0
      },
      {
        "change": 8,
        "description": "string",
        "direction": "'up' or 'down'",
        "last": 0,
        "symbol": "ORPH",
        "totalVolume": 0
      },
      {
        "change": 9,
        "description": "string",
        "direction": "'up' or 'down'",
        "last": 0,
        "symbol": "ATOS",
        "totalVolume": 0
      },
      {
        "change": 10,
        "description": "string",
        "direction": "'up' or 'down'",
        "last": 0,
        "symbol": "AXP",
        "totalVolume": 0
      }
      
];
const djiMoversArray = djiMovers.map(djiSymbol => djiSymbol.symbol );


function DJI() {
    const [djiData, setDjiData] = useState([]);
    //console.log("dji Datas is" , djiDatas)
 
    useEffect(() => {
        const djiDataArray = [];

        djiMoversArray.map(symbol => 
            axios.get(`https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=${process.env.REACT_APP_MONTH}&toDate=${process.env.REACT_APP_DATE}&range=OTM` 
            ).then((response) => {
                djiDataArray.push(response.data)
                setDjiData([djiDataArray])
    }))
        
},[]
);
      
  
  return(
  <>
            
    {!!djiData.length ? ( djiData.map(stock => stock.map(option => (
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


export default DJI;