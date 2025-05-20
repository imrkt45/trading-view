  
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/pricing" }, // Assuming a pricing page
    { label: "About", href: "/about" },    // Assuming an about page
    { label: "Sign In", href: "/signin" },
  ];
  
  <AppBar position="static" sx={{ bgcolor: "white", border:"2px solid red" }} elevation={0}>
              <Toolbar>
                <Box
                  sx={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    marginRight: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={logo}
                    alt="Trading Logo"
                    width={25}
                    height={25}
                    priority
                    style={{ objectFit: "cover", imageRendering: "crisp-edges" }}
                  />
                </Box>
                <Typography
                  variant="h6"
                  component="div" // Good practice for semantic HTML
                  sx={{ flexGrow: 1, color: "black" }}
                >
                  TradeInjection
                </Typography>

                {isMobile ? (
                  // Mobile Navigation: Hamburger Menu
                  <>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      color="inherit" // Will inherit from parent, AppBar's color prop can be set if needed
                      sx={{ color: "black" }} // Explicitly set icon color
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      sx={{
                        display: { xs: "block", md: "none" }, // Show only on small screens
                      }}
                    >
                      {navItems.map((item) => (
                        <MenuItem key={item.label} onClick={handleCloseNavMenu}>
                          <Link href={item.href} passHref legacyBehavior>
                            <Typography textAlign="center" sx={{ color: "black", textDecoration: 'none' }}>{item.label}</Typography>
                          </Link>
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                ) : (
                  // Desktop Navigation: Buttons
                  <Box sx={{ display: "flex" }}>
                    {navItems.map((item) => (
                      <Button
                        key={item.label}
                        sx={{
                          color: "black",
                          textTransform: "none",
                          fontSize: "17px",
                          marginLeft: "10px", // Add some spacing between buttons
                        }}
                        disableRipple
                      >
                        <Link href={item.href} passHref legacyBehavior>
                          {/* Apply styles to the Link or an inner Typography for consistency if needed */}
                          <a style={{ textDecoration: 'none', color: 'inherit' }}>{item.label}</a>
                        </Link>
                      </Button>
                    ))}
                  </Box>
                )}
              </Toolbar>
            </AppBar>