'use client'
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import theme from  "../component/theme/theme";

export default function Home() {
  return (
    <Container component="main" maxWidth="xs" sx={{ bgcolor: '#b2b2d4', borderRadius: '3%' }}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 3,
          padding: '20px'
        }}
      >
        <Typography color={theme.palette.txtcolor.header} fontSize={'20px'} fontWeight={'normal'} sx={{ marginBottom: 2 }}>
          Empower Your Trading Journey
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ marginBottom: 4 }}>
          Trade smarter with our advanced tools and insights
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Link href="/signin" passHref prefetch>
            <Button
              variant="contained"
              sx={{
                bgcolor: theme.palette.btncolor.main,
                '&:hover': {
                  bgcolor: theme.palette.btncolor.main,
                },
                '&:active': {
                  bgcolor: theme.palette.btncolor.main,
                }
              }}
            >
              Sign In
            </Button>
          </Link>
          <Link href="/signup" passHref prefetch>
            <Button
              variant="contained"
              sx={{
                bgcolor: theme.palette.btncolor.main,
                '&:hover': {
                  bgcolor: theme.palette.btncolor.main,
                },
                '&:active': {
                  bgcolor: theme.palette.btncolor.main,
                }
              }}
            >
              Sign Up
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
