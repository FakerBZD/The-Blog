import axios from "axios";
import { ResponsePayload } from "../../../utils/Interfaces/utils.interfaces";

export const GetBlog = async () => {
  const response = await axios.get<ResponsePayload>(
    "http://localhost:5000/api/blogs/get_Blogs"
  );

  return response;
};
