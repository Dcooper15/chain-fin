import React from "react";
import StrikeOneOtm from "./StrikeOneOtm";
import PercentChange from "./PercentChange";
import HundredShares from "./HundredShares";
import CspCollateral from './CspCollateral';
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

const MapDataPoints = ({ option, mapType }) => {
  return (
    <> 
      <br></br>
      <StrikeOneOtm option={option} mapType={mapType} />
      <PercentChange option={option} mapType={mapType} />
      <br></br>
      {mapType === 'call' ? 
      <HundredShares option={option} mapType={mapType} />
      :
     <CspCollateral option={option} mapType={mapType}/>
      }
      <i>Greeks</i>
      <BidPrice option={option} mapType={mapType} />
      <></>
      <Delta option={option} mapType={mapType} />
      <AskPrice option={option} mapType={mapType} />
      <></>
      <Theta option={option} mapType={mapType} />
      <PremiumCollected
        option={option}
        mapType={mapType}
      />
      <></>
      <Rho option={option} mapType={mapType} />
      <Volume option={option} mapType={mapType} />
      <></>
      <Gamma option={option} mapType={mapType} />
      <OpenInterest option={option} mapType={mapType} />
      <></>
      <Vega option={option} mapType={mapType} />

      <Volatility option={option} mapType={mapType} />
      <DaysToExpiration
        option={option}
        mapType={mapType}
      />
    </>
  );
};

export default MapDataPoints;
