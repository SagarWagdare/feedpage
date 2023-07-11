import { createSlice } from "@reduxjs/toolkit";
import postContent from "../Data";

const initialState = {
  Post: postContent,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addLike: (state, action) => {
      const post = state.Post.find((post) => post.id === action.payload);
      if (!post.isnotliked && post) {
        post.likes = parseInt(post.likes) + 1;
        post.isnotliked = true;
      } else {
        post.likes = parseInt(post.likes) - 1;
        post.isnotliked = false;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addLike } = counterSlice.actions;

export default counterSlice.reducer;
