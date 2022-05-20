import { styled } from "@mui/material/styles";

export const positiveRatio = {
  boxShadow:
    "0 10px 20px rgba(102, 204, 153,0.30), 0 6px 6px rgba(102, 204, 153,0.60)",
};
export const negativeRatio = {
  boxShadow:
    "0 10px 20px rgba(102, 204, 153,0.30), 0 6px 6px rgba(102, 204, 153,0.60)",
};
export const EvenRatio = {
  boxShadow:
    "0 10px 20px rgba(102, 204, 153,0.30), 0 6px 6px rgba(102, 204, 153,0.60)",
};

export const BlogCardContianer = styled("div")(() => ({
  height: "300px",
  width: "100%",
  background: "#ffffff",
  borderRadius: "0.5em",
  fontFamily: "Inter",
}));
export const BlogCardImageHolder = styled("img")(() => ({
  objectFit: "cover",
  height: "300px",
  width: "100%",
  borderRadius: "0.5em 0 0 0.5em",
}));
export const BlogInfoHolderStyled = styled("div")(() => ({
  height: "300px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
}));

export const AuthorContainerStyled = styled("div")(() => ({
  color: "#858383",
}));
export const BlogTitleStyled = styled("div")(() => ({
  wordBreak: "normal",
  fontWeight: "bold",
  fontSize: "calc(1em + 1vmin)",
}));
export const BlogBriefStyled = styled("div")(() => ({}));
export const VoteSectionStyled = styled("div")(() => ({
  display: "flex",
  alignItems: " center",
}));
export const iconStyling = { padding: "0 15px " };
