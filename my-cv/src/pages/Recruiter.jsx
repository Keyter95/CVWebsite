import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import PeriodicTable from "../components/PeriodicTable";
import Contact from "../components/Contact";
function Recruiter() {
  return (
    <div className="recruiter_box">
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
        Periodic Table of Competencies
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          gap: 4,
        }}
      >
        {/* 1. THE TABLE */}
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <PeriodicTable />
        </Box>

        <Box className="legend_container">
          <Paper
            sx={{
              p: 1,
              px: 2,
              minWidth: "150px",
              textAlign: "center",
            }}
            className="nonmetal_skill"
          >
            Coding Related Skills
          </Paper>
          <Paper
            sx={{ p: 1, px: 2, minWidth: "150px", textAlign: "center" }}
            className="metal_skill"
          >
            Education Related Skills
          </Paper>
          <Paper
            sx={{ p: 1, px: 2, minWidth: "150px", textAlign: "center" }}
            className="metalloid_skill"
          >
            Integrated Skills
          </Paper>
        </Box>
        <Box className="recruiter_options">
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
            Professional Vitality & Contact
          </Typography>
          <Box>
            <Contact />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Recruiter;
