import { styled } from "@mui/material/styles";

import Button from "@mui/material/Button";

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "sizeType",
})<{ sizeType: "large" | "small" }>(({ sizeType }) => ({
  margin: "10px 5px",
  fontSize: sizeType === "large" ? "14px" : "11px",

  width: sizeType === "large" ? "100%" : "90px",
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
