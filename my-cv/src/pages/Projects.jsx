import React from "react";
import { Typography } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Link } from "react-router-dom";
import ProjectTiles from "../components/ProjectTiles";

function Projects() {
  return (
    <div>
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
        Catalog of Functional Curiosities
      </Typography>
      <ProjectTiles github={false} />
    </div>
  );
}

export default Projects;
