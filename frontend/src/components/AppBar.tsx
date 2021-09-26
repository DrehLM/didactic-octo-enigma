import MenuIcon from '@mui/icons-material/Menu';
import { Box, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import React from 'react';
import logo from '../assets/logo512.png';

export function AppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2
            }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container alignItems="center" spacing={1}>
            <Grid item justifyContent="center">
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <img src={logo} alt="Octoper Logo" height="35vh" />
              </Box>
            </Grid>
            <Grid item>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  flexGrow: 1
                }}
              >
                Octoper
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}

export default AppBar;
