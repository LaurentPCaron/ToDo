import React from 'react';

import AddButton from '../organims/AddButton';
import Items from '../organims/Items';

const Home = () => {
  return (
    <div style={{ margin: 'auto' }} className='w-75 p-3'>
      <AddButton />
      <Items />
    </div>
  );
};

export default Home;
