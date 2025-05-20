'use client';
import { Box, Grid, Paper, Typography, Avatar } from "@mui/material";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Crypto Trader",
    quote:
      "The heatmap feature helped me identify market trends I would have missed otherwise.",
    avatar: "/avatars/alex.png",
  },
  {
    name: "Sarah Chen",
    role: "Stock Trader",
    quote:
      "Finally, a platform that makes sense of my trading data. The scanner is incredibly powerful.",
    avatar: "/avatars/sarah.png",
  },
];

const TestimonialsSection = () => {
  return (
    <Box sx={{ bgcolor: "#f9fafb", py: 10, px: { xs: 2, md: 6 } }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight={700}
        gutterBottom
        sx={{ mb: 6 }}
      >
        What Traders Say
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={5} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4 },
                borderRadius: 3,
                bgcolor: "white",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
              }}
            >
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar
                  alt={testimonial.name}
                  src={testimonial.avatar}
                  sx={{ width: 56, height: 56, mr: 2 }}
                />
                <Box>
                  <Typography variant="subtitle1" fontWeight={700}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.role}
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="body1"
                fontWeight={500}
                color="text.secondary"
              >
                "{testimonial.quote}"
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestimonialsSection;
