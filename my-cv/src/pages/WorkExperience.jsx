import React from "react";
import { Paper, Box, Popover, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import TimelineExp from "../components/TimelineExp";

function WorkExperience() {
  return (
    <div id="work-exp">
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
          The Complete Compendium of Past Endeavors
        </Typography>
        <TimelineExp />
      </Box>
    </div>
  );
}

export default WorkExperience;
