'use client';
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import PreviewCard from "../component/PreviewCard";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SearchIcon from "@mui/icons-material/Search";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import BarChartIcon from "@mui/icons-material/BarChart";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import Testimonalsection from "../component/TestimonialsSection"

const features = [
  {
    icon: <WhatshotIcon fontSize="large" />,
    title: "Dynamic Heatmap",
    description:
      "Instantly spot market strength and weakness across multiple assets",
  },
  {
    icon: <SearchIcon fontSize="large" />,
    title: "Smart Scanner",
    description:
      "Filter markets based on your custom criteria and strategy",
  },
  {
    icon: <ShowChartIcon fontSize="large" />,
    title: "TradingView Integration",
    description:
      "Seamlessly integrate analytics with your favorite charting platform",
  },
];

const steps = [
  {
    icon: <VpnKeyIcon fontSize="large" />,
    title: "Connect Your API",
    description: "Securely connect your trading account with read-only access",
  },
  {
    icon: <BarChartIcon fontSize="large" />,
    title: "Visualize Data",
    description: "Access powerful heatmaps and analysis tools",
  },
  {
    icon: <EmojiObjectsIcon fontSize="large" />,
    title: "Gain Insights",
    description: "Make data-driven trading decisions",
  },
];

const LandingPage = () => {
  return (
    <Box mt={{ xs: 4, md: 6 }}>

      <Box display="flex" flexDirection="column" alignItems="center" gap={2} px={2}>
        <Typography
          variant="h5"
          fontWeight={700}
          textAlign="center"
          sx={{ fontSize: { xs: "22px", md: "28px" } }}
        >
          Transform Your Trading Data into Actionable Intelligence
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 500,
            color: "grey",
            maxWidth: "700px",
          }}
        >
          Connect your API key to visualize market trends, scan opportunities,
          and refine your strategy with our advanced heatmap and charting tools.
        </Typography>
        <Button
          sx={{
            width: "200px",
            textTransform: "none",
            bgcolor: "#3aa44a",
            color: "white",
            mt: 2,
            "&:hover": { bgcolor: "#32903f" },
          }}
        >
          Get Started Now
        </Button>
      </Box>


      <Box mt={{ xs: 4, md: 6 }} px={2}>
        <PreviewCard />
      </Box>


      <Box
        sx={{
          bgcolor: "#f9fafb",
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 6 },
          mt: { xs: 6, md: 10 },
        }}
      >
        <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
          How It Works
        </Typography>
        <Grid container spacing={4} justifyContent="center" mt={2}>
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                textAlign="center"
                px={2}
              >
                <Box sx={{ color: "#1a1a1a", mb: 2 }}>{step.icon}</Box>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {step.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>


      <Box sx={{ bgcolor: "#fff", py: { xs: 6, md: 10 }, px: { xs: 2, md: 6 } }}>
        <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
          Key Features
        </Typography>
        <Grid container spacing={4} justifyContent="center" mt={2}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  border: "1px solid #e0e0e0",
                  borderRadius: "12px",
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  textAlign: "left",
                }}
              >
                <Box sx={{ color: "#1a1a1a", mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box >
        <Testimonalsection />
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2} px={2} marginTop={"40px"}>
        <Typography
          variant="h5"
          fontWeight={700}
          textAlign="center"
          sx={{ fontSize: { xs: "22px", md: "28px" } }}
        >
          Ready to Transform Your Trading?
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 500,
            color: "grey",
            maxWidth: "700px",
          }}
        >
          Join thousands of traders who have already improved their strategy
        </Typography>
        <Button
          sx={{
            width: "200px",
            textTransform: "none",
            bgcolor: "#3aa44a",
            color: "white",
            mt: 2,
            "&:hover": { bgcolor: "#32903f" },
          }}
        >
          Create New Account
        </Button>
      </Box>
    </Box>
  );
};

export default LandingPage;
