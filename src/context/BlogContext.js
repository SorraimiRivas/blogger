import createDataContext from "./createDataContext";
import jsonserver from "../api/jsonserver";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogpost":
      return action.payload;
    case "edit_blogspot":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case "delete_blogspot":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const getBlogPost = (dispatch) => {
  return async () => {
    const response = await jsonserver.get("/blogpost");
    dispatch({ type: "get_blogpost", payload: response.data });
  };
};
const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonserver.post("/blogpost", { title, content });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonserver.delete(`/blogpost/${id}`);
    dispatch({ type: "delete_blogspot", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonserver.put(`/blogpost/${id}`, { title, content });
    dispatch({ type: "edit_blogspot", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
  []
);
