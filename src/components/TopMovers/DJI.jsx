// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Card } from '@material-ui/core';
// import Symbol from '../DataPoints/Symbol';
// import StockPrice from '../DataPoints/StockPrice';
// import HundredShares from '../DataPoints/HundredShares';
// import BidPrice from '../DataPoints/BidPrice';
// import PremiumCollected from '../DataPoints/PremiumCollected';
// import OpenInterest from '../DataPoints/OpenInterest';
// import Volatility from '../DataPoints/Volatility';
// import DaysToExpiration from '../DataPoints/DaysToExpiration';

// function callDJI() {
//     axios.get(`https://api.tdameritrade.com/v1/marketdata/$SPX.X/movers?apikey=M74VSIZFEUQQ8NLQJ7KRUGGJRYA2YCNQ&direction=up&change=percent`).then((response) => {
//     const djiData = [response.data[0].symbol,
//         response.data[1].symbol, response.data[2].symbol, response.data[3].symbol, response.data[4].symbol, response.data[5].symbol, response.data[6].symbol, response.data[7].symbol, response.data[8].symbol,response.data[9].symbol];
//         console.log("Djidata is ", djiData);
        
//       });
      
  
//     };


// //     const finArray = ['AXP', 'BAC', 'C', 'JPM', 'WFC'];

// function DJI() {
//     const [index1, setIndex1] = useState([]);
//     const [index2, setIndex2] = useState([]);
//     const [index3, setIndex3] = useState([]);
//     const [index4, setIndex4] = useState([]);
//     const [index5, setIndex5] = useState([]);
//     const [index6, setIndex6] = useState([]);
//     const [index7, setIndex7] = useState([]);
//     const [index8, setIndex8] = useState([]);
//     const [index9, setIndex9] = useState([]);
//     const [index10, setIndex10] = useState([]);
//     // const [axp, setAxpData] = useState([]);
//     // const [bac, setBacData] = useState([]);
//     // const [c, setCData] = useState([]);
//     // const [jpm, setJpmData] = useState([]);
//     // const [wfc, setWfcData] = useState([]);
   

//     // const dataArray = [axp, bac, c, jpm, wfc];
//     const dataArray = [index1, index2, index3, index4, index5, index6, index7, index8, index9, index10];
    
//     useEffect(() => {
//         axios.get(`https://api.tdameritrade.com/v1/marketdata/$SPX.X/movers?apikey=M74VSIZFEUQQ8NLQJ7KRUGGJRYA2YCNQ&direction=up&change=percent`).then((response) => {
//             const responseData = [response.data[0].symbol,
//                 response.data[1].symbol, response.data[2].symbol, response.data[3].symbol, response.data[4].symbol, response.data[5].symbol, response.data[6].symbol, response.data[7].symbol, response.data[8].symbol,response.data[9].symbol]
              
//         }).then((response).map(symbol, index => 
//         axios.get(`https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=${process.env.REACT_APP_MONTH}&toDate=${process.env.REACT_APP_DATE}&range=OTM` 
//       ).then((response) => {
//             // if(symbol === 'AXP'){
//             //     setAxpData([response.data]);
//             //   } else if (symbol === 'BAC') {
//             //     setBacData([response.data])
//             //   }
//             //   else if (symbol === 'C') {
//             //     setCData([response.data])
//             //   }
//             //   else if (symbol === 'JPM') {
//             //     setJpmData([response.data])
//             //   }
//             //   else if (symbol === 'WFC') {
//             //     setWfcData([response.data])
//             //   }
//           if(index === 1){
//             setIndex1([response.data])
//           } else if (index === 2) {
//             setIndex2([response.data])
//           }
//           else if (index === 3) {
//             setIndex3([response.data])
//           }
//           else if (index === 4) {
//             setIndex4([response.data])
//           }
//           else if (index === 5) {
//             setIndex5([response.data])
//           }
//           else if (index === 5) {
//             setIndex5([response.data])
//           }
//           else if (index === 6) {
//             setIndex6([response.data])
//           }
//           else if (index === 7) {
//             setIndex7([response.data])
//           }
//           else if (index === 8) {
//             setIndex8([response.data])
//           }
//           else if (index === 9) {
//             setIndex9([response.data])
//           }
//           else if (index === 10) {
//             setIndex10([response.data])
//           }
//         })
        
//         },[]
//     )
      
  
//   return(
//   <>
            
//     {!!dataArray.length ? ( dataArray.map(stock => stock.map(option => (
//       <Card className="stockInfo" variant="outlined"
//         style={{backgroundColor: "#6d76f7", color: '#fff', borderRadius: '15px'}}>
//          <Symbol option={option} />
//          <br></br>
//          <StockPrice option={option} />
//          <br></br>
//          <HundredShares option={option} />
//          <br></br>
//          <BidPrice option={option} />
//          <br></br>
//          <PremiumCollected option={option} />
//          <br></br>
//          <OpenInterest option={option} />
//          <br></br>
//          <Volatility option={option} />
//          <br></br>
//          <DaysToExpiration option={option} />
//       </Card>
//             )))
//           ) : (
//             <p>loading data...</p>
//           )} 
//   </>
//   );
// };


// export default DJI;