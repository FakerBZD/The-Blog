import React, { ReactElement, FC } from "react";
import ReactQuill from "react-quill";
import "./quill.snow.css";

import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

import {
  BlogContainerStyled,
  BlogPaperStyled,
  BlogHeaderStyled,
  BlogInformationsStyled,
  BlogTitleStyled,
  BlogAuthorStyled,
  BlogContentStyled,
} from "./Blogstyles";

const Blog: FC<any> = (): ReactElement => (
  <BlogContainerStyled>
    <BlogPaperStyled>
      <BlogHeaderStyled>
        <Grid container>
          <Grid item md={6}>
            <Box></Box>
          </Grid>
          <Grid item md={6}>
            <BlogInformationsStyled>
              <BlogTitleStyled>Banana</BlogTitleStyled>
              <BlogAuthorStyled>By Dra shkoun</BlogAuthorStyled>
            </BlogInformationsStyled>
          </Grid>
        </Grid>
      </BlogHeaderStyled>
      <BlogContentStyled>
        <ReactQuill readOnly value="dsqdsq" />
      </BlogContentStyled>
    </BlogPaperStyled>
  </BlogContainerStyled>
);

export default Blog;
