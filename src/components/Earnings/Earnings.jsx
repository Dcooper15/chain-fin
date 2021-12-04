import React, { 
    // useState, 
    useEffect, 
    // useContext 
} from "react";
//import Moment from "react-moment";
//import { ThemeContext } from "styled-components";
import axios from "axios";
//import { Card, Button } from "@material-ui/core";
import {
  SectorHeader
} from "../Styles/styledElements";
//import { useStyles } from "../Styles/muiStyles";



const Earnings = () => {
    // const classes = useStyles();
    // const theme = useContext(ThemeContext);
    // const [earningsData, setEarningsData] = useState([]);


    useEffect(() => {
          axios
            .get(
                `https://${process.env.REACT_APP_HUB_URL}/api/v3/earning_calendar?apikey=${process.env.REACT_APP_FM_CLIENT_ID}`
            )
            .then((response) => {
              console.log(response.data);
            //   setDataArray([chainData]);
            })
        
      }, []);

    return (
        <>
  <SectorHeader>
      Upcoming earnings currently unavailable...check back soon.
  </SectorHeader>
        </>
    )
}

export default Earnings;