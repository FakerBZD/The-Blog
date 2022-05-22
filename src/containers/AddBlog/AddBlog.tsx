import React, { FC, useEffect } from "react";
import { Grid } from "@mui/material";
import { Formik, Form, Field } from "formik";
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
  useEffect(() => {}, []);

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
          console.log(values, "submitting");
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
                    name="title"
                  />
                  <CustomisedError name="title" component="Box" />
                  <LabelContainerStyled> Author : </LabelContainerStyled>

                  <InputField
                    placeholder="example : Faker BENZID"
                    {...formik.getFieldProps("author")}
                    name="author"
                  />
                  <CustomisedError name="author" component="Box" />
                  <LabelContainerStyled> Thumbnail url : </LabelContainerStyled>

                  <InputField
                    placeholder="https://audreytips.com/wp-content/uploads/2020/10/copywriting.jpg"
                    {...formik.getFieldProps("image")}
                    name="image"
                  />
                  <CustomisedError name="image" component="Box" />
                  <CustomButton
                    type="submit"
                    className="btn"
                    label="Add blog"
                    sizeType="large"
                  />
                </FormContainerStyled>
              </Grid>
              <Grid item xs={12} md={9}>
                <EditorContainerStyled>
                  <Field name="content" component="Box">
                    {({ field }: any) => (
                      <ReactQuillStyled
                        value={field.value}
                        onChange={field.onChange(field.name)}
                      />
                    )}
                  </Field>

                  <CustomisedError name="content" component="Box" />
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
