'use client';

import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import theme from './theme/theme';
import CustomTextField from './CustomTextField';

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: theme.palette.btncolor.main }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography color={theme.palette.txtcolor.header} fontSize={'20px'} fontWeight={'normal'}>
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <CustomTextField
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <CustomTextField
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              showPasswordToggle
              showPassword={showPassword}
              handleClickShowPassword={handleClickShowPassword}
              handleMouseDownPassword={handleMouseDownPassword}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  size="small"
                  sx={{
                    color: theme.palette.btncolor.main,
                    '&.Mui-checked': {
                      color: theme.palette.btncolor.main,
                    },
                  }}
                />
              }
              label={<Typography sx={{ color: theme.palette.txtcolor.main }}>Remember me</Typography>}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: theme.palette.btncolor.main,
                '&:hover': {
                  bgcolor: theme.palette.btncolor.main,
                },
                '&:active': {
                  bgcolor: theme.palette.btncolor.main,
                },
              }}
              disableRipple
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Typography variant="body2" sx={{ color: theme.palette.txtcolor.main }}>
                  <Link href="/forgotPassword" passHref>
                    Forgot password?
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ color: theme.palette.txtcolor.main }}>
                  <Link href="/signup" passHref>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
     
    </>
  );
}
