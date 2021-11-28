import React, { useContext, useState } from "react";
import Moment from "react-moment";
import { ThemeContext } from "styled-components";
import { Card, Button } from "@material-ui/core";
import {
  IncStateContainer,
  IncStateHeader,
  IncStateValue,
  StyledIncStateYears,
} from "../../Styles/styledElements";
import { useStyles } from "../../Styles/muiStyles";

const InsiderTrading = ({ insiderTradingData, dataSelection, years }) => {
  const classes = useStyles();
  const theme = useContext(ThemeContext);
  const [insiderYear, setInsiderYear] = useState([]);
  console.log("data sel", dataSelection);
  console.log("yr", years);
 
  try {
    return (
      <>
         {!!years.length && dataSelection === "insider trades"
          ? years.map((year) => (
              <StyledIncStateYears>
                <Button
                  className={classes.buttonExp}
                  value={year}
                  size="small"
                  hidden={!dataSelection === "insider trades"}
                  onClick={() => setInsiderYear(year)}
                  style={{
                    background:
                      year === insiderYear
                        ? theme.name === "dark"
                          ? "black"
                          : "white"
                        : "none",
                    marginBottom: "0",
                  }}
                >
                  {year}
                </Button>
              </StyledIncStateYears>
            ))
          : ""}
        {!!insiderTradingData.length
          ? insiderTradingData.map((transaction) => (
              <Card
                className={classes.quoteCard}
                style={
                  theme.name === "dark"
                    ? {
                        backgroundColor: "#38372b",

                        color: "#ffebcd",
                      }
                    : {
                        backgroundColor: "#c9c9c9",

                        color: "#002933",
                      }
                }
                variant="outlined"
                hidden={insiderYear !== transaction.transactionDate.slice(0,4) ||
                  dataSelection !== "insider trades" 
                
                }
                raised={true}
              >
                <IncStateContainer>
                  <IncStateHeader>Transaction Date</IncStateHeader>
                  <IncStateValue>
                    {transaction.transactionDate == null ? (
                      "N/A"
                    ) : (
                      <Moment format="ll">{transaction.transactionDate}</Moment>
                    )}
                  </IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Filing Date</IncStateHeader>
                  <IncStateValue>
                    {transaction.filingDate == null ? (
                      "N/A"
                    ) : (
                      <Moment format="ll">
                        {transaction.filingDate.slice(
                          0,
                          transaction.filingDate.indexOf(" ")
                        )}
                      </Moment>
                    )}
                  </IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Acquisition or Diposition</IncStateHeader>
                  <IncStateValue>
                    {transaction.acquistionOrDisposition}
                  </IncStateValue>
                </IncStateContainer>

                <IncStateContainer>
                  <IncStateHeader>Transaction Type</IncStateHeader>
                  <IncStateValue>{transaction.transactionType}</IncStateValue>
                </IncStateContainer>

                <IncStateContainer>
                  <IncStateHeader>Security Type</IncStateHeader>
                  <IncStateValue>{transaction.securityName}</IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Price</IncStateHeader>
                  <IncStateValue>${transaction.price}</IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Insider Name</IncStateHeader>
                  <IncStateValue>{transaction.reportingName}</IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Securities Owned</IncStateHeader>
                  <IncStateValue>{transaction.securitiesOwned}</IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Securities Transacted</IncStateHeader>
                  <IncStateValue>
                    {transaction.securitiesTransacted}
                  </IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Type of Owner</IncStateHeader>
                  <IncStateValue>{transaction.typeOfOwner}</IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Form Type</IncStateHeader>
                  <IncStateValue>{transaction.formType}</IncStateValue>
                </IncStateContainer>
                {/* <IncStateContainer>
                  <IncStateHeader>Link</IncStateHeader>
                  <IncStateValue>{transaction.link}</IncStateValue>
                </IncStateContainer> */}
              </Card>
            ))
          : "No Insider Trades Available"}
      </>
    );
  } catch (err) {
    return <>N/A</>;
  }
};

export default InsiderTrading;
