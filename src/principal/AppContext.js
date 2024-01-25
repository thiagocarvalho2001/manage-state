import { createContext } from "react";

export const AppContext = createContext({
  posts: [],
  error: null,
});

export const initialState = { posts: [], error: null };

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return { posts: action.payload, error: null };
    case "FETCH_ERROR":
      return { posts: [], error: action.payload };
    default:
      return state;
  }
};

export default reducer;
