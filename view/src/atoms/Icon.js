import React from 'react';
const Icon = ({ cy, icon, color, size }) => {
  return (
    <i
      className={`material-icons`}
      data-test={cy}
      style={{
        fontSize: `${size || 24}px`,
        color: `${color || 'black'}`,
        verticalAlign: 'text-bottom',
      }}
    >
      {icon || 'broken_image'}
    </i>
  );
};

export default Icon;
