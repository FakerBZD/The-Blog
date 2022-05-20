import axios from "axios";
import { ResponsePayload } from "../../../utils/Interfaces/utils.interfaces";

export const AddBlog = async () => {
  const response = await axios.get<ResponsePayload>(
    "http://localhost:5000/blogs/sss"
  );

  return response;
};
