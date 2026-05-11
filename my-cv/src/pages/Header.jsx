import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  // A helper function to determine if a link is active
  const isActive = (path) => location.pathname === path;

  // Scientific styling for the active "Tab"
  const activeStyle = {
    color: "#b87333", // Matching your copper border
    fontWeight: "bold",
    borderBottom: "2px solid #b87333",
    borderRadius: 0, // Keeps the underline sharp and "drafted"
    backgroundColor: "rgba(184, 115, 51, 0.08)", // A faint metallic wash
  };
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: "1px solid #b87333" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography id="myname" variant="body1" sx={{ fontWeight: "medium" }}>
          Bernadette Jacobs | Intermediate Software Developer
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            id="header-link"
            component={Link}
            to="/"
            className={isActive("/") ? "active" : "inactive"}
            startIcon={<i className="fa-regular fa-house linkicon"></i>}
            sx={{ color: "text.primary", textTransform: "none" }}
          >
            Home
          </Button>
          <Button
            component={Link}
            id="header-link"
            to="/About"
            className={isActive("/About") ? "active" : "inactive"}
            startIcon={<i className="fa-solid fa-circle-info linkicon"></i>}
            sx={{ color: "text.primary", textTransform: "none" }}
          >
            About Me
          </Button>

          <Button
            component={Link}
            id="header-link"
            to="/Projects"
            className={isActive("/Projects") ? "active" : "inactive"}
            startIcon={<i className="fa-brands fa-r-project linkicon"></i>}
            sx={{ color: "text.primary", textTransform: "none" }}
          >
            Projects
          </Button>

          <Button
            component={Link}
            id="header-link"
            to="/Exp"
            className={isActive("/Exp") ? "active" : "inactive"}
            startIcon={<i className="fa-solid fa-building linkicon"></i>}
            sx={{ color: "text.primary", textTransform: "none" }}
          >
            Work Experience
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
