import React from "react";
// import {
//   DataContainer,
//   DataHeader,
//   DataComponent,
// } from "../Styles/styledElements";
// import Name from "./Name";
// import Symbol from "./Symbol";
// import StockPrice from "./StockPrice";
import StrikeOneOtm from "./StrikeOneOtm";
import PercentChange from "./PercentChange";
import HundredShares from "./HundredShares";
import BidPrice from "./BidPrice";
import AskPrice from "./AskPrice";
import PremiumCollected from "./PremiumCollected";
import OpenInterest from "./OpenInterest";
import Volume from "./Volume";
import Volatility from "./Volatility";
import Delta from "./Delta";
import Theta from "./Theta";
import Rho from "./Rho";
import Gamma from "./Gamma";
import Vega from "./Vega";
import DaysToExpiration from "./DaysToExpiration";

const MapDataPoints = ({ option, chainType, mapType }) => {
  return (
    <>
      <StrikeOneOtm option={option} chainType={chainType} mapType={mapType} />
      <></>
      <PercentChange option={option} chainType={chainType} mapType={mapType} />
      <br></br>
      <HundredShares option={option} chainType={chainType} mapType={mapType} />
      <i>Greeks</i>
      <BidPrice option={option} chainType={chainType} mapType={mapType} />
      <></>
      <Delta option={option} chainType={chainType} mapType={mapType} />
      <AskPrice option={option} chainType={chainType} mapType={mapType} />
      <></>
      <Theta option={option} chainType={chainType} mapType={mapType} />
      <PremiumCollected
        option={option}
        chainType={chainType}
        mapType={mapType}
      />
      <></>
      <Rho option={option} chainType={chainType} mapType={mapType} />
      <Volume option={option} chainType={chainType} mapType={mapType} />
      <></>
      <Gamma option={option} chainType={chainType} mapType={mapType} />
      <OpenInterest option={option} chainType={chainType} mapType={mapType} />
      <></>
      <Vega option={option} chainType={chainType} mapType={mapType} />

      <Volatility option={option} chainType={chainType} mapType={mapType} />
      <DaysToExpiration
        option={option}
        chainType={chainType}
        mapType={mapType}
      />
    </>
  );
};

export default MapDataPoints;
