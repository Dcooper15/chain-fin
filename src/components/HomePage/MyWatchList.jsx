import React from "react";
import {
  StyledWatchListHeader,
  StyledPlaceHolder,
  WatchListContainer,
} from "../Styles/styledElements";

const MyWatchList = () => {
  return (
    <>
      <WatchListContainer>
        <StyledWatchListHeader>My Watch List</StyledWatchListHeader>

        <StyledPlaceHolder>Watch List Coming Soon..</StyledPlaceHolder>
      </WatchListContainer>
    </>
  );
};

export default MyWatchList;
