import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
  Typography,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import DrawerContent from "../data/about_me.json";
import Education from "../components/Education";
import Professional from "../components/Professional";
import PersonalContent from "../components/PersonalContent";
function AboutMe() {
  const [openDrawer, setOpenDrawer] = useState(null);

  const toggleDrawer = (drawerName) => {
    setOpenDrawer(openDrawer === drawerName ? null : drawerName);
  };
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
        The Anatomy of the Architect
      </Typography>
      <Box sx={{ width: "100%", mt: 3 }}>
        {/* Center the top buttons */}
        <Box
          className="drawer"
          sx={{ display: "flex", justifyContent: "center", mb: 2 }}
        >
          <Stack direction="row" spacing={1}>
            {DrawerContent.map((content) => (
              <Button
                key={content.id}
                className={`drawer-btn ${openDrawer === content.id ? "open" : "closed"}`}
                onClick={() => toggleDrawer(content.id)}
                variant="outlined"
              >
                {content.heading}
              </Button>
            ))}
          </Stack>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {DrawerContent.map((drawer) => (
            <Collapse
              key={drawer.id}
              in={openDrawer === drawer.id}
              timeout="auto"
              unmountOnExit
              sx={{ width: "90%", maxWidth: "1200px" }}
            >
              <Card className="drawer-overall">
                <CardContent sx={{ p: 0 }}>
                  {drawer.type === "personal" ? (
                    <PersonalContent />
                  ) : drawer.type === "education" ? (
                    <Education />
                  ) : (
                    <Professional />
                  )}
                </CardContent>
              </Card>
            </Collapse>
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default AboutMe;
