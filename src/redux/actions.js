import { ADD_COMMENT } from "./actionTypes";

let nextCommentId = 0;

export const addComment = content => ({
  type: ADD_COMMENT,
  payload: {
    id: ++nextCommentId,
    content
  }
});