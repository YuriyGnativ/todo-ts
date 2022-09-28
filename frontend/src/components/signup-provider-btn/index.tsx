import React from 'react';
import { Box, Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

// type SignUpProviderBtnProps = {}

const SignUpProviderBtn = () => {
  return (
    <Box>
      <Button startIcon={<GoogleIcon />}>Signup with Google</Button>
    </Box>
  );
};

export default SignUpProviderBtn;
