import axios from "axios";
import { ResponsePayload } from "../../../utils/Interfaces/utils.interfaces";

export const GetBlogs = async () => {
  const response = await axios.get<ResponsePayload>(
    "http://localhost:8000/blog/"
  );

  return response;
};
