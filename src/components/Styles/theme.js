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
  boxShadowColor: "-4px 2px 7px 1px rgba(0, 47, 54, .8)",
  menuItemBackground: "linear-gradient(45deg, #002f36 5%, #00afc9 90%)",
  elevatedBackgroundColor: "#f5f0f0"
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
  boxShadowColor: "0 -2px 10px rgba(0, 0, 0, .1)",
  menuItemBackground: "linear-gradient(45deg, #826a1f 5%, #d4af37 90%)",
  elevatedBackgroundColor: "#38372b"
};

export const GlobalBackGround = createGlobalStyle`
body {
background-color: ${(props) => props.theme.body}
}
`;
