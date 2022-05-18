import React, { ReactElement, FC } from "react";

// import { Grid } from "@mui/material";

import {
  ContainerStyled,
  HeroSectionStyled,
  MostUpvotedBlogStyled,
  BlogListStyled,
} from "./AllBlogstyles";

const AllBlogs: FC<any> = (): ReactElement => (
  <ContainerStyled>
    <HeroSectionStyled>The Blog</HeroSectionStyled>
    <MostUpvotedBlogStyled></MostUpvotedBlogStyled>
    <BlogListStyled></BlogListStyled>
  </ContainerStyled>
);

export default AllBlogs;
