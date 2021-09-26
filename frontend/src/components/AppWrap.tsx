import MenuIcon from '@mui/icons-material/Menu';
import { Box, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiDrawer, { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';
import React, { useState } from 'react';
import logo from '../assets/logo512.png';

const drawerWidth = 250;

function AppBar({ onClick }: MuiAppBarProps) {
  return (
    <MuiAppBar position="fixed" onClick={onClick}>
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
  );
}

interface DrawerProps extends MuiDrawerProps {
  open: boolean;
}

function Drawer({ open, onClose }: DrawerProps) {
  return (
    <MuiDrawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: drawerWidth }} role="presentation"></Box>
    </MuiDrawer>
  );
}

export function AppWrap() {
  const [open, setOpen] = useState(true);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar onClick={() => setOpen(true)} />
      <Drawer open={open} onClose={() => setOpen(false)} />
    </Box>
  );
}

export default AppWrap;
