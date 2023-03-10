import React from "react";
import { connect } from "react-redux";
import heartIcon from '../icons/heart.png';
import heartFilledIcon from '../icons/heart-filled.png';
import commentIcon from '../icons/comment.png';
import shareIcon from '../icons/send.png';
import bookmarkIcon from '../icons/bookmark.png';

class UserPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isFilledHeartIcon: true, isCommentFilledHeartIcon: true};
    // This binding is necessary to make `this` work in the callback
    this.toggleFilledHeartIcon = this.toggleFilledHeartIcon.bind(this);
    this.toggleCommentFilledHeartIcon = this.toggleCommentFilledHeartIcon.bind(this);
  }
  toggleFilledHeartIcon() {
    this.setState(prevState => ({
      isFilledHeartIcon: !prevState.isFilledHeartIcon,
    }));
  }
  toggleCommentFilledHeartIcon() {
    this.setState(prevState => ({
      isCommentFilledHeartIcon: !prevState.isCommentFilledHeartIcon
    }));
  }
  render() {
    return (
    <div className="post-container__item">
      <div className="post-container__item__user-data">
        <img alt="user photo" src={this.props.userPost.caption.from.profile_picture} cross-origin="" />
        <div className="post-container__item__user-data__username">
          {this.props.userPost.caption.from.username}
        </div>
      </div>
      <a href={this.props.userPost.link} target="_blank">
        <img alt="user post" src={this.props.userPost.images.low_resolution.url} cross-origin="" />
      </a>
      <div className="post-container__item__action">
        <button onClick={this.toggleFilledHeartIcon}>
          <img alt="like" src={this.state.isFilledHeartIcon ? heartIcon : heartFilledIcon}></img>
        </button>
        <button>
          <img alt="like" src={commentIcon}></img>
        </button>
        <button>
          <img alt="like" src={shareIcon}></img>
        </button>
        <button>
          <img alt="like" src={bookmarkIcon}></img>
        </button>
      </div>
      <div className="post-container__item__caption">
        <p>
          <span>
            <strong>{this.props.userPost.caption.from.username}</strong>
          </span>
          &nbsp;
          {this.props.userPost.caption.text}
        </p>
      </div>
      {this.props.userPost.user_comments.map((comment, index) => (
        <div className="post-container__item__comment" key={index}>
          <p>
            <span>
              <strong>{comment.username}</strong>
            </span>
            &nbsp;
            {comment.text}
          </p>
          <button onClick={this.toggleCommentFilledHeartIcon}>
            <img alt="like" src={this.state.isCommentFilledHeartIcon ? heartIcon : heartFilledIcon}></img>
          </button>
        </div>
      ))}
    </div>
  )}
}

export default connect(
  null,
)(UserPost);
