import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, CssBaseline, IconButton, Toolbar } from '@mui/material';
import React from 'react';

function App() {
  return (
    <>
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
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default App;
