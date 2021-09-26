import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { AppWrap, MenuItem } from './components/AppWrap';
import { mainTheme } from './styles/MainTheme';

const menuItems: MenuItem[] = [];

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <AppWrap items={menuItems} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
