import React from "react";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import projects from "../data/projects.json";
import parse from "html-react-parser";

function ProjectTiles({ github }) {
  console.log("whyyyyyyy", github);
  return (
    <Box className="project-box">
      {projects.map((project) => (
        <a href={github ? project.github : project.link} target="_blank">
          <Card key={project.id} className="project-card">
            <Typography className="project-heading" variant="h3">
              {project.heading}
            </Typography>
            <CardContent>
              <Typography className="project-desc" variant="body2">
                {project.description}
              </Typography>
            </CardContent>
            <CardMedia sx={{ height: 300 }} image={project.image} />
          </Card>
        </a>
      ))}
    </Box>
  );
}

export default ProjectTiles;
