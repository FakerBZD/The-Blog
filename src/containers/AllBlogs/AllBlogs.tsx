import React, { ReactElement, FC, useEffect, useState } from "react";
import BlogCard from "components/BlogCard/BlogCard";
import { Grid } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../core/rootReducer";

import { getBlogsRequest } from "../../core/blog/getBlogs/getBlogsActionCreator";

import {
  ContainerStyled,
  HeroSectionStyled,
  BlogListStyled,
} from "./AllBlogstyles";

const AllBlogs: FC<any> = (): ReactElement => {
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState([]);
  const getBlogs = useSelector((state: AppState) => state.getBlogs);
  useEffect(() => {
    dispatch(getBlogsRequest());
  }, []);
  useEffect(() => {
    if (getBlogs.success) {
      console.log("blogs", getBlogs.blogs.data);
      setBlogs(getBlogs.blogs.data[0]);
    }
  }, [getBlogs.success]);

  return (
    <ContainerStyled>
      <HeroSectionStyled>The Blog</HeroSectionStyled>

      <BlogListStyled>
        <Grid container spacing={2}>
          {blogs.length >= 0
            ? blogs.map((blog) => (
                <Grid item xs={12} md={4}>
                  <BlogCard blog={blog} />{" "}
                </Grid>
              ))
            : "There is no blogs  "}
        </Grid>
      </BlogListStyled>
    </ContainerStyled>
  );
};

export default AllBlogs;
