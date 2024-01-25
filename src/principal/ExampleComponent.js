import React from "react";
import { useAppContext } from "./AppProvider";
import { AppContext } from "./AppContext";

const ExampleComponent = () => {
  const state = useAppContext();

  return (
    <AppContext.Provider>
    <div>
      <h2>Posts</h2>
      {state.posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
      {state.error && <p>Error: {state.error}</p>}
    </div>
    </AppContext.Provider>
  );
};

export default ExampleComponent;
