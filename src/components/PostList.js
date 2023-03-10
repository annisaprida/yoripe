import React from "react";
import UserPost from "./UserPost";

function PostList({ data,meta }) {
    return (
      <div className="post-container">
          {data.map((userPost, index) => (
            <div key={index}>
            <UserPost key={index} userPost={userPost} meta={meta}/>
            </div>
          ))}
      </div>
    );
  
}

export default PostList;