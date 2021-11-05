import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import {
  SliderPageContainer,
  StyledMenuItem,
  SliderDataDiv,
  StyledFormControl,
  StyledLabel,
  StyledStratLabel,
  StyledValue,
  StyledSPE,
  StyledClose,
} from "../Styles/styledElements";
import { useStyles } from "../Styles/muiStyles";
import "./OptionChain.css";
import { Slider, Select, MenuItem, FormControl } from "@material-ui/core";
import { GrFormClose } from "react-icons/gr";

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
      <SliderPageContainer>
        <div
          className={
            active === true && theme.name === "dark"
              ? "sliderActiveDark"
              : active === true && theme.name !== "dark"
              ? "sliderActive"
              : "sliderInactive"
          }
        >
          <StyledClose>
            <GrFormClose
              onClick={() => {
                setInactive();
              }}
            />
          </StyledClose>

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

          <StyledFormControl>
            <FormControl className={classes.formControlSlider}>
              <StyledStratLabel>Option Strategy</StyledStratLabel>

              <Select
                labelId="strikeLabel"
                id="strikes"
                className={classes.select}
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={optionStrategy}
                onChange={handleStrategyChange}
                style={{ marginLeft: "5%", minWidth: "100px" }}
              >
                <MenuItem className={classes.menuItemSlider} value={1}>
                  <StyledMenuItem>Buy Call</StyledMenuItem>
                </MenuItem>
                <MenuItem className={classes.menuItemSlider} value={2}>
                  <StyledMenuItem>Sell Covered Call</StyledMenuItem>
                </MenuItem>
                <MenuItem className={classes.menuItemSlider} value={3}>
                  <StyledMenuItem>Buy Put</StyledMenuItem>
                </MenuItem>
                <MenuItem className={classes.menuItemSlider} value={4}>
                  <StyledMenuItem>Sell Cash Secured Put</StyledMenuItem>
                </MenuItem>
              </Select>
            </FormControl>
          </StyledFormControl>
          <StyledValue
            style={{
              visibility: optionStrategy === 2 ? "visible" : "hidden",
              marginLeft: "5%",
            }}
          >
            CC 100 Shares ${hundredShares}
          </StyledValue>
          <StyledValue
            style={{
              visibility: optionStrategy === 4 ? "visible" : "hidden",
              marginLeft: "5%",
            }}
          >
            CSP Collaterall ${cspCollaterall}
          </StyledValue>
          <br></br>
          <br></br>
          <StyledSPE>Share Price at Expiration $</StyledSPE>
          <br></br>
          <Slider
          classes={{ valueLabel: theme.name === "dark" ?classes.valueLabelDark : classes.valueLabel }}
            style={{
              width: "90%",
              marginLeft: "5%",
              marginRight: "5%",
              marginTop: "8%",
              color: theme.name === "dark" ? "#d4af37" : "#146175",
              
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
      </SliderPageContainer>
    );
  } else {
    return "Loading..";
  }
};

export default ProfitLossSlider;
