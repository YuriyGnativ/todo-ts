import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import { LoginPopover } from '../../components';

const Header = () => {
  return (
    <Box component="header" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography sx={{ pointerEvents: 'none' }}>TODO</Typography>
          <LoginPopover />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
