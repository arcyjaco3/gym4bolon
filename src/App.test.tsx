import React from 'react';
import './App.css';
import Header from './components/Header'; 
import Events from './components/Events'; 
import FollowList from './components/FollowList'; 
import AccountInfo from './components/AccountInfo'; 
import AddPostWidget from './components/AddPostWidget';
import PostList from './components/PostList';


function App() {
  return (
    <div className="App">
     <Header></Header>
     <div className="container">
      <div className="left-column">
        <Events></Events>
        <FollowList></FollowList>
      </div>
      <div className="middle-column">
        <AddPostWidget />
        <PostList/>
      </div>
      <div className="right-column">
        <AccountInfo></AccountInfo>
      </div>
     </div>
    </div>
  );
}

export default App;
