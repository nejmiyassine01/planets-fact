import { createGlobalStyle } from 'styled-components';
import BackgroundStars from '../assets/images/background-stars.svg';
import BackgroundStarsLight from '../assets/images/background-stars-light.svg';

export const lightTheme = {
  backgroundImg: BackgroundStarsLight,
  backgroundColor: '#eee',
  fontColor: '#111',
  linkColor: '#666',
  hoverColor: '#fff',
  primary: '#4B6587',
  marginSmall: '15px',
  marginMedium: '35px',
  marginLarge: '50px',
};

export const darkTheme = {
  backgroundImg: BackgroundStars,
  backgroundColor: '#111',
  fontColor: '#fff',
  linkColor: '#999',
  hoverColor: '#111',
  primary: '#F0E5CF',
  marginSmall: '15px',
  marginMedium: '35px',
  marginLarge: '50px',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: url(${({ theme }) => theme.backgroundImg});
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.fontColor};
    z-index: -1;
    transition: .5s linear;
  }
`;
