import React from 'react';

import Icon from '../atoms/Icon';

const BtnIcon = ({
  cy,
  icon,
  onClick,
  btnStyle,
  iconCy,
  iconColor,
  iconSize,
}) => {
  return (
    <button type='button' className='btn' data-test={cy} onClick={onClick}>
      <Icon icon={icon} color={iconColor} size={iconSize} />
    </button>
  );
};

export default BtnIcon;
