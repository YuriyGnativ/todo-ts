import React, { useState } from 'react';
import { Button, Popover, Box } from '@mui/material';

import SignUpProviderBtn from '../signup-provider-btn';

const LoginPopover = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const handleOpenLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseLogin = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        sx={{ color: 'white', marginLeft: 'auto' }}
        onClick={handleOpenLogin}
      >
        Login
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        onClose={handleCloseLogin}
      >
        <Box
          sx={{
            p: '15px'
          }}
        >
          <SignUpProviderBtn />
        </Box>
      </Popover>
    </>
  );
};

export default LoginPopover;
