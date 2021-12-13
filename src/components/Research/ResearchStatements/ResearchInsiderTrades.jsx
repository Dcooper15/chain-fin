import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { ThemeContext } from "styled-components";
import { Button } from "@material-ui/core";
import axios from "axios";
import { uuid } from "uuidv4";
import {
  StyledIncStateYears,
} from "../../Styles/styledElements";
import InsiderTradesCard from "./InsiderTradesCard";
import { useStyles } from "../../Styles/muiStyles";
import { FixedSizeList } from "react-window";

//const addCommas = /\B(?=(\d{3})+(?!\d))/g;

const InsiderTrading = ({ submittedText }) => {
  const classes = useStyles();
  const theme = useContext(ThemeContext);
  const isMounted = useRef(false);
  const [insiderData, setInsiderData] = useState([]);
  const [insiderYears, setInsiderYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState([]);
  console.log("insiderdata", insiderData);
  useEffect(() => {
    if (isMounted.current) {
      axios
        .get(
          `https://${process.env.REACT_APP_HUB_URL}/api/v4/insider-trading?symbol=${submittedText}&limit=250&apikey=${process.env.REACT_APP_FM_CLIENT_ID}`
        )
        .then((response) => {
          const returnYears = response.data.map((years) =>
            years.transactionDate.slice(0, 4)
          );
          const uniqueYears = [...new Set(returnYears)];
          setInsiderYears(uniqueYears);
          setInsiderData(response.data);
        });
    } else {
      isMounted.current = true;
    }
  }, [submittedText]);

  const Row = useCallback(
    ({ index, style }) => {
      const {
        transactionDate,
        filingDate,
        acquistionOrDisposition,
        transactionType,
        securityName,
        price,
        reportingName,
        securitiesOwned,
        securitiesTransacted,
        typeOfOwner,
        formType,
      } = insiderData[index] || {};
      return (
        <div style={style}>
      
            <InsiderTradesCard
            key={uuid()}
              transactionDate={transactionDate}
              filingDate={filingDate}
              acquistionOrDisposition={acquistionOrDisposition}
              transactionType={transactionType}
              securityName={securityName}
              price={price}
              reportingName={reportingName}
              securitiesOwned={securitiesOwned}
              securitiesTransacted={securitiesTransacted}
              typeOfOwner={typeOfOwner}
              formType={formType}
            />
       
        </div>
      );
    },
    [insiderData]
  );

  try {
    return (
      <>
        {!!insiderYears.length
          ? // && dataSelection === "insider trades"
            insiderYears.map((year) => (
              <StyledIncStateYears>
                <Button
                  className={classes.buttonExp}
                  value={year}
                  size="small"
                  //   hidden={!dataSelection === "insider trades"}
                  onClick={() => setSelectedYear(year)}
                  style={{
                    background:
                      year === selectedYear
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
        {!!insiderData.length ? (
          <FixedSizeList
            height={500}
            width={"100%"}
            itemSize={275}
            itemCount={insiderData.length}
          >
            {Row}
          </FixedSizeList>
        ) : (
          //   insiderData.map((transaction) => (
          //   <Card
          //     className={classes.quoteCard}
          //     style={
          //       theme.name === "dark"
          //         ? {
          //             backgroundColor: "#38372b",

          //             color: "#ffebcd",
          //           }
          //         : {
          //             backgroundColor: "#c9c9c9",

          //             color: "#002933",
          //           }
          //     }
          //     variant="outlined"
          //     hidden={
          //       selectedYear !== transaction.transactionDate.slice(0, 4)
          //       //   ||
          //       //   dataSelection !== "insider trades"
          //     }
          //     raised={true}
          //   >
          //     <IncStateContainer>
          //       <IncStateHeader>Transaction Date</IncStateHeader>
          //       <IncStateValue>
          //         {transaction.transactionDate == null ? (
          //           "N/A"
          //         ) : (
          //           <Moment format="ll">{transaction.transactionDate}</Moment>
          //         )}
          //       </IncStateValue>
          //     </IncStateContainer>
          //     <IncStateContainer>
          //       <IncStateHeader>Filing Date</IncStateHeader>
          //       <IncStateValue>
          //         {transaction.filingDate == null ? (
          //           "N/A"
          //         ) : (
          //           <Moment format="ll">
          //             {transaction.filingDate.slice(
          //               0,
          //               transaction.filingDate.indexOf(" ")
          //             )}
          //           </Moment>
          //         )}
          //       </IncStateValue>
          //     </IncStateContainer>
          //     <IncStateContainer>
          //       <IncStateHeader>Acquisition or Diposition</IncStateHeader>
          //       <IncStateValue>
          //         {transaction.acquistionOrDisposition}
          //       </IncStateValue>
          //     </IncStateContainer>

          //     <IncStateContainer>
          //       <IncStateHeader>Transaction Type</IncStateHeader>
          //       <IncStateValue>{transaction.transactionType}</IncStateValue>
          //     </IncStateContainer>

          //     <IncStateContainer>
          //       <IncStateHeader>Security Type</IncStateHeader>
          //       <IncStateValue>{transaction.securityName}</IncStateValue>
          //     </IncStateContainer>
          //     <IncStateContainer>
          //       <IncStateHeader>Price</IncStateHeader>
          //       <IncStateValue>
          //         $
          //         {
          //           transaction.price
          //           // .toString().replace(addCommas, ",")
          //         }
          //       </IncStateValue>
          //     </IncStateContainer>
          //     <IncStateContainer>
          //       <IncStateHeader>Insider Name</IncStateHeader>
          //       <IncStateValue>{transaction.reportingName}</IncStateValue>
          //     </IncStateContainer>
          //     <IncStateContainer>
          //       <IncStateHeader>Securities Owned</IncStateHeader>
          //       <IncStateValue>
          //         {
          //           transaction.securitiesOwned
          //           // .toString()
          //           // .replace(addCommas, ",")
          //         }
          //       </IncStateValue>
          //     </IncStateContainer>
          //     <IncStateContainer>
          //       <IncStateHeader>Securities Transacted</IncStateHeader>
          //       <IncStateValue>
          //         {
          //           transaction.securitiesTransacted
          //           // .toString()
          //           // .replace(addCommas, ",")
          //         }
          //       </IncStateValue>
          //     </IncStateContainer>
          //     <IncStateContainer>
          //       <IncStateHeader>Type of Owner</IncStateHeader>
          //       <IncStateValue>{transaction.typeOfOwner}</IncStateValue>
          //     </IncStateContainer>
          //     <IncStateContainer>
          //       <IncStateHeader>Form Type</IncStateHeader>
          //       <IncStateValue>{transaction.formType}</IncStateValue>
          //     </IncStateContainer>
          //     {/* <IncStateContainer>
          //       <IncStateHeader>Link</IncStateHeader>
          //       <IncStateValue>{transaction.link}</IncStateValue>
          //     </IncStateContainer> */}
          //   </Card>
          // )
          "No Insider Trades Available"
        )}
      </>
    );
  } catch (err) {
    console.log(err.message);
    return <></>;
  }
};

export default InsiderTrading;
