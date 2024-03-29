import React, { FC, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Formik, Form, Field } from "formik";
import InputField from "components/InputField/InputField";
import CustomButton from "components/Button /Button";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { addBlogRequest } from "core/blog/addBlog/addBlogActionCreator";

import { useNavigate } from "react-router-dom";
import { AppState } from "core/rootReducer";
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
  // Skip first render
  const [firstRender, setFirstRender] = useState(true);
  const blog = useSelector((state: AppState) => state.addBlog);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    if (firstRender) setFirstRender(false);
    else if (blog.success) {
      toast.success("Blog added !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate("/all-blogs");
      }, 1500);
    }
  }, [blog.success]);

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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AddBlogContainerStyled>
  );
};

export default AddBlog;
