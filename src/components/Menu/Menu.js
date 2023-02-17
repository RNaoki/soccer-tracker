import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = ({ setMenuOpen }) => {
  return (
    <div className="menu-conatiner">
      <div className="menu-item">
        <Link
          to={'games'}
          className="menu-text"
          onClick={() => setMenuOpen(false)}
        >
          Games
        </Link>
      </div>
      <div className="menu-item">
        <Link
          to={'players'}
          className="menu-text"
          onClick={() => setMenuOpen(false)}
        >
          Players
        </Link>
      </div>
      <div className="menu-item">
        <Link
          to={'Rank'}
          className="menu-text"
          onClick={() => setMenuOpen(false)}
        >
          Rank
        </Link>
      </div>
      <div className="menu-item">
        <Link
          to={'Add Game'}
          className="menu-text"
          onClick={() => setMenuOpen(false)}
        >
          Add Game
        </Link>
      </div>
    </div>
  );
};

export default Menu;
