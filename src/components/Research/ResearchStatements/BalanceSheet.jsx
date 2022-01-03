import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import { ThemeContext } from "styled-components";
import { Card, Button } from "@material-ui/core";
import {
  IncStateContainer,
  IncStateHeader,
  IncStateValue,
  //StyledResearchBalanceYears,
  StyledIncStateYears,
} from "../../Styles/styledElements";
import { useStyles } from "../../Styles/muiStyles";

const addCommas = /\B(?=(\d{3})+(?!\d))/g;

const BalanceSheet = ({ submittedText, dataSelection }) => {
  const classes = useStyles();
  const theme = useContext(ThemeContext);
  const isMounted = useRef(false);
  const [balYear, setBalYear] = useState([]);
  const [balanceSheetData, setBalanceSheetData] = useState([]);
  const [balanceSheetYears, setBalanceSheetYears] = useState([]);

  const getStatementVal = (value) => {
    if (value === null) {
      return "N/A";
    } else {
      return "$" + value.toString().replace(addCommas, ",");
    }
  };
  useEffect(() => {
    if (isMounted.current) {
      axios
        .get(
          `https://${process.env.REACT_APP_HUB_URL}/api/v3/balance-sheet-statement/${submittedText}?limit=10&apikey=${process.env.REACT_APP_FM_CLIENT_ID}`
        )
        .then((response) => {
          setBalanceSheetData(response.data);

          setBalanceSheetYears(
            response.data.map((years) => years.calendarYear)
          );
          setBalYear([]);
        });
    } else {
      isMounted.current = true;
    }
  }, [submittedText]);

  //   try {
  return (
    <>
      {!!balanceSheetYears.length && dataSelection === "balance sheet"
        ? balanceSheetYears.map((year) => (
            <StyledIncStateYears>
              <Button
                className={classes.buttonExp}
                value={year}
                size="small"
                hidden={!dataSelection === "balance sheet"}
                onClick={() => setBalYear(year)}
                style={{
                  background:
                    year === balYear
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
      {!!balanceSheetData.length
        ? balanceSheetData.map((statement) => (
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
              hidden={
                balYear !== statement.calendarYear ||
                dataSelection !== "balance sheet"
              }
              raised={true}
            >
              <IncStateContainer>
                <IncStateHeader>Year</IncStateHeader>
                <IncStateValue>{statement.calendarYear}</IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Filing Date</IncStateHeader>
                <IncStateValue>{statement.fillingDate}</IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Cash & Cash Equivalents</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.cashAndCashEquivalents)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Short Term Investments</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.shortTermInvestments)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Net Receivables</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.netReceivables)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Inventory</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.inventory)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Other Current Assets</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.otherCurrentAssets)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Total Current Assets</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.totalCurrentAssets)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Property Plant Equipment Net</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.propertyPlantEquipmentNet)}
                </IncStateValue>
              </IncStateContainer>

              <IncStateContainer>
                <IncStateHeader>Goodwill</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.goodwill)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Intangible Assets</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.intangibleAssets)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Long Term Investments</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.longTermInvestments)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Tax Assets</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.taxAssets)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Other Non-current Assets</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.otherNonCurrentAssets)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Total Non-current Assets</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.totalNonCurrentAssets)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Other Assets</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.otherAssets)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Total Assets</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.totalAssets)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Account Payables</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.accountPayables)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Short Term Debt</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.shortTermDebt)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Tax Payables</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.taxPayables)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Deferred Revenue</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.deferredRevenue)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Other Current Liabilities</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.otherCurrentLiabilities)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Total Current Liabilities</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.totalCurrentLiabilities)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Long Term Debt</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.longTermDebt)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Deferred Revenue (Non-current)</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.deferredRevenueNonCurrent)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>
                  Deferred Tax Liabilities (Non-current)
                </IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.deferredTaxLiabilitiesNonCurrent)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Other Non-current Liabilities</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.otherNonCurrentLiabilities)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Total Non Current Liabilities</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.totalNonCurrentLiabilities)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Other Liabilities</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.otherLiabilities)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Capital Lease Obligations</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.capitalLeaseObligations)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Total Liabilities</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.totalLiabilities)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Preferred Stock</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.preferredStock)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Common Stock</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.commonStock)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Retained Earnings</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.retainedEarnings)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>
                  Accum. Other Comprehensive Income Loss
                </IncStateHeader>
                <IncStateValue>
                  {getStatementVal(
                    statement.accumulatedOtherComprehensiveIncomeLoss
                  )}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Other Total Stockholders Equity</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.othertotalStockholdersEquity)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Total Stockholders Equity</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.totalStockholdersEquity)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>
                  Total Liabilities and Stockholders Equity
                </IncStateHeader>
                <IncStateValue>
                  {getStatementVal(
                    statement.totalLiabilitiesAndStockholdersEquity
                  )}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Retained Earnings</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.retainedEarnings)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Minority Interest</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.minorityInterest)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Total Equity</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.totalEquity)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>
                  Total Liabilities and Total Equity
                </IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.totalLiabilitiesAndTotalEquity)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Total Investments</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.totalInvestments)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Total Debt</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.totalDebt)}
                </IncStateValue>
              </IncStateContainer>
              <IncStateContainer>
                <IncStateHeader>Net Debt</IncStateHeader>
                <IncStateValue>
                  {getStatementVal(statement.netDebt)}
                </IncStateValue>
              </IncStateContainer>
            </Card>
          ))
        : ""}
    </>
  );
  //   } catch (err) {
  //     return <>N/A</>;
  //   }
};

export default BalanceSheet;
