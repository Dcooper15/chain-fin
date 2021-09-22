import React from "react";
import {
  DataContainer,
  DataHeader,
  DataComponent,
  DataGreekContainer,
  DataGreekHeader,
  GreekDataComponent,
} from "../Styles/styledElements";

const MapFullChainData = ({ option }) => {
  return (
    <>
      <DataContainer>
        
        <DataHeader>Strike</DataHeader>

        <DataComponent>{option.strikePrice}</DataComponent>
      </DataContainer>

      <i>Greeks</i>
      <DataContainer>
        <DataHeader>Bid</DataHeader>

        <DataComponent>{option.bid.toFixed(2)}</DataComponent>
      </DataContainer>
      <DataGreekContainer>
        <DataGreekHeader>Delta</DataGreekHeader>

        <GreekDataComponent>
          {option.delta === "NaN" ? "N/A" : option.delta}
        </GreekDataComponent>
      </DataGreekContainer>

      <DataContainer>
        <DataHeader>Ask</DataHeader>

        <DataComponent>{option.ask.toFixed(2)}</DataComponent>
      </DataContainer>
      <DataGreekContainer>
        <DataGreekHeader>Theta</DataGreekHeader>

        <GreekDataComponent>
          {option.theta === "NaN" ? "N/A" : option.theta}
        </GreekDataComponent>
      </DataGreekContainer>
      <DataContainer>
        <DataHeader>Premium</DataHeader>

        <DataComponent>${(option.mark * 100).toFixed(2)}</DataComponent>
      </DataContainer>
      <DataGreekContainer>
        <DataGreekHeader>Rho</DataGreekHeader>

        <GreekDataComponent>
          {option.rho === "NaN" ? "N/A" : option.rho}
        </GreekDataComponent>
      </DataGreekContainer>
      <DataContainer>
        <DataHeader>Open Interest</DataHeader>

        <DataComponent>{option.openInterest}</DataComponent>
      </DataContainer>
      <DataGreekContainer>
        <DataGreekHeader>Gamma</DataGreekHeader>

        <GreekDataComponent>
          {option.gamma === "NaN" ? "N/A" : option.gamma}
        </GreekDataComponent>
      </DataGreekContainer>
      <DataContainer>
        <DataHeader>Volume</DataHeader>

        <DataComponent>{option.totalVolume}</DataComponent>
      </DataContainer>
      <DataGreekContainer>
        <DataGreekHeader>Vega</DataGreekHeader>

        <GreekDataComponent>
          {option.vega === "NaN" ? "N/A" : option.vega}
        </GreekDataComponent>
      </DataGreekContainer>
      <DataContainer>
        <DataHeader>Implied Volatility</DataHeader>

        <DataComponent>{option.volatility}</DataComponent>
      </DataContainer>
      <DataContainer>
        <DataHeader>Days/Exp</DataHeader>

        <DataComponent>{option.daysToExpiration}</DataComponent>
      </DataContainer>
    </>
  );
};

export default MapFullChainData;
