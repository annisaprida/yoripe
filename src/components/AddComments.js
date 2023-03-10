import React from "react";
import { connect } from "react-redux";
import { addComment } from "../redux/actions";
import heartFilledIcon from '../icons/heart-filled.png';
import heartIcon from '../icons/heart.png';

class AddComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      comments:[],
      input: "",
      isCommentFilledHeartIcon: false
    };
    this.toggleCommentFilledHeartIcon = this.toggleCommentFilledHeartIcon.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  updateInput = input => {
    this.setState({ input : input });
  };

  toggleCommentFilledHeartIcon() {
    this.setState(prevState => ({
      isCommentFilledHeartIcon: !prevState.isCommentFilledHeartIcon
    }));
  }
  addComment = () => {
    this.setState(prevState => ({
      comments: [...prevState.comments, this.state.input]
    }))
    this.setState({ input:"" });
  }

  handleAddComment = () => {
    this.props.addComment(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div className="add-comment">
        {this.state.comments.map((comment, index) => (
          <div className="post-container__item__comment" key={index}>
            <p>
              <span>
                <strong>{this.props.meta.username}</strong>
              </span>
              &nbsp;
              {comment}
            </p>
            <button onClick={this.toggleCommentFilledHeartIcon}>
              <img alt="like" src={this.state.isCommentFilledHeartIcon ? heartIcon : heartFilledIcon}></img>
            </button>
          </div>
        ))}
        <div className="add-comment__input-container">
          <input
            onChange={e => this.updateInput(e.target.value)}
            value={this.state.input}
            placeholder={'Add comment for ' + this.props.postCreator}
          />
          <button className="add-comment__button" onClick={this.addComment}>
            Post
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { comments: state.comments };
};
export default connect(
  mapStateToProps,
  { addComment }
)(AddComments);
