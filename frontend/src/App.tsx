import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { AppBar } from './components/AppBar';
import { mainTheme } from './styles/MainTheme';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <AppBar />
    </ThemeProvider>
  );
}

export default App;
