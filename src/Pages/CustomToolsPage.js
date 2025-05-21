"use client"
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SearchIcon from "@mui/icons-material/Search";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { useRouter } from "next/navigation";

const features = [
    {
        icon: <WhatshotIcon fontSize="large" />,
        title: "Heatmap",
        description:
            "Visualize market performance across sectors and assets with our interactive heatmap tool.",
    },
    {
        icon: <SearchIcon fontSize="large" />,
        title: "Scanner",
        description:
            "Find trading opportunities with customizable technical and fundamental scanners.",
    },
    {
        icon: <ShowChartIcon fontSize="large" />,
        title: "TradingView Chart",
        description:
            "Advanced charting platform with technical indicators and drawing tools.",
    },
];

const CustomToolsPage = () => {
    const router = useRouter();
    return (
        <Box sx={{ bgcolor: "#fff", py: { xs: 6, md: 10 }, px: { xs: 2, md: 6 } }}>
            <Typography
                variant="h4"
                align="start"
                fontWeight={700}
                gutterBottom
                sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" } }}
            >
                Trading Tools
            </Typography>

            <Grid container spacing={4} justifyContent="center" mt={2}>
                {features.map((feature, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper
                            elevation={0}
                            sx={{
                                border: "1px solid #e0e0e0",
                                borderRadius: "12px",
                                p: { xs: 3, md: 4 },
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                textAlign: "left",
                            }}
                        >
                            <Box display="flex" alignItems="center" gap={1} mb={1.5}>
                                <Box sx={{ color: "#1a1a1a" }}>{feature.icon}</Box>
                                <Typography variant="h6" fontWeight={700} gutterBottom>
                                    {feature.title}
                                </Typography>
                            </Box>

                            <Typography variant="body1" color="text.secondary" flexGrow={1}>
                                {feature.description}
                            </Typography>

                            <Box mt={2.5} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                <Button
                                    sx={{
                                        color: "white",
                                        textTransform: "none",
                                        px: 2,
                                        py: 1,
                                        gap: 1,
                                        bgcolor: "#3aa44a",
                                        width: "fit-content",
                                        "&:hover": {
                                            bgcolor: "#31893f",
                                        },

                                    }}
                                    onClick={() => {
                                        if (feature.title === "TradingView Chart") {
                                            router.push("/tradingViewChart");
                                        } else {
                                            console.log(`${feature.title} tool clicked`);
                                        }
                                    }}
                                >
                                    <OpenInNewRoundedIcon fontSize="small" sx={{ mb: "1px" }} />
                                    Launch Tool
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CustomToolsPage;
