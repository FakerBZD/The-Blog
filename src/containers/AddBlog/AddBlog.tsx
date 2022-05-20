import React, { FC, useEffect } from "react";
import { Grid } from "@mui/material";
import { Formik, Form } from "formik";
import InputField from "components/InputField/InputField";
import CustomButton from "components/Button /Button";
import { useDispatch } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
import ReactQuill from "react-quill";

import { addBlogRequest } from "core/blog/addBlog/addBlogActionCreator";

import Box from "@mui/material/Box";
// import { useNavigate } from "react-router-dom";
// import { AppState } from "core/rootReducer";
import {
  CustomisedError,
  AddBlogContainer,
  EditorContainer,
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
    <AddBlogContainer>
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
                <Box>
                  <InputField
                    placeholder="Title"
                    // returns onChange, onBlur and value related to this input field
                    {...formik.getFieldProps("title")}
                    name="Blog Title"
                  />

                  <CustomisedError name="Blog Title" component="Box" />

                  <InputField
                    placeholder="Author"
                    {...formik.getFieldProps("author")}
                    name="Author"
                  />
                  <CustomisedError name="Author" component="Box" />

                  <InputField
                    placeholder="Thumbnail url"
                    {...formik.getFieldProps("image")}
                    name="Thumbnail url"
                  />
                  <CustomisedError name="Thumbnail url" component="Box" />
                </Box>
              </Grid>
              <Grid item xs={12} md={9}>
                {
                  // eslint-disable-next-line no-return-assign
                }
                <EditorContainer>
                  <ReactQuill
                    ref={(el) => {
                      instanceRef.current = el;
                    }}
                  />
                </EditorContainer>
              </Grid>
            </Grid>

            <CustomButton type="submit" label="Login" />
          </Form>
        )}
      </Formik>
    </AddBlogContainer>
  );
};

export default AddBlog;
