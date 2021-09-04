import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router';
import { Card } from "@material-ui/core";
import Moment from "react-moment";

// import Symbol from '../DataPoints/Symbol';
// import StockPrice from '../DataPoints/StockPrice';
// import HundredShares from '../DataPoints/HundredShares';
// import BidPrice from '../DataPoints/BidPrice';
// import PremiumCollected from '../DataPoints/PremiumCollected';
// import OpenInterest from '../DataPoints/OpenInterest';
// import Volatility from '../DataPoints/Volatility';
// import DaysToExpiration from '../DataPoints/DaysToExpiration';

//working obj keys method
// axios.get(url
//     ).then((response) => {

//     console.log("full res, ", response);
//     console.log("keys ", Object.keys(response.data.callExpDateMap).map((entry) => {
//         return Object.keys(response.data.callExpDateMap[entry]).map(
//         (innerArrayID) =>
//         response.data.callExpDateMap[entry][innerArrayID][0].bid.toFixed(
//         2) * 100
//         );
//         })
//     );

//     }

//     )

//const moversurl = `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=AMC&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=${process.env.REACT_APP_MONTH}&toDate=${process.env.REACT_APP_DATE}&range=OTM`

const date = new Date();

function FullOptionChain() {
  const { symbol } = useParams()
  const [fullChain, setFullChainData] = useState([]);

  const dataArray = fullChain;
  console.log("dataarray, ", dataArray);

  useEffect(() => {
    axios
      .get(
        `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&contractType=CALL&strikeCount=3&fromDate=2021-09-03&toDate=2021-10-30`
      )
      .then((response) => {
        console.log("full res, ", response);
        const keys = Object.keys(response.data.callExpDateMap)
          .map((entry) => {
            return Object.keys(response.data.callExpDateMap[entry]).map(
              (innerArrayID) =>
                response.data.callExpDateMap[entry][innerArrayID]
            );
          })
          .flat();
        setFullChainData(keys);
      });
  
  }, []);

  return (
    <>
      
      {!!dataArray.length ? (
        dataArray.map((stock) =>
          stock.map((option) => (
            <Card
              className="stockInfo"
              variant="outlined"
              style={{
                backgroundColor: "#6d76f7",
                color: "#fff",
                borderRadius: "15px",
              }}
            >
              <i><strong>{option.description}</strong></i>
              <hr></hr>
              <i>Strike Price: {option.strikePrice}</i>
              <br></br>
              <i>Bid: {option.bid}</i>
              <br></br>
              <i>Ask: {option.ask}</i>
              <br></br>
              <i>
                Premium Collected: $
                {(((option.ask + option.bid) / 2) * 100).toFixed(2)}
              </i>
              <br></br>
              <i>Open Interest: {option.openInterest}</i>
              <br></br>
              <i>Volatility: {option.volatility}</i>
              <br></br>
              <i>Days to Expiration: {option.daysToExpiration}</i>
              <br></br>
              <>Expiration Date: </>
              <>
                <Moment add={{ days: option.daysToExpiration }} format="MMM DD">
                  {date}
                </Moment>
              </>
            </Card>
          ))
        )
      ) : (
        <p>loading data...</p>
      )}
      ;
    </>
  );
}

export default FullOptionChain;
