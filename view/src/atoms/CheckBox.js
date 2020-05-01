import React from 'react';

const CheckBox = (props) => {
  return (
    <label align='center'>
      <input
        type='checkbox'
        onChange={props.onChange}
        checked={props.completed}
      />
    </label>
  );
};

export default CheckBox;
