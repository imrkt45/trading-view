'use client';

import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  Paper,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import CloseIcon from '@mui/icons-material/Close';

export default function ProfilePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: 'John Doe',
      email: 'johndoe@example.com',
      phone: '+1 123 466 7890',
    },
  });

  const {
    register: registerPassword,
    handleSubmit: handlePasswordSubmit,
    formState: { errors: passwordErrors },
    reset: resetPasswordForm,
    watch: watchPassword,
  } = useForm({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const textFieldStyles = {
    '& label.Mui-focused': { color: '#3aa44a' },
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: '#ccc' },
      '&:hover fieldset': { borderColor: '#3aa44a' },
      '&.Mui-focused fieldset': { borderColor: '#3aa44a' },
    },
  };

  const onSubmit = (data) => {
    console.log('Profile data:', data);
  };

  const onPasswordChange = (data) => {
    console.log('Password changed:', data);
    resetPasswordForm();
    setOpen(false);
  };

  return (
    <Box
      sx={{
        // minHeight: { xs: 'auto', md: '100vh' },
        background: '#f9f9f9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        py: { xs: 4, sm: 6 },
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: { xs: 3, sm: 5 },
          width: '100%',
          maxWidth: 500,
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
          Profile
        </Typography>

        <Avatar
          src="/avatar.jpg"
          alt="Profile Photo"
          sx={{ width: 80, height: 80, mx: 'auto', my: 2 }}
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <TextField
              label="Full Name"
              fullWidth
              {...register('fullName', { required: 'Full Name is required' })}
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
              sx={textFieldStyles}
            />
            <TextField
              label="Email"
              type="email"
              inputMode="email"
              fullWidth
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Enter a valid email',
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={textFieldStyles}
            />
            <TextField
              label="Phone Number"
              type="tel"
              inputMode="tel"
              fullWidth
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^\+?\d{10,15}$/,
                  message: 'Enter a valid phone number',
                },
              })}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              sx={textFieldStyles}
            />

            <Stack
              direction={isMobile ? 'column' : 'row'}
              spacing={2}
              justifyContent="center"
            >
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#3aa44a',
                  '&:hover': { backgroundColor: '#2e7d32' },
                  minWidth: 150,
                }}
              >
                Save Changes
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: '#ccc',
                  '&:hover': {
                    borderColor: '#3aa44a',
                    backgroundColor: '#f1fff3',
                  },
                  minWidth: 150,
                }}
                onClick={() => setOpen(true)}
              >
                Change Password
              </Button>
            </Stack>

            <Button
              variant="outlined"
              color="error"
              fullWidth
              sx={{
                mt: 2,
                borderColor: '#f44336',
                color: '#f44336',
                '&:hover': {
                  backgroundColor: '#fdecea',
                },
              }}
            >
              Log Out
            </Button>
          </Stack>
        </form>
      </Paper>

      {/* Change Password Dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullScreen={isMobile}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>
          Change Password
          <IconButton
            aria-label="Close password dialog"
            onClick={() => setOpen(false)}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <form onSubmit={handlePasswordSubmit(onPasswordChange)}>
          <DialogContent dividers>
            <Stack spacing={2}>
              <TextField
                label="Current Password"
                type="password"
                fullWidth
                {...registerPassword('currentPassword', {
                  required: 'Current password is required',
                })}
                error={!!passwordErrors.currentPassword}
                helperText={passwordErrors.currentPassword?.message}
                sx={textFieldStyles}
              />
              <TextField
                label="New Password"
                type="password"
                fullWidth
                {...registerPassword('newPassword', {
                  required: 'New password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
                error={!!passwordErrors.newPassword}
                helperText={passwordErrors.newPassword?.message}
                sx={textFieldStyles}
              />
              <TextField
                label="Confirm Password"
                type="password"
                fullWidth
                {...registerPassword('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: (value) =>
                    value === watchPassword('newPassword') || 'Passwords do not match',
                })}
                error={!!passwordErrors.confirmPassword}
                helperText={passwordErrors.confirmPassword?.message}
                sx={textFieldStyles}
              />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ px: 3, py: 2 }}>
            <Button onClick={() => setOpen(false)} color="inherit">
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#3aa44a',
                '&:hover': { backgroundColor: '#2e7d32' },
              }}
            >
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}