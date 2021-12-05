import React, { useState, useEffect, useContext, useRef } from "react";
import { ThemeContext } from "styled-components";
//import { useStyles } from "../Styles/muiStyles";
import axios from "axios";
import Moment from "react-moment";
import { Card } from "@material-ui/core";
import MapDataPoints from "../DataPoints/MapDataPoints";
import MapCardHeader from "../DataPoints/MapCardHeader";

const date = new Date();
const ResearchSearch = ({ submittedText }) => {
  //const classes = useStyles();
  const theme = useContext(ThemeContext);
  const isMounted = useRef(false);
  const [chainData, setChainData] = useState([]);
  const [chainError, setChainError] = useState([]);
  //console.log("err is", chainError);
  //console.log("submitted text", submittedText);
  //console.log("chain data", chainData);

  useEffect(() => {
    if(isMounted.current) {
    axios
      .get(
        `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.REACT_APP_GITHUB_CLIENT_ID}&symbol=${submittedText}&contractType=ALL&strikeCount=2&includeQuotes=TRUE&toDate=${process.env.REACT_APP_DATE}&range=OTM`
      )
      .then((response) => {
        response.data.status === "FAILED"
          ? setChainError(["error"])
          : setChainData([response.data]);
      }) }
      else {
        isMounted.current = true;
      }
  }, [submittedText]);

  return (
    <div>
      {chainError === "error" ? (
        <i style={{ color: "#d4af37" }}>{chainError}</i>
      ) : !!chainData.length ? (
        chainData.map((option) => (
          <Card
            className="stockInfo"
            style={
              theme.name === "dark"
                ? {
                    backgroundColor: "#3D3D3D",
                    borderColor: "#d4af37",
                    color: "#ffebcd",
                  }
                : {
                    backgroundColor: "#ebebeb",
                    borderColor: "#00afc9",
                    color: "#002933",
                  }
            }
            variant="outlined"
            //hidden={handleTypeChange === true}
            raised={true}
          >
            {" "}
            <MapCardHeader option={option} />
            <MapDataPoints option={option} mapType={"call"} />
            <>
              <>Exp Date </>
              <Moment
                add={{
                  days: Object.keys(option.callExpDateMap).map((entry) => {
                    return Object.keys(option.callExpDateMap[entry]).map(
                      (innerArrayID) =>
                        option.callExpDateMap[entry][innerArrayID][0]
                          .daysToExpiration
                    );
                  })[0][1],
                }}
                format="MMM DD"
              >
                {date}
              </Moment>
            </>
          </Card>
        ))
      ) : (
        ""
      )}
    </div>
  );
};

export default ResearchSearch;
