'use client';
import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ShowChartIcon from '@mui/icons-material/ShowChart';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Tools', href: '/tools' },
  { label: 'About', href: '/about' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

const socialLinks = [
  { icon: <TwitterIcon />, href: 'https://twitter.com' },
  { icon: <LinkedInIcon />, href: 'https://linkedin.com' },
  { icon: <GitHubIcon />, href: 'https://github.com' },
];

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#0a1124', color: '#fff', px: { xs: 4, sm: 10 }, pt: 6, pb: 3, mt: 3 }}>
      <Grid container spacing={4} justifyContent="space-between">

        <Grid item xs={12} md={3}>
          <Box display="flex" alignItems="center" mb={1}>
            <ShowChartIcon sx={{ mr: 1 }} />
            <Typography variant="h6" fontWeight="bold">
              TradeInjection
            </Typography>
          </Box>
          <Typography variant="body2" color="gray">
            Your personal trading <br /> analytics platform
          </Typography>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Quick Links
          </Typography>
          <Box display="flex" flexDirection="column">
            {quickLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                variant="body2"
                sx={{ color: 'gray', width: 'fit-content' }}
                underline="hover"
              >
                {label}
              </Link>
            ))}
          </Box>
        </Grid>

        <Grid item xs={6} sm={4} md={2}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Legal
          </Typography>
          <Box display="flex" flexDirection="column">
            {legalLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                variant="body2"
                sx={{ color: 'gray', width: 'fit-content' }}
                underline="hover"
              >
                {label}
              </Link>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Connect
          </Typography>
          <Box display="flex" gap={1}>
            {socialLinks.map(({ icon, href }, index) => (
              <IconButton key={index} color="inherit" href={href} target="_blank">
                {icon}
              </IconButton>
            ))}
          </Box>
        </Grid>
      </Grid>

      <Box mt={6} borderTop="1px solid #1e253b" pt={3} textAlign="center">
        <Typography variant="body2" color="gray">
          © 2025 TradeInjection. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
