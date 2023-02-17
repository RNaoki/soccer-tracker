import React from 'react';
import './PlayerCard.css';

const PlayerCard = ({ player, size }) => {
  let playerAvrg = Math.floor(
    (player.pac +
      player.sho +
      player.pas +
      player.dri +
      player.def +
      player.phy) /
      6,
  );

  return (
    <div
      to={`/player/${player.id}`}
      className={size === 'md' ? 'card-container' : 'card-container-xl'}
      style={{ backgroundImage: "url('/cardBG.png')" }}
    >
      <div className={size === 'md' ? 'card-details' : 'card-details-xl'}>
        <div className={size === 'md' ? 'card-avrg' : 'card-avrg-xl'}>
          {playerAvrg}
        </div>
        <div className={size === 'md' ? 'card-position' : 'card-position-xl'}>
          {player.position}
        </div>
        <img
          src={'/brazil.jpg'}
          className={size === 'md' ? 'flag' : 'flag-xl'}
          alt="National Flag"
        />
      </div>
      <div className={size === 'md' ? 'card-info' : 'card-info-xl'}>
        <div className={size === 'md' ? 'card-name' : 'card-name-xl'}>
          {player.name.toUpperCase()}
        </div>
        <div className={size === 'md' ? 'card-stats' : 'card-stats-xl'}>
          <div
            className={size === 'md' ? 'card-stats-left' : 'card-stats-left-xl'}
          >
            <div className={size === 'md' ? 'card-stat' : 'card-stat-xl'}>
              {player.pac} PAC
            </div>
            <div className={size === 'md' ? 'card-stat' : 'card-stat-xl'}>
              {player.sho} SHO
            </div>
            <div className={size === 'md' ? 'card-stat' : 'card-stat-xl'}>
              {player.pas} PAS
            </div>
          </div>
          <div
            className={
              size === 'md' ? 'card-stats-right' : 'card-stats-right-xl'
            }
          >
            <div className={size === 'md' ? 'card-stat' : 'card-stat-xl'}>
              {player.dri} DRI
            </div>
            <div className={size === 'md' ? 'card-stat' : 'card-stat-xl'}>
              {player.def} DEF
            </div>
            <div className={size === 'md' ? 'card-stat' : 'card-stat-xl'}>
              {player.phy} PHY
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
