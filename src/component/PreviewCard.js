'use client';

import { Box, Typography, Paper } from '@mui/material';

export default function PreviewCard() {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
    <Box
      sx={{
        backgroundColor: '#f5f6f8',
        borderRadius: 3,
        padding: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px', 
      width: '100%',
        maxWidth: '1000px',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          maxWidth: '1000px',
          height: '100%',
          borderRadius: 2,
          backgroundColor: '#2f3848',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" sx={{ color: '#fff' }}>
          Interactive Trading Dashboard Preview
        </Typography>
      </Paper>
    </Box>
    </Box>
  );
}
