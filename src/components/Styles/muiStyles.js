import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  buttonDark: {
    background: "linear-gradient(45deg, #d4af37 30%, #EEBC1D 90%)",
    borderColor: "#d4af37",
    border: 2,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(212, 175, 55, .8)",
    color: "#d4af37",
    margin: 1,
    size: "small",
  },
  buttonLight: {
    background: "linear-gradient(45deg, #002f36 5%, #00afc9 90%)",
    border: 2,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0, 47, 54, .8)",
    color: "#FFF",
    margin: 1,
    size: "small",
  },
  buttonDarkUns: {
    background: "linear-gradient(45deg, #d4af37 10%, #756300 80%)",
    borderColor: "#d4af37",
    border: 2,
    borderRadius: 3,
    color: "#d4af37",
    margin: 1,
    size: "small",
  },
  buttonLightUns: {
    background: "linear-gradient(45deg, #002f36 60%, #00afc9 99%)",
    border: 2,
    borderRadius: 3,
    color: "#FFF",
    margin: 1,
    size: "small",
  },
  card: {
    position: "center",
    justifyItems: "center",
    marginLeft: "4%",
    marginRight: "3%",
    marginTop: "3%",
    paddingTop: "1%",
    paddingBottom: "1%",
    fontFamily: "Noto Sans,sans-serif",
    borderRadius: "15px",
    paddingLeft: "2%",
  },

  chainDark: {
    borderRadius: "5px",
    borderColor: "#d4af37",
    borderWidth: "1.5px",
    height: "1.5em",
    width: "1.5em",
  },

  chainLight: {
    borderRadius: "5px",
    borderColor: "#00afc9",
    borderWidth: "1.5px",
    height: "1.5em",
    width: "1.5em",
  },

  formControl: {
    margin: 1,
    minWidth: 200,
  },

  label: {
    marginBottom: "0",
    marginTop: "3%",
    marginLeft: "2%",
    minWidth: 75,
    fontFamily: "Montserrat, sans-serif",
  },

  menuItem: {
    backgroundColor: "#756300",
    "&:hover": {
      backgroundColor: "#343434",
      "&$selected": {
        backgroundColor: "#343434",
      },
    },
    paddingTop: "0px",
    width: "100%",
    justifyContent: "center",
  },

  select: {
    width: "25%",
    marginLeft: "2%",
    color: "#d4af37",
    "& .MuiSvgIcon-root": {
      color: "#d4af37",
    },
  },
  selectLight: {
    width: "25%",
    marginLeft: "2%",
    color: "#00afc9",
    "& .MuiSvgIcon-root": {
      color: "#00afc9",
    },
  },
});
