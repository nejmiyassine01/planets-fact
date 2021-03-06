import React from 'react';
import { Redirect, Route } from 'react-router';
import { ThemeProvider } from 'styled-components';

import ButtonToggle from './Components/ButtonToggle/ButtonToggle.component.jsx';
import Header from './Components/Header/Header.component.jsx';
import Planets from './Components/Planets/Planets.component.jsx';

import { lightTheme, darkTheme, GlobalStyles } from './styles/globalStyle.js';
import { useDarkMode } from './styles/useDarkMode.js';

const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <ButtonToggle theme={theme} themeToggler={themeToggler} />
      <Header />
      <Route exact path='/'>
        <Redirect to='/Earth'></Redirect>
      </Route>
      <Planets />
    </ThemeProvider>
  );
};

export default App;
