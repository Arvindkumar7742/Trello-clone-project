import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

import logo from "../assets/trello.webp";

const Navbar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/boards");
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#026aa7" }}>
      <Toolbar
        sx={{
          maxWidth: "1200px",
          width: "100%",
          mx: "auto",
          position: "relative",
        }}
      >
        {/* Left Section: Home Icon and Boards */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="home"
            onClick={handleHomeClick}
            sx={{ mr: "2px", fontSize: ["0.8rem", "1rem", "10rem"] }}
          >
            <HomeIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer", fontSize: ["0.8rem", "1rem", "1.1rem"] }}
            onClick={handleHomeClick}
          >
            Boards
          </Typography>
        </Box>

        {/* Center Section: Trello Logo */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt="Trello Logo"
            style={{
              height: "32px",
              width: "250px",
              objectFit: "cover",
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
