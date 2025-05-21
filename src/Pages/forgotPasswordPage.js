'use client';

import {
  Box,
  Button,
  Typography,
  TextField,
  Paper,
  useMediaQuery,
  useTheme,
  Link,
} from '@mui/material';
import { useForm } from 'react-hook-form';

export default function ForgotPasswordPage() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Forgot Password Email:', data.email);
    // TODO: Send reset link to email via backend
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
        py: { xs: 5, sm: 8 },
        backgroundColor: '#f9f9f9',
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
          Forgot Password
        </Typography>

        <Typography
          variant="body2"
          textAlign="center"
          mb={3}
          color="text.secondary"
        >
          Enter your email and we’ll send you a link to reset your password.
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
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
            Send Reset Link
          </Button>
        </Box>

        <Typography
          variant="body2"
          textAlign="center"
          mt={3}
          color="text.secondary"
        >
          Remember your password?{' '}
          <Link href="/signin" underline="hover" color="#3aa44a" fontWeight="bold">
            Sign In
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}
