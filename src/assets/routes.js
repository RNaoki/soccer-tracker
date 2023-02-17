import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import Home from '../views/Home.js';
import Player from '../views/Player/Player.js';
import Players from '../views/Players/Players.js';
import GameDetails from '../views/GameDetails/GameDetails.js';
import Games from '../views/Games/Games.js';

const AppRoutes = ({ child }) => {
  return (
    <Router>
      {child}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="player/:id" element={<Player />} />
        <Route path="players" element={<Players />} />
        <Route path="game-details" element={<GameDetails />} />
        <Route path="games" element={<Games />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
