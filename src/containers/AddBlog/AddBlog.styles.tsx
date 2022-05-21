import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import ReactQuill from "react-quill";

import { ErrorMessage } from "formik";

export const CustomisedError = styled(ErrorMessage)(() => ({
  color: "red",
  marginBottom: "10px",
  fontSize: 12,
}));
export const AddBlogContainerStyled = styled(Grid)(() => ({
  margin: "7% 7%",
}));
export const EditorContainerStyled = styled(Grid)(() => ({
  borderRadius: "0.5em",
  padding: "1em",
  background: "#ffffff",
  height: "600px",
}));
export const FormContainerStyled = styled(Grid)(() => ({
  padding: "1em",

  borderRadius: "0.5em",
  background: "#ffffff",
  height: "600px",
}));
export const LabelContainerStyled = styled(Grid)(() => ({
  fontSize: "17px",
}));
export const ReactQuillStyled = styled(ReactQuill)(() => ({
  width: "100%",
  height: "100%",
}));
