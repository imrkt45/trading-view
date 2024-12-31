'use client';

import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import theme from '../../component/theme/theme';
import CustomTextField from '../../component/CustomTextField';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword'),
    });
  };

  return (
    <>
      <Container component="main" maxWidth="xs" sx={{ bgcolor: '#b2b2d4', borderRadius: '3%' }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: theme.palette.btncolor.main }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography color={theme.palette.txtcolor.header} fontSize={'20px'} fontWeight={'normal'}>
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <CustomTextField
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <CustomTextField
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
            />
            <CustomTextField
              id="password"
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
              showPasswordToggle
              showPassword={showPassword}
              handleClickShowPassword={handleClickShowPassword}
              handleMouseDownPassword={handleMouseDownPassword}
            />
            <CustomTextField
              id="confirmPassword"
              label="Confirm Password"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              autoComplete="new-password"
              showPasswordToggle
              showPassword={showConfirmPassword}
              handleClickShowPassword={handleClickShowConfirmPassword}
              handleMouseDownPassword={handleMouseDownPassword}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3, mb: 2, bgcolor: theme.palette.btncolor.main,
                '&:hover': {
                  bgcolor: theme.palette.btncolor.main,
                },
                '&:active': {
                  bgcolor: theme.palette.btncolor.main,
                }
              }}
              disableRipple
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography variant="body2" sx={{ color: theme.palette.txtcolor.main }}>
                  <Link href="/signin" passHref>
                    Already have an account? Sign in
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
