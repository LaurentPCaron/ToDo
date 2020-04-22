import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ path, cy }) => {
  return (
    <div>
      <Link
        to={path}
        className='display-1'
        data-test={cy}
        style={{ color: 'black', textDecoration: 'none' }}
      >
        Super ToDo
      </Link>
    </div>
  );
};

export default Header;
