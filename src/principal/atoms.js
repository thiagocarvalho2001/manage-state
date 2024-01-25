import { atom, atomFamily, selector } from "recoil";
import axios from "axios";

export const postsState = atomFamily({
  key: "postsState",
  default: (postId) => selector({
    key: `postsState/${postId}`,
    get: async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        return response.date;
      } catch (error) {
        throw error;
      }
    },
  }),
});

export const countState = atom({
  key: "countState",
  default: 0,
});
