import { selector } from "recoil";
import { countState } from "./atoms";

export const doubledCount = selector({
  key: "doubledCount",
  get: ({ get }) => {
    const count = get(countState);
    return count * 2;
  },
});
