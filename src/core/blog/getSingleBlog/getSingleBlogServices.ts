import axios from "axios";
import { ResponsePayload } from "../../../utils/Interfaces/utils.interfaces";

export const GetBlog = async (id: string) => {
  const response = await axios.get<ResponsePayload>(
    `http://localhost:8000/blog/${id}`
  );

  return response;
};
