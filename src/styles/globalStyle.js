import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  backgroundColor: '#eee',
  fontColor: '#111',
  primary: '#4B6587',
};

export const darkTheme = {
  backgroundColor: '#111',
  fontColor: '#fff',
  primary: '#F0E5CF',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.fontColor};
  }
`;
