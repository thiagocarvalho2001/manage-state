const postsReducer = (state = { posts: [], error: null }, action) => {
  switch (action.type) {
    case "UPDATE_POST":
      const updatedPosts = state.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
      return { posts: updatedPosts, error: null };
    default:
      return state;
  }
};

export default postsReducer;
