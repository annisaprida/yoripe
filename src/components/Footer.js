import React from "react";
import { connect } from "react-redux";
import homeIcon from '../icons/home.png';
import searchIcon from '../icons/search.png';
import addPostIcon from '../icons/add-post.png';
import videoIcon from '../icons/video.png'
const Footer = ({data}) => (
  <div className="footer">
    <img src={homeIcon} alt="home"/>
    <img src={searchIcon} alt="search"/>
    <img src={addPostIcon} alt="add post"/>
    <img src={videoIcon} alt="video"/>
    <img className = "footer__profile-picture" src={data.profile_picture} alt="profile picture"/>
  </div>
);

export default connect(
  null,
)(Footer);
