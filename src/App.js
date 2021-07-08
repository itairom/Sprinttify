import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './assets/main.css'
import './assets/style/main.scss'
import { Home } from './pages/Home';
import { NavBar } from './cmps/NavBar';
import { Browse } from './pages/Browse';
import { LikedSongs } from './pages/LikedSongs';
import { PlayListPage } from './pages/PlaylistPage';

function App() {
  return (
    <div className="content-wrapper">
      <NavBar />
      <Switch>
        <Route path="/playlist" component={ PlayListPage } />
        <Route path="/home" component={ Home } />
        <Route path="/browse" component={ Browse } />
        <Route path="/likedsongs" component={ LikedSongs } />
      </Switch>
    </div>
  );
}

export default App;
