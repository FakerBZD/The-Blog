import { styled } from "@mui/material/styles";

import Button from "@mui/material/Button";

export const StyledButton = styled(Button)(() => ({
  // eslint-disable-next-line no-nested-ternary
  margin: "10px 5px",
  fontSize: "11px",
  width: "90px",
  backgroundColor: "#000000",
  color: "#ffffff",
  fontWeight: "bolder",
  borderRadius: "1em",
  "&:hover": {
    backgroundColor: "#a9a9a9",
  },
  "&:focus": {
    backgroundColor: "#000000",
  },
}));
