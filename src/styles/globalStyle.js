import { createGlobalStyle } from 'styled-components';
import BackgroundStars from '../assets/images/background-stars.svg';
import BackgroundStarsLight from '../assets/images/background-stars-light.svg';

export const lightTheme = {
  backgroundImg: BackgroundStarsLight,
  backgroundColor: '#eee',
  fontColor: '#111',
  linkColor: '#666',
  primary: '#4B6587',
};

export const darkTheme = {
  backgroundImg: BackgroundStars,
  backgroundColor: '#111',
  fontColor: '#fff',
  linkColor: '#999',
  primary: '#F0E5CF',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: url(${({ theme }) => theme.backgroundImg});
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.fontColor};
    z-index: -1;
    transition: .5s linear;
    overflow: hidden;
  }
`;
