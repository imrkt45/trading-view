'use client';

import {
  Box,
  Button,
  Typography,
  TextField,
  Paper,
  useMediaQuery,
  useTheme,
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
          Forgot Password
        </Typography>

        <Typography
          variant="body2"
          textAlign="center"
          mb={2}
          color="text.secondary"
        >
          Enter your email and we'll send you a link to reset your password.
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
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
            Send Reset Link
          </Button>
        </Box>

        <Typography
          variant="body2"
          textAlign="center"
          mt={3}
          color="text.secondary"
        >
          Remember your password? <a href="/signin">Sign In</a>
        </Typography>
      </Paper>
    </Box>
  );
}
