import React from "react";
import { Box, Popover, Typography, Modal } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import ScienceIcon from "@mui/icons-material/Science";
import education from "../data/education.json";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";

function Education() {
  const iconMap = {
    education: <SchoolIcon />,
    coding: <CodeIcon />,
    teaching: <ScienceIcon />,
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeEvent, setActiveEvent] = React.useState(null);

  const handlePopoverOpen = (event, cert) => {
    setAnchorEl(event.currentTarget);
    setActiveEvent(cert);
  };

  const handlePopoverClose = () => {
    setActiveEvent(null);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <div className="education-timeline">
      <Typography
        variant="h4"
        className="content-heading"
        sx={{ mb: 4, fontWeight: "bold", textAlign: "center", width: "100%" }}
      >
        My Continuous Growth
      </Typography>
      <Timeline position="alternate">
        {education.map((cert) => (
          <TimelineItem key={cert.id}>
            <TimelineContent id="timelineeventopp">
              {cert.institute}
            </TimelineContent>
            <TimelineSeparator>
              <TimelineDot
                className={`${cert.icon}icon edu_dot`}
                aria-owns={open ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onClick={(e) => handlePopoverOpen(e, cert)}
              >
                {iconMap[cert.icon]}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineOppositeContent id="timelineevent">
              {cert.cert}
            </TimelineOppositeContent>
          </TimelineItem>
        ))}
        <Modal
          open={open}
          onClose={handlePopoverClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,

              boxShadow: 24,
              p: 4,
              borderRadius: "8px",
            }}
            className="edu_modal"
          >
            {activeEvent ? (
              <>
                <Typography
                  id={`${activeEvent.icon}_popover`}
                  className={`${activeEvent.icon}_typography`}
                  sx={{
                    fontWeight: "bold",
                    lineHeight: 1.5,
                    textAlign: "left",
                    mb: 2,
                  }}
                >
                  {activeEvent.cert}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    lineHeight: 1.5,
                    textAlign: "left",
                  }}
                >
                  {activeEvent.description}
                </Typography>
              </>
            ) : (
              <Typography>Loading...</Typography>
            )}
          </Box>
        </Modal>
      </Timeline>
    </div>
  );
}

export default Education;
