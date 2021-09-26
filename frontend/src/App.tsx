import { Person as PersonIcon } from '@mui/icons-material';
import SchoolIcon from '@mui/icons-material/School';
import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import AppWrap, { MenuItem } from './components/AppWrap';
import Routes from './components/Routes';
import { mainTheme } from './styles/MainTheme';

const menuItems: MenuItem[] = [
  {
    label: 'Autores',
    path: '/autores',
    icon: PersonIcon
  },
  {
    label: 'Instituições',
    path: '/instituicoes',
    icon: SchoolIcon
  }
];

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <AppWrap items={menuItems}>
            <Routes />
          </AppWrap>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
