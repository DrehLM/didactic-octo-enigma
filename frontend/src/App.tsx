import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { AppWrap } from './components/AppWrap';
import { mainTheme } from './styles/MainTheme';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <AppWrap />
    </ThemeProvider>
  );
}

export default App;
