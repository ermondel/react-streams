import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => (
  <div className="ui secondary pointing menu">
    <Link to="/" className="item">
      React streams
    </Link>
    <div className="right menu">
      <Link to="/" className="item">
        All streams
      </Link>
      <GoogleAuth />
    </div>
  </div>
);

export default Header;
