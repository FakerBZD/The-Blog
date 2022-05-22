import { Grid } from "@mui/material";
import CustomButton from "components/Button /Button";
import React, { ReactElement, FC } from "react";
import { useNavigate } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

import {
  BlogCardContianer,
  BlogCardImageHolder,
  AuthorContainerStyled,
  BlogTitleStyled,
  BlogBriefStyled,
  BlogInfoHolderStyled,
  VoteSectionStyled,
  iconStyling,
  positiveRatio,
} from "./BlogCard.styles";

const BlogCard: FC<any> = ({ blog }): ReactElement => {
  const { id, image, author, title, upvote, downvote, content } = blog;
  const Navigate = useNavigate();
  const navigateToBlogHandler = () => {
    Navigate(`/Blog/${id}`);
  };
  const wordShrinker = (blogtoShring: string): string => {
    if (blogtoShring.length >= 135)
      return `${blogtoShring.substring(0, 135)} ...`;
    return blogtoShring;
  };
  return (
    <BlogCardContianer sx={positiveRatio}>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={6} sm={6}>
          <BlogCardImageHolder src={image} alt="Blog" />
        </Grid>
        <Grid item xs={6} sm={6}>
          <BlogInfoHolderStyled>
            <AuthorContainerStyled> {author} </AuthorContainerStyled>

            <BlogTitleStyled>{title}</BlogTitleStyled>
            <BlogBriefStyled>{wordShrinker(content)}</BlogBriefStyled>
            <CustomButton
              label="Read more"
              onClick={navigateToBlogHandler}
              sizeType="small"
            />
            <VoteSectionStyled>
              {upvote}
              <ThumbUpIcon sx={iconStyling} />
              {downvote}
              <ThumbDownIcon sx={iconStyling} />
            </VoteSectionStyled>
          </BlogInfoHolderStyled>
        </Grid>
      </Grid>
    </BlogCardContianer>
  );
};
export default BlogCard;
