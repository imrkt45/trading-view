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
        // TODO: Connect to your auth system or API
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
                    maxWidth: 400,
                    width: '100%',
                    borderRadius: 3,
                }}
            >
                <Typography variant="h5" fontWeight="bold" gutterBottom textAlign="center">
                    Sign In
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
                        sx={{
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
                        }}
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
                        sx={{
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
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

              
                    <Box textAlign="right" mt={1} mb={2}>
                        <Link href="/forgotPassword" underline="hover" sx={{ cursor: 'pointer', fontSize: '0.875rem' }}>
                            Forgot Password?
                        </Link>
                    </Box>

                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="success"
                        sx={{ mt: 1, py: 1, fontWeight: 'bold', textTransform: 'none' }}
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
                    Don’t have an account? <a href="/signup">Sign Up</a>
                </Typography>
            </Paper>
        </Box>
    );
}
