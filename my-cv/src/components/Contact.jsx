import React from "react";
import {
  Box,
  Typography,
  Button,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
} from "@mui/material";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import LinkIcon from "@mui/icons-material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import EmailIcon from "@mui/icons-material/Email";
function Contact() {
  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    alert(`${type} copied to clipboard!`);
  };
  return (
    <>
      <Box className="link_box">
        <Button
          className="cv-btn"
          variant="contained"
          component="a"
          href="/Bernadette Jacobs Resume.pdf"
          download="Bernadette Jacobs Resume.pdf"
        >
          Download Resume
        </Button>
        <Box
          className="speed_dials"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <SpeedDial
            className="speed_dial"
            ariaLabel="Contact Information"
            icon={<PhoneCallbackIcon />}
            direction="right"
          >
            <SpeedDialAction
              className="dial_action"
              icon={<SmartphoneIcon />}
              slotProps={{
                tooltip: {
                  title: "Copy Cellphone Number",
                },
              }}
              onClick={() => {
                handleCopy("0763176943", "Cellphone Number");
              }}
            ></SpeedDialAction>
            <SpeedDialAction
              className="dial_action"
              icon={<EmailIcon />}
              slotProps={{
                tooltip: {
                  title: "Copy Email Address",
                },
              }}
              onClick={() => {
                handleCopy("bernadettejacobs95@gmail.com", "Email");
              }}
            ></SpeedDialAction>
          </SpeedDial>
          <SpeedDial
            className="speed_dial"
            ariaLabel="Relevant Links"
            icon={<LinkIcon />}
            direction="left"
          >
            <SpeedDialAction
              className="dial_action"
              icon={<LinkedInIcon />}
              slotProps={{
                tooltip: {
                  title: "Go to LinkedIn",
                },
              }}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/bernadette-jacobs-042688237/",
                  "_blank",
                )
              }
            ></SpeedDialAction>
            <SpeedDialAction
              className="dial_action"
              icon={<GitHubIcon />}
              slotProps={{
                tooltip: {
                  title: "Go to Github",
                },
              }}
              onClick={() =>
                window.open("https://github.com/Keyter95", "_blank")
              }
            ></SpeedDialAction>
          </SpeedDial>
        </Box>
      </Box>
    </>
  );
}

export default Contact;
