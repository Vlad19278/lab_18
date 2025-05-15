import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = { fontWeight: 'bold', textDecoration: 'underline' };

  return (
    <header style={{ background: '#222', padding: '10px 20px' }}>
      <nav style={{ display: 'flex', gap: 20 }}>
        <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Про мене</NavLink>
        <NavLink to="/my-city" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Моє місто</NavLink>
        <NavLink to="/my-future" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Мій розвиток</NavLink>
      </nav>
    </header>
  );
};

export default Header;
