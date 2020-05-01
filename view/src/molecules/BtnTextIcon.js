import React from 'react';

import Icon from '../atoms/Icon';

const BtnTextIcon = ({
  cy,
  text,
  btnStyle,
  icon,
  iconCy,
  iconColor,
  iconSize,
}) => {
  return (
    <div>
      <button
        type='button'
        className={`btn ${btnStyle || 'btn-primary'}`}
        data-test={cy}
      >
        <Icon icon={icon} color={iconColor} size={iconSize} />
        {text}
      </button>
    </div>
  );
};

export default BtnTextIcon;
