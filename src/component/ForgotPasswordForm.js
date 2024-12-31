'use client'

import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'next/link';
import theme from './theme/theme';

export default function ForgotPasswordForm() {
  return (
<>   

      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
           padding:'20px'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: theme.palette.btncolor.main }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography color={theme.palette.txtcolor.header}  fontSize={'20px'} fontWeight={'normal'}>
          Forgot Password
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
          Enter your email address below and we'll send you a link to reset your password.
        </Typography>
        <Box noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'gray',
                },
                '&:hover fieldset': {
                  borderColor: theme.palette.txtfieldcolor.main,
                },
                '&.Mui-focused fieldset': {
                  borderColor: theme.palette.txtfieldcolor.main,
                },
              },
              '& .MuiInputLabel-root': {
                '&:hover': {
                  color: theme.palette.txtfieldcolor.main,
                },
                '&.Mui-focused': {
                  color: theme.palette.txtfieldcolor.main,
                },
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor:theme.palette.btncolor.main,
              '&:hover': {
                bgcolor: theme.palette.btncolor.main,
              },
              '&:active': {
                bgcolor: theme.palette.btncolor.main,
              },
            }}
            disableRipple
          >
            Send Reset Link
          </Button>
          <Box textAlign="center" sx={{ mt: 2 }}>
            <Typography variant="body2"  sx={{ color: theme.palette.txtcolor.main }}>
              <Link href="/signin" passHref>
                Remember your password? Sign in
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
   
    </>
  );
}
