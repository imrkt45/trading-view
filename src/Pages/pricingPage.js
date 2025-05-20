'use client';
import { useState } from 'react';
import {
    Box,
    Grid,
    Typography,
    Button,
    ToggleButton,
    ToggleButtonGroup,
    Paper,
    useTheme,
    useMediaQuery,
} from '@mui/material';

export default function PricingSection() {
    const [billing, setBilling] = useState('monthly');
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    const handleBillingChange = (event, newBilling) => {
        if (newBilling !== null) {
            setBilling(newBilling);
        }
    };

    const getPrice = (basePrice) => {
        return billing === 'yearly' ? basePrice * 12 * 0.8 : basePrice;
    };

    const plans = [
        {
            title: 'Premium',
            basePrice: 99,
            features: [
                'All Pro features',
                'Premium support',
                'Unlimited scanners',
                'Priority alerts',
            ],
            buttonVariant: 'outlined',
        },
    ];

    return (
        <Box sx={{ py: 6, px: 2, textAlign: 'center' }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Pricing
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Choose the right plan for you
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                <ToggleButtonGroup
                    value={billing}
                    exclusive
                    onChange={handleBillingChange}
                    sx={{
                        borderRadius: '999px',
                        border: '1px solid #3aa44a',
                        overflow: 'hidden',
                    }}
                >
                    <ToggleButton
                        value="monthly"
                        disableRipple
                        sx={{
                            px: isSmall ? 2 : 4,
                            py: isSmall ? 0.5 : 1,
                            border: 'none',
                            color: billing === 'monthly' ? 'white' : 'black',
                            backgroundColor: billing === 'monthly' ? '#3aa44a' : 'white',
                            fontWeight: 600,
                            textTransform: 'none',
                            '&.Mui-selected': {
                                backgroundColor: '#3aa44a',
                                color: 'white',
                            },
                            '&.Mui-selected:hover': {
                                backgroundColor: '#3aa44a',
                            },
                            '&:hover': {
                                backgroundColor: billing === 'monthly' ? '#3aa44a' : 'white',
                            },
                        }}
                    >
                        Monthly
                    </ToggleButton>

                    <ToggleButton
                        value="yearly"
                        disableRipple
                        sx={{
                            px: isSmall ? 2 : 4,
                            py: isSmall ? 0.5 : 1,
                            border: 'none',
                            color: billing === 'yearly' ? 'white' : 'black',
                            backgroundColor: billing === 'yearly' ? '#3aa44a' : 'white',
                            fontWeight: 600,
                            textTransform: 'none',
                            '&.Mui-selected': {
                                backgroundColor: '#3aa44a',
                                color: 'white',
                            },
                            '&.Mui-selected:hover': {
                                backgroundColor: '#3aa44a',
                            },
                            '&:hover': {
                                backgroundColor: billing === 'yearly' ? '#3aa44a' : 'white',
                            },
                        }}
                    >
                        Yearly
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>

            <Grid container spacing={4} justifyContent="center">
                {plans.map((plan) => {
                    const totalPrice = getPrice(plan.basePrice);
                    const displayPrice = billing === 'yearly' ? `${totalPrice.toFixed(0)}` : `${totalPrice}`;
                    const monthlyEquivalent = (plan.basePrice * 0.8).toFixed(2);

                    return (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={plan.title}
                            sx={{ display: 'flex' }}
                        >
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 3,
                                    borderRadius: 2,
                                    height: '100%',
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Box>
                                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                                        {plan.title}
                                    </Typography>

                                    <Box sx={{ mb: 1 }}>
                                        <Typography variant="h5" fontWeight="bold">
                                            ${displayPrice}
                                            <Typography
                                                variant="body2"
                                                component="span"
                                                sx={{ ml: 0.5 }}
                                            >
                                                /{billing}
                                            </Typography>
                                        </Typography>

                                        {billing === 'yearly' && (
                                            <>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    sx={{ mt: 0.5 }}
                                                >
                                                    ${monthlyEquivalent} /month
                                                </Typography>

                                                <Box
                                                    sx={{
                                                        display: 'inline-block',
                                                        mt: 1,
                                                        px: 1.2,
                                                        py: 0.3,
                                                        fontSize: '0.75rem',
                                                        backgroundColor: '#e6f4ea',
                                                        color: '#2e7d32',
                                                        borderRadius: '999px',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    Save 20%
                                                </Box>
                                            </>
                                        )}
                                    </Box>

                                    <Box component="ul" sx={{ textAlign: 'left', px: 2 }}>
                                        {plan.features.map((feature) => (
                                            <li key={feature}>
                                                <Typography variant="body2">{feature}</Typography>
                                            </li>
                                        ))}
                                    </Box>
                                </Box>

                                <Button
                                    variant={plan.buttonVariant}
                                    color="success"
                                    sx={{
                                        mt: 3,
                                        borderRadius: 2,
                                        fontWeight: 'bold',
                                        textTransform: 'none',
                                    }}
                                    fullWidth
                                >
                                    Get Started
                                </Button>
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}
