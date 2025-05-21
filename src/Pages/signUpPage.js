'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Paper,
  useMediaQuery,
  useTheme,
  Link,
} from '@mui/material';
import { Visibility, VisibilityOff, Google } from '@mui/icons-material';
import { useForm } from 'react-hook-form';

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Sign Up Data:', data);
    // TODO: Send to signup API
  };

  const handleGoogleSignUp = () => {
    console.log('Google Sign Up Clicked');
    // TODO: Add Google Sign-In integration
  };

  const inputStyles = {
    '& label.Mui-focused': {
      color: '#3aa44a',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ccc',
      },
      '&:hover fieldset': {
        borderColor: '#3aa44a',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#3aa44a',
      },
    },
  };

  return (
    <Box
      sx={{
        minHeight: { xs: 'auto', md: '100vh' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        py: { xs: 4, sm: 6 },
        background: '#f9f9f9',
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: { xs: 3, sm: 5 },
          width: '100%',
          maxWidth: 440,
          borderRadius: 4,
          boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          mb={1}
          color="#2e7d32"
          sx={{ fontSize: { xs: '1.5rem', sm: '1.7rem' } }}
        >
          Create Your Account
        </Typography>
        <Typography
          variant="body2"
          textAlign="center"
          color="text.secondary"
          mb={3}
        >
          Join us and start your journey!
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Full Name"
            margin="normal"
            {...register('name', { required: 'Name is required' })}
            error={!!errors.name}
            helperText={errors.name?.message}
            sx={inputStyles}
          />

          <TextField
            fullWidth
            label="Email Address"
            type="email"
            margin="normal"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Enter a valid email',
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={inputStyles}
          />

          <TextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            margin="normal"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            sx={inputStyles}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              py: 1.2,
              fontWeight: 'bold',
              textTransform: 'none',
              fontSize: '1rem',
              backgroundColor: '#3aa44a',
              '&:hover': {
                backgroundColor: '#2e7d32',
              },
            }}
          >
            Sign Up
          </Button>
        </Box>

        <Typography
          variant="body2"
          textAlign="center"
          my={2}
          color="text.secondary"
        >
          — OR —
        </Typography>

        <Button
          fullWidth
          variant="outlined"
          onClick={handleGoogleSignUp}
          startIcon={<Google />}
          sx={{
            py: 1.2,
            textTransform: 'none',
            fontWeight: 'bold',
            fontSize: '0.95rem',
            borderColor: '#ccc',
            '&:hover': {
              borderColor: '#3aa44a',
              backgroundColor: '#f1fff3',
            },
          }}
        >
          Continue with Google
        </Button>

        <Typography
          variant="body2"
          textAlign="center"
          mt={3}
          color="text.secondary"
        >
          Already have an account?{' '}
          <Link href="/signin" underline="hover" color="#3aa44a" fontWeight="bold">
            Sign In
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}
