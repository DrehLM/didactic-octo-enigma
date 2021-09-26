import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  Typography
} from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiDrawer, { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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

export interface MenuItem {
  label: string;
  path: string;
  icon?: React.ComponentType;
}

interface MenuItemsProps {
  items: MenuItem[];
}

function MenuItems({ items }: MenuItemsProps) {
  const history = useHistory();
  return (
    <List>
      {items.map((item) => (
        <ListItem
          key={item.path}
          button
          onClick={() => history.push(item.path)}
        >
          {item.icon && (
            <ListItemIcon>
              <item.icon />
            </ListItemIcon>
          )}
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  );
}

interface DrawerProps extends MuiDrawerProps {
  open: boolean;
  items: MenuItem[];
}

function Drawer({ open, onClose, items }: DrawerProps) {
  return (
    <MuiDrawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: drawerWidth }} role="presentation">
        <MenuItems items={items} />
      </Box>
    </MuiDrawer>
  );
}

const AppBarHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar
}));

interface AppWrapProps {
  items: MenuItem[];
  children?: React.ReactNode;
}

export function AppWrap({ items, children }: AppWrapProps) {
  const [open, setOpen] = useState(true);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar onClick={() => setOpen(true)} />
      <Drawer open={open} onClose={() => setOpen(false)} items={items} />
      <AppBarHeader />
      <main>{children}</main>
    </Box>
  );
}

export default AppWrap;
