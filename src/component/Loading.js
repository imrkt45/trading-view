'use client';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

export default function LoadingChart() {
  return (
    <Box
      sx={{
        width: 100,
        height: 70,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          height: 50,
          width: 4,
          backgroundColor: 'black',
          left: 10,
          bottom: 10,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 60,
          height: 4,
          backgroundColor: 'black',
          left: 10,
          bottom: 10,
        }}
      />
      <motion.svg
        width="60"
        height="40"
        viewBox="0 0 60 40"
        style={{
          position: 'absolute',
          left: 10,
          bottom: 10,
        }}
      >
        <motion.path
          d="M0 30 L15 20 L30 25 L45 10 L60 15"
          fill="transparent"
          stroke="black"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
      </motion.svg>
    </Box>
  );
}
