import { styled } from "@mui/material/styles";

import OutlinedInput from "@mui/material/OutlinedInput";

export const AddBlogContainerStyled = styled(OutlinedInput)(() => ({
  width: "100%",
  margin: "10px 0px",
  borderRadius: "8px",
  height: "50px",
  "&.Mui-focused": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#000000",
    },
  },
}));
