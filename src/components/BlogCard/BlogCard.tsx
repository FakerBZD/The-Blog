import React, { ReactElement, FC } from "react";
import { useNavigate } from "react-router-dom";
import {
  BlogCardContianer,
  BlogCardImageHolder,
  AuthorContainerStyled,
  BlogTitleStyled,
} from "./BlogCard.styles";

const BlogCard: FC<any> = ({
  blogimgSrc,
  blogAuthor,
  blogTitle,
  blogId,
}): ReactElement => {
  const Navigate = useNavigate();
  const navigateToBlogHandler = () => {
    Navigate(`/Blog/${blogId}`);
  };
  return (
    <BlogCardContianer onClick={navigateToBlogHandler}>
      <BlogCardImageHolder src={blogimgSrc} alt="Blog"></BlogCardImageHolder>
      <AuthorContainerStyled>By {blogAuthor} </AuthorContainerStyled>
      <BlogTitleStyled>{blogTitle}</BlogTitleStyled>
    </BlogCardContianer>
  );
};
export default BlogCard;
