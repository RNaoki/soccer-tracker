import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { players, games } from '../../assets/fakeData';
import PlayerCard from '../../components/PlayerCard/PlayerCard';
import './Player.css';

const Player = () => {
  let { id } = useParams();
  let player = players.find((player) => JSON.stringify(player.id) === id);
  const [gamesPlayed, setGamesPlayed] = useState([]);
  const [winPerc, setWinPerc] = useState([]);
  const [mvpCount, setMvpCount] = useState(0);

  useEffect(() => {
    getGames();
  }, []);

  useEffect(() => {
    getWinPercentage();
  }, [gamesPlayed]);

  const getWinPercentage = () => {
    setWinPerc((100 * player.wins) / gamesPlayed.length);
  };

  const getGames = () => {
    let newGameCounter = [];
    games.forEach((game) => {
      if (
        game.teams.team1.includes(player.name) ||
        game.teams.team2.includes(player.name)
      ) {
        if (game.mvp === player.name) {
          setMvpCount(mvpCount + 1);
        }
        newGameCounter.push(game);
      }
    });
    setGamesPlayed(newGameCounter);
  };

  return (
    <div class="player-container">
      <PlayerCard player={player} size={'xl'} />
      <div class="player-table">
        <div class="player-item">
          <div class="player-table-topic">Games Played</div>
          <div class="player-table-value" key={gamesPlayed.length}>
            {gamesPlayed.length}
          </div>
        </div>
        <div class="player-item">
          <div class="player-table-topic">Goals</div>
          <div class="player-table-value" key={'player.goals'}>
            {player.goals}
          </div>
        </div>
        <div class="player-item">
          <div class="player-table-topic">MVP Won</div>
          <div class="player-table-value" key={gamesPlayed.length}>
            {mvpCount}
          </div>
        </div>
        <div class="player-item">
          <div class="player-table-topic">Assists</div>
          <div class="player-table-value" key={'player.assists'}>
            {player.assists}
          </div>
        </div>
        <div class="player-item">
          <div class="player-table-topic">Wins</div>
          <div class="player-table-value" key={'player.win'}>
            {player.wins}
          </div>
        </div>
        <div class="player-item">
          <div class="player-table-topic">Losses</div>
          <div class="player-table-value" key={'player.losses'}>
            {player.losses}
          </div>
        </div>
        <div class="player-item">
          <div class="player-table-topic">Draws</div>
          <div class="player-table-value" key={'player.draws'}>
            {player.draws}
          </div>
        </div>
        <div class="player-item">
          <div class="player-table-topic">Win Percentage</div>
          <div class="player-table-value" key={player.winPerc}>
            {winPerc}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
