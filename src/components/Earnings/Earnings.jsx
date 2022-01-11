import React, { useState, useEffect } from "react";

import axios from "axios";

import {
  EarningsPageContainer,
  StyledEarningsHeader,
  StyledEarningsRowItem,
} from "../Styles/styledElements";

import Card from "./Card";
import { FixedSizeList } from "react-window";
import { useCallback } from "react";

const Earnings = () => {
  const [earningsData, setEarningsData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://${process.env.REACT_APP_HUB_URL}/api/v3/earning_calendar?apikey=${process.env.REACT_APP_FM_CLIENT_ID}`
      )
      .then((response) => {
        console.log("earnings", response.data);
        setEarningsData(response.data);
      });
  }, []);

  const Row = useCallback(
    ({ index, style }) => {
      const { symbol, date, epsEstimated, time } = earningsData[index] || {};
      return (
        <div style={style}>
          <Card
            symbol={symbol}
            key={symbol}
            date={date}
            epsEstimated={epsEstimated}
            time={time}
          />
        </div>
      );
    },
    [earningsData]
  );

  return (
    <EarningsPageContainer>
      <StyledEarningsHeader>
        <StyledEarningsRowItem>Symbol</StyledEarningsRowItem>
        <StyledEarningsRowItem>Date</StyledEarningsRowItem>
        <StyledEarningsRowItem>Time</StyledEarningsRowItem>
        <StyledEarningsRowItem>Est. Eps</StyledEarningsRowItem>
      </StyledEarningsHeader>
      <FixedSizeList
        height={400}
        width={"100%"}
        itemSize={40}
        itemCount={earningsData.length}
      >
        {Row}
      </FixedSizeList>
    </EarningsPageContainer>
  );
};

export default Earnings;
