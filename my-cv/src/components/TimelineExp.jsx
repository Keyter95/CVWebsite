import React from "react";
import { Paper, Box, Popover, Typography } from "@mui/material";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SchoolIcon from "@mui/icons-material/School";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ScienceIcon from "@mui/icons-material/Science";
import CalculateIcon from "@mui/icons-material/Calculate";
import DevicesIcon from "@mui/icons-material/Devices";
import WorkExperience from "../data/work_exp.json";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";

function TimelineExp() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeJob, setActiveJob] = React.useState(null);

  const handlePopoverOpen = (event, job) => {
    setAnchorEl(event.currentTarget);
    setActiveJob(job);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const iconMap = {
    LaptopMacIcon: <LaptopMacIcon />,
    SchoolIcon: <SchoolIcon />,
    SupervisorAccountIcon: <SupervisorAccountIcon />,
    CalculateIcon: <CalculateIcon />,
    ScienceIcon: <ScienceIcon />,
    DevicesIcon: <DevicesIcon />,
  };

  const open = Boolean(anchorEl);
  return (
    <Timeline position="alternate">
      {WorkExperience.map((job) => (
        <TimelineItem key={job.id}>
          <TimelineOppositeContent
            id="timelineeventopp"
            sx={{
              color: "text.secondary",
            }}
          >
            {job.period}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              className={`${job.type}icon`}
              sx={{ bgcolor: `${job.color}.main` }}
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={(e) => handlePopoverOpen(e, job)}
              onMouseLeave={handlePopoverClose}
            >
              {iconMap[job.icon]}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent id="timelineevent" className={job.type}>
            {job.company}
          </TimelineContent>
        </TimelineItem>
      ))}
      <Popover
        sx={{ pointerEvents: "none" }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        onClose={handlePopoverClose}
        slotProps={{
          paper: {
            sx: {
              borderRadius: 3,
              maxWidth: "250px",
              boxShadow: 3,
            },
          },
        }}
      >
        {activeJob && (
          <Box p={2} id="popover_card">
            <Typography
              id={`${activeJob.type}_popover`}
              sx={{
                fontWeight: "bold",
                color: `${activeJob.color}.main`,
                lineHeight: 1.5,
                textAlign: "left",
                marginLeft: 3,
              }}
            >
              {activeJob.role}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                lineHeight: 1.5,
                textAlign: "left",
                marginLeft: 3,
              }}
            >
              {activeJob.description}
            </Typography>
          </Box>
        )}
      </Popover>
    </Timeline>
  );
}

export default TimelineExp;
