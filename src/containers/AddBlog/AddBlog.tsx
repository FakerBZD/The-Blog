import React, { FC, useEffect } from "react";
import { Grid } from "@mui/material";
import { Formik, Form } from "formik";
import InputField from "components/InputField/InputField";
import CustomButton from "components/Button /Button";
import { useDispatch } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";

import { addBlogRequest } from "core/blog/addBlog/addBlogActionCreator";

// import { useNavigate } from "react-router-dom";
// import { AppState } from "core/rootReducer";
import {
  CustomisedError,
  AddBlogContainerStyled,
  EditorContainerStyled,
  FormContainerStyled,
  LabelContainerStyled,
  ReactQuillStyled,
} from "./AddBlog.styles";
import { addBlogSchema } from "../../utils/validations/addBlog.validation";

const AddBlog: FC = () => {
  //   const auth = useSelector((state: AppState) => state);

  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const instanceRef = React.useRef(null);
  useEffect(() => {
    console.log(instanceRef.current);
  }, []);

  return (
    <AddBlogContainerStyled>
      <Formik
        initialValues={{
          title: "",
          author: "",
          content: "",
          image: "",
        }}
        onSubmit={(values) => {
          dispatch(addBlogRequest(values));
        }}
        validationSchema={addBlogSchema}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <FormContainerStyled>
                  <LabelContainerStyled> Title : </LabelContainerStyled>
                  <InputField
                    placeholder="example : CopyWriting"
                    // returns onChange, onBlur and value related to this input field
                    {...formik.getFieldProps("title")}
                    name="Blog Title"
                  />
                  <CustomisedError name="Blog Title" component="Box" />
                  <LabelContainerStyled> Author : </LabelContainerStyled>

                  <InputField
                    placeholder="example : Faker BENZID"
                    {...formik.getFieldProps("author")}
                    name="Author"
                  />
                  <CustomisedError name="Author" component="Box" />
                  <LabelContainerStyled> Thumbnail url : </LabelContainerStyled>

                  <InputField
                    placeholder="https://audreytips.com/wp-content/uploads/2020/10/copywriting.jpg"
                    {...formik.getFieldProps("image")}
                    name="Thumbnail url"
                  />
                  <CustomisedError name="Thumbnail url" component="Box" />
                  <CustomButton
                    type="submit"
                    label="Add blog"
                    sizeType="large"
                  />
                </FormContainerStyled>
              </Grid>
              <Grid item xs={12} md={9}>
                <EditorContainerStyled>
                  <ReactQuillStyled
                    ref={(el) => {
                      instanceRef.current = el;
                    }}
                  />
                </EditorContainerStyled>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </AddBlogContainerStyled>
  );
};

export default AddBlog;
