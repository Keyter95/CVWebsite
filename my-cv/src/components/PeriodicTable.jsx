import React from "react";
import { Box, Paper, Typography, Tooltip } from "@mui/material";
import skills from "../data/skills.json";

function PeriodicTable() {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(9, 1fr)",
          gridTemplateRows: "auto",
          gap: 1,
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto",
          overflowX: "auto",
          height: "100%",
          overflow: "visible",
          padding: "20px",
        }}
      >
        {skills.map((skill) => (
          <Tooltip
            className="table_tool"
            key={skill.id}
            title={skill.description}
          >
            <Paper
              className={`${skill.type}_skill`}
              sx={{
                gridColumn: skill.col,
                gridRow: skill.row,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: skill.color,
                aspectRatio: "1 / 1",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "transform 0.2s",
                "&:hover": { transform: "scale(1.1)", zIndex: 10 },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {skill.symbol}
              </Typography>
            </Paper>
          </Tooltip>
        ))}
      </Box>
    </>
  );
}

export default PeriodicTable;
