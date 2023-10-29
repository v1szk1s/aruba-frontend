import * as React from "react";

import MenuIcon from "@mui/icons-material/Menu";

import {
  MenuItem,
  Button,
  Container,
  Menu,
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../../helpers/authContext.js";
import logo from "../../img/aruplace_logo.png";

function Navbar({ setDarkMode }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const { isLogged } = useAuth();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" style={{ boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} width="150px" />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                display: { xs: "block", md: "none" },
                justifyContent: "center",
              }}
            >
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/">
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              component={Link}
              to="/"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Home
            </Button>
            {isLogged && (
              <Button
                onClick={handleCloseNavMenu}
                component={Link}
                to="/marketplace"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Apps
              </Button>
            )}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                setDarkMode((prevMode) => {
                  return !prevMode;
                })
              }
            >
              Toggle Theme
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ ml: 2 }}
              component={Link}
              to="/login"
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ ml: 2 }}
              component={Link}
              to="/register"
            >
              Register
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
