import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import EventIcon from '@mui/icons-material/Event';
import PushPinIcon from '@mui/icons-material/PushPin';
import ConstructionIcon from '@mui/icons-material/Construction';
import DescriptionIcon from '@mui/icons-material/Description';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import AppWrap, { MenuItem } from './components/AppWrap';
import Routes from './components/Routes';
import { mainTheme } from './styles/MainTheme';
import { CssBaseline } from '@mui/material';

const menuItems: MenuItem[] = [
  {
    label: 'Autores',
    path: '/autores',
    icon: PersonIcon,
  },
  {
    label: 'Eventos',
    path: '/eventos',
    icon: PushPinIcon,
  },
  {
    label: 'Edições',
    path: '/edicoes',
    icon: EventIcon,
  },
  {
    label: 'Instituições',
    path: '/instituicoes',
    icon: SchoolIcon,
  },
  {
    label: 'Publicações',
    path: '/publicacoes',
    icon: DescriptionIcon,
  },
  {
    label: 'Tags',
    path: '/tags',
    icon: LocalOfferIcon,
  },
  {
    label: 'Palavras-chave',
    path: '/palavras-chave',
    icon: VpnKeyIcon,
  },
  {
    label: 'Testes',
    path: '/testes',
    icon: ConstructionIcon,
  },
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
