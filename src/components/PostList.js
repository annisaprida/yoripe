import React from "react";
import UserPost from "./UserPost";

function PostList({ data }) {
    return (
      <div className="post-container">
          {data.map((userPost, index) => (
            <div key={index}>
            <UserPost key={index} userPost={userPost} />
            </div>
          ))}
      </div>
    );
  
}

export default PostList;