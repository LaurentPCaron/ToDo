import React from 'react';
import { Link } from 'react-router-dom';

import BtnTextIcon from '../molecules/BtnTextIcon';

const AddBtn = () => {
  return (
    <Link to='todo/add'>
      <BtnTextIcon
        path='/add'
        cy='cyBtnAdd'
        icon='add'
        iconColor='black'
        btnStyle='btn-primary btn-lg btn-block'
        text='New Tasks'
      />
    </Link>
  );
};

export default AddBtn;
