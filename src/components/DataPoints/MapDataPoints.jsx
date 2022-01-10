import React from "react";
import StrikeOneOtm from "./StrikeOneOtm";
import PercentChange from "./PercentChange";
import HundredShares from "./HundredShares";
import CspCollateral from './CspCollateral';
import DataValueFixed from "./DataValueFixed";
import DataValueUnfixed from "./DataValueUnfixed";
import GreekDataValue from "./GreekDataValue";

const MapDataPoints = ({ option, mapType }) => {
  return (
    <> 
      <br></br>
      <StrikeOneOtm option={option} mapType={mapType} />
      <PercentChange option={option} mapType={mapType} />
      <br></br>
      {mapType === 'call' ? 
      <HundredShares option={option} />
      :
     <CspCollateral option={option} />
      }
      <i>Greeks</i>
      <DataValueFixed
        option={option}
        mapType={mapType}
        objectValue={"bid"}
        header={"Bid"}
        multiplyBy={1}
      />
      <></>
      <GreekDataValue option={option} mapType={mapType} objectValue={"delta"} header={"Delta"}/>
      <DataValueFixed
        option={option}
        mapType={mapType}
        objectValue={"ask"}
        header={"Ask"}
        multiplyBy={1}
      />
      <></>
      <GreekDataValue option={option} mapType={mapType} objectValue={"theta"} header={"Theta"}/>
      <DataValueFixed
        option={option}
        mapType={mapType}
        objectValue={"mark"}
        header={"Premium"}
        multiplyBy={100}
        dollarSign={"$"}
      />
      <></>
      <GreekDataValue option={option} mapType={mapType} objectValue={"rho"} header={"Rho"}/>
      <DataValueUnfixed
        option={option}
        mapType={mapType}
        objectValue={"totalVolume"}
        header={"Volume"}
   
    
      />
      <></>
      <GreekDataValue option={option} mapType={mapType} objectValue={"gamma"} header={"Gamma"}/>
      <DataValueUnfixed
        option={option}
        mapType={mapType}
        objectValue={"openInterest"}
        header={"Open Interest"}
   
    
      />
      <></>
      <GreekDataValue option={option} mapType={mapType} objectValue={"vega"} header={"Vega"}/>

      <DataValueUnfixed
        option={option}
        mapType={mapType}
        objectValue={"volatility"}
        header={"Implied Volatility"}
   
    
      />
      <DataValueUnfixed
        option={option}
        mapType={mapType}
        objectValue={"daysToExpiration"}
        header={"Days/Exp"}
   
    
      />
    </>
  );
};

export default MapDataPoints;
