import React, { useContext } from "react";
import AppContext from "./AppContext";

const UpdatePostComponent = () => {
  const { updatePost } = useContext(AppContext);

  const handleUpdatePost = async () => {
    try {
      await updatePost(1, { title: "Updated Title", body: "Updated Body" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Update Post</h2>
      <button onClick={handleUpdatePost}>Update Post</button>
    </div>
  );
};

export default UpdatePostComponent;
