import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { AppWrap, MenuItem } from './components/AppWrap';
import { mainTheme } from './styles/MainTheme';

const menuItems: MenuItem[] = [];

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <AppWrap items={menuItems} />
    </ThemeProvider>
  );
}

export default App;
