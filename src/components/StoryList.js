import React from "react";

function StoryList({ data }) {
    return (
      <div className="stories-container">
          {data.map((story, index) => (
            <div className="stories-container__item" key={index}>
              <div className="stories-container__item__image">
                <img alt="user photo" src={story.profile_picture} cross-origin=""/>
              </div>
              <div>
                {story.username}
              </div>
            </div>
          ))}
      </div>
    );
  
}

export default StoryList;