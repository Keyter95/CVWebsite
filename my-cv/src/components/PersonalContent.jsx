import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Button,
  Collapse,
  Card,
  CardContent,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SportsRugbyIcon from "@mui/icons-material/SportsRugby";
import PetsIcon from "@mui/icons-material/Pets";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import ParkIcon from "@mui/icons-material/Park";
import InfoIcon from "@mui/icons-material/Info";
import content from "../data/personal_content.json";
import personal from "../data/personal_life.json";
import parse from "html-react-parser";

function PersonalContent() {
  const icons = {
    sport: <SportsRugbyIcon />,
    adventure: <ParkIcon />,
    family: <PetsIcon />,
    reading: <AutoStoriesIcon />,
    athlete: <DirectionsRunIcon />,
  };

  const [openDrawer, setOpenDrawer] = useState(null);

  const toggleDrawer = (drawerName) => {
    setOpenDrawer(openDrawer === drawerName ? null : drawerName);
  };

  return (
    <Box className="personal-content">
      <Typography
        variant="h4"
        className="content-heading"
        sx={{ mb: 4, fontWeight: "bold", textAlign: "center", width: "100%" }}
      >
        Hi! Allow me to give you a small taste of who I am!
      </Typography>

      <Box className="content-btns">
        <Stack
          direction="row"
          spacing={2}
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
        >
          {content.map((tile) => (
            <Button
              key={tile.id}
              variant="contained"
              className={`content-btn ${openDrawer === tile.id ? "open" : "closed"}`}
              onClick={() => toggleDrawer(tile.id)}
            >
              {icons[tile.type]}
              {tile.heading}
            </Button>
          ))}
        </Stack>
      </Box>

      <Box
        className="content-body"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          mt: 2,
        }}
      >
        {content.map((drawer) => {
          const images = personal.filter((i) => i.description === drawer.type);
          return (
            <Collapse
              key={drawer.id}
              in={openDrawer === drawer.id}
              timeout="auto"
              unmountOnExit
              sx={{ width: "100%" }}
            >
              <Card
                className="drawer-overall"
                sx={{
                  mx: "auto",
                  width: "100%",
                  maxWidth: "1200px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box className="drawer-card">
                  <CardContent className="drawer-content" sx={{ p: 4 }}>
                    <Typography className="drawer-contents" variant="body1">
                      {parse(drawer.content)}
                    </Typography>
                  </CardContent>
                </Box>
                <ImageList
                  sx={{
                    width: "100%",
                    height: "auto",
                    p: 2,
                  }}
                  variant="quilted"
                  cols={3}
                  gap={12}
                  rowHeight="auto"
                >
                  {images.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                      />
                      <ImageListItemBar
                        title={item.title}
                        subtitle={item.author}
                        actionIcon={
                          <IconButton
                            sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                          >
                            <InfoIcon />
                          </IconButton>
                        }
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Card>
            </Collapse>
          );
        })}
      </Box>
    </Box>
  );
}

export default PersonalContent;
