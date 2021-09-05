import React from 'react';
import * as Bi from 'react-icons/bi';
import { Button } from './ButtonToggle.style';

const ButtonToggle = ({ theme, themeToggler }) => {
  const themeIconToggle = theme === 'light' ? <Bi.BiMoon /> : <Bi.BiSun />;

  return <Button onClick={themeToggler}>{themeIconToggle}</Button>;
};

export default ButtonToggle;
