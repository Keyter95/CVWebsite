import { Typography, Card } from "@mui/material";
import PathCards from "../components/PathCards";

function HomePage() {
  return (
    <>
      <div id="home-page">
        <Typography id="page-heading" variant="h2">
          Greetings, Fellow Observer.
        </Typography>
        <Typography id="page-heading" variant="h3">
          {" "}
          Which path of discovery shall we embark upon today?
        </Typography>
        <div id="path-cards">
          <PathCards />
        </div>
      </div>
    </>
  );
}

export default HomePage;
