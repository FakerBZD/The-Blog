import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";

export const NavigationBarStyled = styled(AppBar)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  backgroundColor: "#000000",
  [theme.breakpoints.up("md")]: {
    width: "10em",
    marginLeft: "-5em",
    left: "50%",
  },
  top: "auto",
  bottom: 0,
  borderRadius: "0.25em",
}));
export const MenuItemsContainerStyled = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "5em",
  cursor: "pointer",
}));
