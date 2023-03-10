import React from 'react';
import PostList from "./components/PostList";
import StoryList from "./components/StoryList";
import Footer from "./components/Footer";
import logo from './icons/instagram.png';
import heartIcon from './icons/heart.png';
import chatIcon from './icons/chat.png';
import { useEffect, useState } from "react";

import './style/app.scss';

function App() {
  const [data, setData] = useState([]);
  const [meta, setUserMeta] = useState([]);
  const [stories, setStories] = useState([]);

  const fetchData = () => {
    fetch(`https://private-9a3650-annisaprida.apiary-mock.com/posts-lists`, { mode: 'cors' })
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData.record.data);
        setUserMeta(actualData.metadata);
        setStories(actualData.record.stories);
        console.log(actualData.record.data)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="instagram"/>
        <div className="right-menu">
          <button><img width="20px" src={heartIcon} alt="notification"/></button>
          <button><img width="20px" src={chatIcon} alt="chat"/></button>
        </div>
      </header>
      <StoryList data={stories}/>
      <PostList data={data}/>
      <Footer data={meta}/>
    </div>
  );
}

export default App;
