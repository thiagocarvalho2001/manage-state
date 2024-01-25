import axios from "axios";

export const updatePost = (postId, updateData) => async (dispatch) => {
  try {
    const response = await axios.patch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      updateData
    );

    dispatch({ type: "UPDATE_POST", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_ERROR", payload: error.message });
  }
};

export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    dispatch({ type: "FETCH_POSTS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_ERROR", payload: error.message });
  }
};
