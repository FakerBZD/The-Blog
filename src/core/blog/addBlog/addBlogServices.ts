import axios from "axios";
import { ResponsePayload } from "../../../utils/Interfaces/utils.interfaces";

export const AddBlog = async (data: {
  name: string;
  author: string;
  image: string;
  content: string;
}) => {
  const response = await axios.post<ResponsePayload>(
    "http://localhost:8000/blog/add-blog",
    data
  );

  return response;
};
