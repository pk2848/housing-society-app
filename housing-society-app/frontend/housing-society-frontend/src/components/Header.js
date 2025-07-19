import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div style={{ backgroundColor: '#e9ecef', padding: '10px', textAlign: 'center', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {/* Logo Placeholder */}
      <div style={{ width: '50px', height: '50px', backgroundColor: '#ccc' }}>
        {/* Your logo will go here */}
      </div>

      {/* Title */}
      <h1 style={{ margin: 0 }}>E-Housing Helping Society</h1>

      {/* Navigation */}
      <nav>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex' }}>
          <li style={{ margin: '0 10px' }}><Link to="/">HOME</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/search">SEARCH</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/rent">RENT LIST</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/sell">SELL LIST</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/admin">ADMIN</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/contact">CONTACT US</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
