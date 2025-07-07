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
import { useForm } from 'react-hook-form';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    
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
      minHeight={{ xs: 'auto', md: '100vh' }}
      px={2}
      py={{ xs: 4, sm: 6 }}
      sx={{
        background: '#f9f9f9',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, sm: 5 },
          maxWidth: 420,
          width: '100%',
          borderRadius: 4,
          boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          textAlign="center"
          sx={{
            fontSize: { xs: '1.5rem', sm: '1.7rem' },
            color: '#2e7d32',
          }}
        >
          Welcome Back
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          mb={3}
        >
          Please enter your credentials to sign in.
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
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
            variant="outlined"
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
                    aria-label="toggle password visibility"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Box textAlign="right" mt={1} mb={2}>
            <Link
              href="/forgotPassword"
              underline="hover"
              sx={{
                fontSize: '0.875rem',
                color: '#2e7d32',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Forgot Password?
            </Link>
          </Box>

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              mt: 1,
              py: 1.2,
              fontWeight: 'bold',
              textTransform: 'none',
              backgroundColor: '#3aa44a',
              '&:hover': {
                backgroundColor: '#2e7d32',
              },
            }}
          >
            Sign In
          </Button>
        </Box>

        <Typography
          variant="body2"
          textAlign="center"
          mt={3}
          color="text.secondary"
        >
          Don’t have an account?{' '}
          <Link href="/signup" underline="hover" color="#3aa44a">
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}
