import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import {
  StyledMenuItem,
  SliderDataDiv,
  StyledLabel,
  StyledValue,
} from "../Styles/styledElements";
import { useStyles } from "../Styles/muiStyles";
import "./OptionChain.css";
import {
  Button,
  Slider,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";

const ProfitLossSlider = ({
  sharePrice,
  strike,
  premium,
  active,
  setInactive,
}) => {
  const classes = useStyles();
  const theme = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [optionStrategy, setOptionStrategy] = useState([1]);
  const [sliderValue, setSliderValue] = useState([sharePrice]);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleStrategyChange = (event) => {
    setOptionStrategy(event.target.value);
    setSliderValue(sharePrice);
  };
  const handleSliderChange = (event, value) => {
    setSliderValue(value);
  };

  const hundredShares = sharePrice * 100;
  const cspCollaterall = strike * 100;

  useEffect(() => {
    setSliderValue([sharePrice]);
    setOptionStrategy(1);
  }, [strike, sharePrice]);

  let buyCallPL =
    sliderValue > strike
      ? (sliderValue - strike) * 100 - premium
      : premium * -1;

  let buyPutPL =
    sliderValue < strike
      ? (strike - sliderValue) * 100 - premium
      : premium * -1;
  let cspPL =
    sliderValue < strike
      ? (strike - sliderValue) * 100 * -1 + premium
      : premium;
  let ccPL =
    sliderValue <= strike
      ? ((sliderValue - sharePrice) * 100).toFixed(2) - premium
      : ((strike - sharePrice) * 100).toFixed(2) - premium;
  let ccOpportunityCost =
    sliderValue > strike ? ((sliderValue - strike) * 100).toFixed(2) : 0;

  let mainPL = [];
  switch (optionStrategy) {
    case 1:
      mainPL = buyCallPL;
      break;
    case 2:
      mainPL = ccPL;
      break;
    case 3:
      mainPL = buyPutPL;
      break;
    case 4:
      mainPL = cspPL;
      break;
    default:
      mainPL = 0;
  }

  if (strike) {
    return (
      <div>
        <div className={active === true ? "sliderActive" : "sliderInactive"}>
          <Button
            type="submit"
            size="small"
            variant="outlined"
            onClick={setInactive}
            style={{ marginLeft: "2%", marginTop: "2%" }}
          >
            <strong>close</strong>
          </Button>
          <br></br>
          <br></br>
          <SliderDataDiv>
            <StyledLabel>
              Share Price<StyledValue>${sharePrice}</StyledValue>
            </StyledLabel>
            <StyledLabel>
              Strike Price<StyledValue>${strike}</StyledValue>
            </StyledLabel>
            <StyledLabel>
              Premium<StyledValue>${premium}</StyledValue>
            </StyledLabel>
          </SliderDataDiv>

          <br></br>
          <FormControl className={classes.formControl}>
            <InputLabel id="strikeLabel" className={classes.select}>
              <strong
                style={{ color: theme.name === "dark" ? "#d4af37" : "#146175" }}
              >
                Option Strategy
              </strong>
            </InputLabel>

            <Select
              labelId="strikeLabel"
              id="strikes"
              className={classes.select}
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={optionStrategy}
              onChange={handleStrategyChange}
            >
              <MenuItem className={classes.menuItem} value={1}>
                <StyledMenuItem>Buy Call</StyledMenuItem>
              </MenuItem>
              <MenuItem className={classes.menuItem} value={2}>
                <StyledMenuItem>Sell Covered Call</StyledMenuItem>
              </MenuItem>
              <MenuItem className={classes.menuItem} value={3}>
                <StyledMenuItem>Buy Put</StyledMenuItem>
              </MenuItem>
              <MenuItem className={classes.menuItem} value={4}>
                <StyledMenuItem>Sell Cash Secured Put</StyledMenuItem>
              </MenuItem>
            </Select>
          </FormControl>
          <br></br>
          <br></br>
          <i
            style={{ visibility: optionStrategy === 2 ? "visible" : "hidden" }}
          >
            CC 100 Shares ${hundredShares}
          </i>
          <i
            style={{ visibility: optionStrategy === 4 ? "visible" : "hidden" }}
          >
            CSP Collaterall ${cspCollaterall}
          </i>
          <br></br>
          <br></br>
          <strong>Share Price at Expiration</strong>
          <br></br>
          <Slider
            style={{
              width: "90%",
              marginLeft: "5%",
              marginRight: "5%",
              marginTop: "8%",
            }}
            onChange={handleSliderChange}
            value={sliderValue}
            step={strike > 20 ? 0.5 : 0.25}
            max={Math.round(strike * 1.5)}
            min={Math.round(strike * 0.5)}
            valueLabelDisplay="on"
          />
          <br></br>
          <SliderDataDiv>
            <StyledLabel>
              Profit <StyledValue>${mainPL.toFixed(2)}</StyledValue>
            </StyledLabel>
            {optionStrategy === 2 ? (
              <StyledLabel>
                Opportunity Cost<StyledValue>${ccOpportunityCost}</StyledValue>
              </StyledLabel>
            ) : (
              ""
            )}
          </SliderDataDiv>
        </div>
      </div>
    );
  } else {
    return "Loading..";
  }
};

export default ProfitLossSlider;
