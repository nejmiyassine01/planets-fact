import React from 'react';
import { ThemeProvider } from 'styled-components';

import ButtonToggle from './Components/ButtonToggle/ButtonToggle.component.jsx';

import { lightTheme, darkTheme, GlobalStyles } from './styles/globalStyle.js';
import { useDarkMode } from './styles/useDarkMode.js';

const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <ButtonToggle theme={theme} themeToggler={themeToggler} />
    </ThemeProvider>
  );
};

export default App;