import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import Name from "../DataPoints/Name";
import Symbol from "../DataPoints/Symbol";
import StockPrice from "../DataPoints/StockPrice";
import StrikeOneOtm from "../DataPoints/StrikeOneOtm";
// import PercentChange from "../DataPoints/PercentChange";
import HundredShares from "../DataPoints/HundredShares";
import BidPrice from "../DataPoints/BidPrice";
import PremiumCollected from "../DataPoints/PremiumCollected";
import OpenInterest from "../DataPoints/OpenInterest";
import Volume from "../DataPoints/Volume";
import Volatility from "../DataPoints/Volatility";
import Delta from "../DataPoints/Delta";
import Theta from "../DataPoints/Theta";
import Rho from "../DataPoints/Rho";
import Gamma from "../DataPoints/Gamma";
import Vega from "../DataPoints/Vega";
import DaysToExpiration from "../DataPoints/DaysToExpiration";

let symbolArray = [];

function SectorStocks() {
  const [namesRender, setNames] = useState([]);
  const [dataArray, setDataArray] = useState([]);
  const { sector } = useParams();

  let sectorError = [];
  switch (sector) {
    case "tech":
      symbolArray = ["AMD", "PINS", "SONY", "TWTR", "ZM"];
      break;
    case "entertainment":
      symbolArray = ["AMC", "ATVI", "DIS", "MGM", "WYNN"];
      break;
    case "travel":
      symbolArray = ["CCL", "DAL", "LUV", "NCLH", "UAL"];
      break;
    case "finance":
      symbolArray = ["AXP", "BAC", "C", "JPM", "WFC"];
      break;
    case "oil":
      symbolArray = ["PXD", "COP", "MPC", "OXY", "CVX", "XOM", "BP"];
      break;
    case "cannabis":
      symbolArray = ["CRON", "ACB", "TLRY", "HEXO", "SNDL", "IGC", "OGI"];
      break;
    case "pharmaceutics":
      symbolArray = ["JNJ", "PFE", "MRNA", "AZN", "AMGN", "BNTX", "SGEN"];
      break;
    case "energy":
      symbolArray = ["NEE", "FSLR", "SEDG", "PLUG", "BLNK", "ENPH", "SPWR"];
      break;
    default:
      sectorError = `No data to display for ${sector}.`;
  }

  const capHeader = (header) => {
    return header.charAt(0).toUpperCase() + header.slice(1);
  };

  useEffect(() => {
    const names = [];
    const chainData = [];
    try {
      symbolArray.map((symbol) =>
        axios
          .get(
            `https://api.tdameritrade.com/v1/instruments?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&projection=symbol-search`
          )
          .then((response) => {
            if (response.status === 200) {
              names.push(response.data);
            }
            const namesArray = names
              .map((symbolId) => Object.values(symbolId))
              .map((entryId) => Object.entries(entryId[0]))
              .flat();
            setNames([namesArray.flat()]);
          })
      );
    } catch (error) {
      console.log(error);
    }
    symbolArray.map((symbol) =>
      axios
        .get(
          `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${symbol}&contractType=CALL&strikeCount=1&optionType=CALL&expMonth=${process.env.REACT_APP_MONTH}&toDate=${process.env.REACT_APP_DATE}&range=OTM`
        )
        .then((response) => {
          console.log(response.data);
          chainData.push(response.data);

          setDataArray([chainData]);
        })
    );
  }, [sector]);

  return (
    <>
      {!!sectorError.length ? (
        <h2 className="sectorHeader">{capHeader(sectorError)}</h2>
      ) : (
        <h2 className="sectorHeader">
          {sector === "energy"
            ? "Alternative " + capHeader(sector)
            : capHeader(sector)}
        </h2>
      )}
      {!!dataArray.length ? (
        dataArray.map((stock) =>
          stock.map((option) => (
            <Card
              className="stockInfo"
              variant="outlined"
              raised="true"
              style={{
                backgroundColor: "#3D3D3D",
                borderColor: "#d4af37",
                color: "#fff",
                borderRadius: "15px",
              }}
            >
               <>
                {" "}
                <Link
                  to={`/chain/${option.symbol}`}
                  style={{ textDecoration: "none", color: "#d4af37" }}
                >
                  <Symbol option={option} />
                </Link>
              </> {" "}<StockPrice option={option} />
              <br></br>
              <Name option={option} namesRender={namesRender} /> <></>
              <hr></hr>
              <StrikeOneOtm option={option} />
              <br></br>
             
              <HundredShares option={option} />
              <></>
              <Delta option={option} />
              <BidPrice option={option} />
              <></>
              <Theta option={option} />
              <PremiumCollected option={option} />
              <></>
              <Rho option={option} />
              <OpenInterest option={option} />
              <></>
              <Gamma option={option} />
              <Volume option={option}/>
              <></>
              <Vega option={option} />
              <Volatility option={option} />
              <DaysToExpiration option={option} />
              
              
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

export default SectorStocks;
