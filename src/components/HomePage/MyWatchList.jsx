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
        <StyledWatchListHeader>My Options Watch List</StyledWatchListHeader>

        <StyledPlaceHolder>Watch List Coming Soon..</StyledPlaceHolder>
      </WatchListContainer>
    </>
  );
};

export default MyWatchList;
