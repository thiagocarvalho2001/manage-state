import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { postsState } from "./atoms";

const EditPostComponent = ({ postId }) => {
  const post = useRecoilValue(postsState(postId));

  const [updatedTitle, setUpdatedTitle] = useState(post.title);
  const [updatedBody, setUpdatedBody] = useState(post.body);

  const handleUpdate = async () => {
    try {
      console.log(
        `Updating post ${postId} with title: ${updatedTitle}, body: ${updatedBody}`
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />
      <textarea
        value={updatedBody}
        onChange={(e) => setUpdatedBody(e.target.value)}
      />
      <button onClick={handleUpdate}>Updated Post</button>
    </div>
  );
};

export default EditPostComponent;
