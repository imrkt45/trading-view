'use client';

import { Box, Typography, Container } from '@mui/material';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

export default function ComingSoonPage() {
  return (
    <Container maxWidth="md"  >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="50vh"
        textAlign="center"
      
      >
        <HourglassBottomIcon sx={{ fontSize: 80, color: '#3aa44a', mb: 2 }} />
        <Typography variant="h4" gutterBottom>
          Something Exciting is Coming Soon!
        </Typography>
        <Typography variant="body1" color="text.secondary">
          We're working hard to bring you something amazing. Stay tuned!
        </Typography>
      </Box>
    </Container>
  );
}
