import React from "react";
import { useRecoilValue } from "recoil";
import { postsState } from "./atoms";

const PostsComponent = () => {
  const posts = useRecoilValue(postsState);

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;
