import React, { useContext, useReducer } from "react";
import AppContext from "./AppContext";
import axios from "axios";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "UPDATE_POST":
      return { ...state, posts: action.payload };
    case "FETCH_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updatePost = async (postId, updatedData) => {
    try {
      const response = await axios.patch(
        `https://jsonplaceholder.typicode.com/posts${postId}`,
        updatedData
      );

      dispatch({ type: "UPDATE_POST", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };

  return (
    <AppContext.Provider value={{ state, updatePost }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
