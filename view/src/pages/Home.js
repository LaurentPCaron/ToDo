import React from 'react';

import AddBtn from '../atoms/AddBtn';
import Items from '../organims/Items';

const App = () => {
  return (
    <div className='w-75 p-3 center'>
      <AddBtn path='/add' cy='cyBtnAdd' />
      <Items />
    </div>
  );
};

export default App;
