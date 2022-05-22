import React, { ReactElement, FC, useEffect } from "react";
import ReactQuill from "react-quill";
import "./quill.snow.css";
import { getSingleBlogRequest } from "core/blog/getSingleBlog/getSingleBlogActionCreator";

import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../core/rootReducer";

import {
  BlogContainerStyled,
  BlogPaperStyled,
  BlogHeaderStyled,
  BlogInformationsStyled,
  BlogTitleStyled,
  BlogAuthorStyled,
  BlogContentStyled,
} from "./Blogstyles";

const modules = {
  toolbar: false,
};

const Blog: FC<any> = (): ReactElement => {
  const dispatch = useDispatch();
  const getBlog = useSelector((state: AppState) => state.getBlog);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    dispatch(getSingleBlogRequest(id));
    console.log(getBlog);
  }, [id]);

  return (
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
          <ReactQuill modules={modules} readOnly value="dsqdsq" />
        </BlogContentStyled>
      </BlogPaperStyled>
    </BlogContainerStyled>
  );
};

export default Blog;
