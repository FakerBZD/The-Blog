import { combineReducers } from "redux";
import getBlogsReducer from "./blog/getBlogs/getBlogsReducer";

const rootReducer = combineReducers({
  getBlogs: getBlogsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
