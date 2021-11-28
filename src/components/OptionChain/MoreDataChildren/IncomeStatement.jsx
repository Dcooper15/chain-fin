import React, { useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import { Card, Button } from "@material-ui/core";
import {
  IncStateContainer,
  IncStateHeader,
  IncStateValue,
  StyledIncStateYears,
} from "../../Styles/styledElements";
import { useStyles } from "../../Styles/muiStyles";

const IncomeStatement = ({ incStatementYears, incStatementData }) => {
  const classes = useStyles();
  const theme = useContext(ThemeContext);
  const [incYear, setIncYear] = useState([]);
  try {
    return (
      <>
        {!!incStatementYears.length
          ? incStatementYears.map((year) => (
              <StyledIncStateYears>
                <Button
                  className={classes.buttonExp}
                  value={year}
                  size="small"
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
          : "No"}
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
                hidden={incYear !== statement.calendarYear}
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
                  <IncStateValue>${statement.revenue}</IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Cost and Expenses</IncStateHeader>
                  <IncStateValue>${statement.costAndExpenses}</IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Cost of Revenue</IncStateHeader>
                  <IncStateValue>${statement.costOfRevenue}</IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Depreciation and Amortization</IncStateHeader>
                  <IncStateValue>
                    ${statement.depreciationAndAmortization}
                  </IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>
                    General and Administrative Expenses
                  </IncStateHeader>
                  <IncStateValue>
                    ${statement.generalAndAdministrativeExpenses}
                  </IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>
                    Research and Development Expenses
                  </IncStateHeader>
                  <IncStateValue>
                    ${statement.researchAndDevelopmentExpenses}
                  </IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>
                    Selling and Marketing Expenses
                  </IncStateHeader>
                  <IncStateValue>
                    ${statement.sellingAndMarketingExpenses}
                  </IncStateValue>
                </IncStateContainer>

                <IncStateContainer>
                  <IncStateHeader>Other Expenses</IncStateHeader>
                  <IncStateValue>${statement.otherExpenses}</IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Operating Expenses</IncStateHeader>
                  <IncStateValue>${statement.operatingExpenses}</IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Operating Income</IncStateHeader>
                  <IncStateValue>${statement.operatingIncome}</IncStateValue>
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
                  <IncStateValue>${statement.ebitda}</IncStateValue>
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
                  <IncStateValue>${statement.incomeBeforeTax}</IncStateValue>
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
                  <IncStateValue>${statement.incomeTaxExpense}</IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Interest Expense</IncStateHeader>
                  <IncStateValue>${statement.interestExpense}</IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Interest Income</IncStateHeader>
                  <IncStateValue>${statement.interestIncome}</IncStateValue>
                </IncStateContainer>
                <IncStateContainer>
                  <IncStateHeader>Net Income</IncStateHeader>
                  <IncStateValue>${statement.netIncome}</IncStateValue>
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
                    {statement.weightedAverageShsOut}
                  </IncStateValue>
                </IncStateContainer>
              </Card>
            ))
          : "N/A"}
      </>
    );
  } catch (err) {
    return <>N/A</>;
  }
};

export default IncomeStatement;
