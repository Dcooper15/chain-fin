import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import { ThemeContext } from "styled-components";
import { Card, Button } from "@material-ui/core";
import {
  IncStateContainer,
  IncStateHeader,
  IncStateValue,
  StyledIncStateYears,
} from "../../Styles/styledElements";
import { useStyles } from "../../Styles/muiStyles";

const addCommas = /\B(?=(\d{3})+(?!\d))/g;

const ResearchIncomeStatement = ({
  submittedText,
  dataSelection
}) => {
  const classes = useStyles();
  const theme = useContext(ThemeContext);
  const isMounted = useRef(false);
  const [incYear, setIncYear] = useState([]);
  const [incStatementData, setIncStatementData] = useState([]);
  const [incStatementYears, setIncStatementYears] = useState([]);


  useEffect(() => {
    if (isMounted.current) {
        axios
        .get(
          `https://${process.env.REACT_APP_HUB_URL}/api/v3/income-statement/${submittedText}?limit=10&apikey=${process.env.REACT_APP_FM_CLIENT_ID}`
        )
        .then((response) => {
          setIncStatementData(response.data);
          setIncStatementYears(response.data.map((years) => years.calendarYear));
          setIncYear([]);
        });
    } else {
      isMounted.current = true;
    }
  }, [submittedText]);



  try {
    return (
      <>
        {!!incStatementYears.length && dataSelection === "income statement"
          ? incStatementYears.map((year) => (
              <StyledIncStateYears>
                <Button
                  className={classes.buttonExp}
                  value={year}
                  size="small"
                  hidden={!dataSelection === "income statement"}
                  onClick={() => setIncYear(year)}
                  style={{
                    background:
                      year === incYear
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
        {!!incStatementData.length
          ? incStatementData.map((statement) => (
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
                  incYear !== statement.calendarYear ||
                  dataSelection !== "income statement"
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
                  <IncStateHeader>Revenue</IncStateHeader>
                  <IncStateValue>
                    ${statement.revenue.toString().replace(addCommas, ",")}
                  </IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Cost and Expenses</IncStateHeader>
                  <IncStateValue>
                    $
                    {statement.costAndExpenses
                      .toString()
                      .replace(addCommas, ",")}
                  </IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Cost of Revenue</IncStateHeader>
                  <IncStateValue>
                    $
                    {statement.costOfRevenue.toString().replace(addCommas, ",")}
                  </IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Depreciation and Amortization</IncStateHeader>
                  <IncStateValue>
                    $
                    {statement.depreciationAndAmortization
                      .toString()
                      .replace(addCommas, ",")}
                  </IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>
                    General and Administrative Expenses
                  </IncStateHeader>
                  <IncStateValue>
                    $
                    {statement.generalAndAdministrativeExpenses
                      .toString()
                      .replace(addCommas, ",")}
                  </IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>
                    Research and Development Expenses
                  </IncStateHeader>
                  <IncStateValue>
                    $
                    {statement.researchAndDevelopmentExpenses
                      .toString()
                      .replace(addCommas, ",")}
                  </IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>
                    Selling and Marketing Expenses
                  </IncStateHeader>
                  <IncStateValue>
                    $
                    {statement.sellingAndMarketingExpenses
                      .toString()
                      .replace(addCommas, ",")}
                  </IncStateValue>
                </IncStateContainer>

                <IncStateContainer>
                  <IncStateHeader>Other Expenses</IncStateHeader>
                  <IncStateValue>
                    $
                    {statement.otherExpenses.toString().replace(addCommas, ",")}
                  </IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Operating Expenses</IncStateHeader>
                  <IncStateValue>
                    $
                    {statement.operatingExpenses
                      .toString()
                      .replace(addCommas, ",")}
                  </IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Operating Income</IncStateHeader>
                  <IncStateValue>
                    $
                    {statement.operatingIncome
                      .toString()
                      .replace(addCommas, ",")}
                  </IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Operating Income Ratio</IncStateHeader>
                  <IncStateValue>
                    {statement.operatingIncomeRatio == null
                      ? "N/A"
                      : statement.operatingIncomeRatio.toFixed(5)}
                  </IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>EBITDA</IncStateHeader>
                  <IncStateValue>
                    ${statement.ebitda.toString().replace(addCommas, ",")}
                  </IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>EBITDA Ratio</IncStateHeader>
                  <IncStateValue>
                    {statement.ebitdaratio == null
                      ? "N/A"
                      : statement.ebitdaratio.toFixed(5)}
                  </IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Income Before Taxes</IncStateHeader>
                  <IncStateValue>
                    $
                    {statement.incomeBeforeTax
                      .toString()
                      .replace(addCommas, ",")}
                  </IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Income Before Taxes Ratio</IncStateHeader>
                  <IncStateValue>
                    {statement.incomeBeforeTaxRatio == null
                      ? "N/A"
                      : statement.incomeBeforeTaxRatio.toFixed(5)}
                  </IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Income Tax Expense</IncStateHeader>
                  <IncStateValue>
                    $
                    {statement.incomeTaxExpense
                      .toString()
                      .replace(addCommas, ",")}
                  </IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Interest Expense</IncStateHeader>
                  <IncStateValue>
                    $
                    {statement.interestExpense
                      .toString()
                      .replace(addCommas, ",")}
                  </IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Interest Income</IncStateHeader>
                  <IncStateValue>
                    $
                    {statement.interestIncome
                      .toString()
                      .replace(addCommas, ",")}
                  </IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Net Income</IncStateHeader>
                  <IncStateValue>
                    ${statement.netIncome.toString().replace(addCommas, ",")}
                  </IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Net Income Ratio</IncStateHeader>
                  <IncStateValue>
                    {statement.netIncomeRatio == null
                      ? "N/A"
                      : statement.netIncomeRatio.toFixed(5)}
                  </IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>
                    Weighted Average Shares Outstanding
                  </IncStateHeader>
                  <IncStateValue>
                    {statement.weightedAverageShsOut
                      .toString()
                      .replace(addCommas, ",")}
                  </IncStateValue>
                </IncStateContainer>
              </Card>
            ))
          : ""}
      </>
    );
  } catch (err) {
    return <>N/A</>;
  }
};

export default ResearchIncomeStatement;
