'use client';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../component/images/logo.jpeg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/tools" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Sign In", href: "/signin" },
];

const CustomHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname(); // 👈 Current route

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "white" }}
      elevation={0}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 1,
        }}
      >

        <Box display="flex" alignItems="center">
          <Box
            sx={{
              width: 35,
              height: 35,
              borderRadius: "50%",
              overflow: "hidden",
              mr: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={logo}
              alt="Trading Logo"
              width={35}
              height={35}
              priority
              style={{ objectFit: "cover", imageRendering: "crisp-edges" }}
            />
          </Box>

          <Typography
            variant="h6"
            sx={{
              color: "black",
              display: { xs: "none", md: "block" },
            }}
          >
            TradeInjection
          </Typography>
        </Box>


        {!isMobile && (
          <Box display="flex" gap={2}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Button
                  key={item.label}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: isActive ? "#3aa44a" : "black",
                    borderRadius: 0,
                    textTransform: "none",
                    fontSize: "17px",
                  }}
                  disableRipple
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
        )}


        {isMobile && (
          <>
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <Box
                sx={{ width: 200, display: "flex", flexDirection: "column", p: 2 }}
                role="presentation"
                onClick={() => setDrawerOpen(false)}
              >
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Button
                      key={item.label}
                      component={Link}
                      href={item.href}
                      sx={{
                        color: isActive ? "#3aa44a" : "black",
                        justifyContent: "flex-start",
                        textTransform: "none",
                        fontSize: "16px",
                        py: 1,
                      }}
                    >
                      {item.label}
                    </Button>
                  );
                })}
              </Box>
            </Drawer>
          </>
        )}
      </Box>
    </AppBar>
  );
};

export default CustomHeader;
