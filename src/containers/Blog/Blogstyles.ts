import { styled } from "@mui/material/styles";

export const BlogContainerStyled = styled("div")(() => ({
  backgroundColor: "#eeeeee",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
}));
export const BlogPaperStyled = styled("div")(() => ({
  borderRadius: "0.5em",
  boxShadow:
    "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px",
  backgroundColor: "#ffffff",
  width: "80%",
  height: "80%",
}));
export const BlogHeaderStyled = styled("div")(() => ({
  width: "100%",
  marginTop: "5rem",
}));
export const BlogInformationsStyled = styled("div")(() => ({
  marginLeft: "0.75em",
}));
export const BlogTitleStyled = styled("div")(() => ({
  fontWeight: "600",
  fontSize: "5em",
}));
export const BlogAuthorStyled = styled("div")(() => ({
  fontSize: "1em",
  color: "#716e6e",
}));
export const BlogContentStyled = styled("div")(() => ({
  margin: "2rem 5.5rem",
}));
