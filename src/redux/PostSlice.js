import { createSlice } from '@reduxjs/toolkit'
import postContent from '../Data'

const initialState = {
    Post: postContent,


}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {


        incrementLikeOrDislike: (state, action) => {
            const { postId, likeOrDislike } = action.payload;
            const post = state.Post.find(post => post.id === postId);

            if (post) {
                if (!post.hasLiked && likeOrDislike === "like") {
                    post.likes = parseInt(post.likes) + 1;
                    post.hasLiked = true;
                } else if (!post.hasDisliked && likeOrDislike === "dislike") {
                    post.dislikes = parseInt(post.dislikes) + 1;
                    post.likes = parseInt(post.likes) + 1;
                    post.hasDisliked = true;
                }
            }
        }




    },
})

// Action creators are generated for each case reducer function
export const { addLike, addDislike, incrementLikeOrDislike } = counterSlice.actions

export default counterSlice.reducer