import React from 'react';
import { Link } from 'react-router-dom';
import { players } from '../../assets/fakeData';
import PlayerCard from '../../components/PlayerCard/PlayerCard';
import './Players.css';

const Players = () => {
  return (
    <div className="players-container">
      {players.map((player) => {
        return (
          <Link to={`/player/${player.id}`}>
            <PlayerCard player={player} key={player.id} size={'md'} />
          </Link>
        );
      })}
    </div>
  );
};

export default Players;
