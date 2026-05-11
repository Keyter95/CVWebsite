import React from "react";
import { Box, Popover, Typography, Modal } from "@mui/material";
import ProjectTiles from "../components/ProjectTiles";
import Blogs from "../components/Blogs";

function Techie() {
  return (
    <Box>
      <Typography
        id="page-heading"
        sx={{
          fontWeight: "bold",
          lineHeight: 1.5,
          textAlign: "center",
          fontSize: 30,
          textTransform: "uppercase",
        }}
      >
        The Lab Manual: Code, Logs & Logic
      </Typography>
      <ProjectTiles github={true} />
      <Blogs />
    </Box>
  );
}

export default Techie;
