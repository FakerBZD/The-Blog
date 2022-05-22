import * as Yup from "yup";

export const addBlogSchema = Yup.object().shape({
  title: Yup.string().required("Blog title required "),
  author: Yup.string().required("author required "),
  content: Yup.string().required("blog content  required "),
  image: Yup.string().required("image required "),
});
