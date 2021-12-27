import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  name: "light",
  body: "#ebebeb",
  accentColor: "#00afc9",
  fontColor: "#146175",
  headerColor: "#146175",
  dataLineColor: "#86989c",
  percentChangeUp: "#006400",
  percentChangeDown: "#ff4c4c",
  hoverColor: "#d1e6ed",
  disabledColor: "#92a3a6",
};

export const darkTheme = {
  name: "dark",
  body: "#343434",
  accentColor: "#d4af37",
  fontColor: "#d4af37",
  headerColor: "#d4af37",
  dataLineColor: "#616144",
  percentChangeUp: "#a4de02",
  percentChangeDown: "#ff4c4c",
  hoverColor: "#474747",
  disabledColor: "#786320",
};

export const GlobalBackGround = createGlobalStyle`
body {
background-color: ${(props) => props.theme.body}
}
`;
