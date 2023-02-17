import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="container">
        <div className="nav-part">
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <MenuIcon />
          </div>
          <Link to={'/'} className="title">
            Soccer Tracker
          </Link>
        </div>
        <div className="nav-part">
          <div className="title">Log In</div>
          <div className="title">Sign Up</div>
        </div>
      </div>
      {menuOpen && <Menu setMenuOpen={setMenuOpen} />}
    </>
  );
};

const styles = {};

export default Header;
