import React, { useState } from "react";
import { Box, Typography, Tooltip, Paper } from "@mui/material";
import SkeletonAnatomy from "../components/SkeletonAnatomy";

export default function Philosopher() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <SkeletonAnatomy />
    </Box>
  );
}
