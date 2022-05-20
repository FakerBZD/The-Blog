import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { ErrorMessage } from "formik";

export const CustomisedError = styled(ErrorMessage)(() => ({
  color: "red",
  marginBottom: "10px",
  fontSize: 12,
}));
export const AddBlogContainer = styled(Grid)(() => ({
  margin: "7% 7%",
}));
export const EditorContainer = styled(Grid)(() => ({
  background: "#ffffff",
  height: "600px",
}));
