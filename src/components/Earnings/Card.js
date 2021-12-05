import {
  StyledEarningsRow,
  StyledEarningsSymLink,
  StyledEarningsRowItem,
} from "../Styles/styledElements";
export default function Card({ symbol, date, epsEstimated, time }) {
  return (
    <div className="card">
      <div className="contentSection">
        <StyledEarningsRow>
          <StyledEarningsSymLink to={`/chain/${symbol}`}>
            {symbol}
          </StyledEarningsSymLink>
          <StyledEarningsRowItem>{date}</StyledEarningsRowItem>
          <StyledEarningsRowItem>
            {time === null
              ? "N/A"
              : time === "bmo"
              ? "Before Open"
              : "After Close"}
          </StyledEarningsRowItem>
          <StyledEarningsRowItem>
            {epsEstimated === null ? "N/A" : epsEstimated}
          </StyledEarningsRowItem>
        </StyledEarningsRow>
      </div>
    </div>
  );
}
