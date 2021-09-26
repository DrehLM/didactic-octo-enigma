import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  CssBaseline,
  Grid,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import logo from './assets/logo512.png';
import { mainTheme } from './styles/MainTheme';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <img src={logo} alt="Octoper Logo" height="40vh" />
              </Grid>
              <Grid item>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Octoper
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default App;
