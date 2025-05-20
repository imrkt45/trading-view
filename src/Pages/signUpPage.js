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
      display="flex"
      justifyContent="center"
      alignItems="center"
   
    >
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, sm: 4 },
          maxWidth: 420,
          width: '100%',
          borderRadius: 3,
        }}
      >
        <Typography
          variant={isSmall ? 'h6' : 'h5'}
          fontWeight="bold"
          gutterBottom
          textAlign="center"
        >
          Sign Up
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            {...register('name', { required: 'Name is required' })}
            error={!!errors.name}
            helperText={errors.name?.message}
            sx={inputStyles}
          />

          <TextField
            fullWidth
            label="Email"
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
              backgroundColor: '#3aa44a',
              '&:hover': {
                backgroundColor: '#358d3e',
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
          OR
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
            borderColor: '#ccc',
            '&:hover': {
              borderColor: '#3aa44a',
              backgroundColor: '#f1fff3',
            },
          }}
        >
          Sign Up with Google
        </Button>

        <Typography
          variant="body2"
          textAlign="center"
          mt={3}
          color="text.secondary"
        >
          Already have an account? <a href="/signin">Sign In</a>
        </Typography>
      </Paper>
    </Box>
  );
}
