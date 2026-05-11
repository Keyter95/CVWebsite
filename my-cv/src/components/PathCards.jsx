import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

function PathCards() {
  return (
    <>
      <Card
        id="recruiter"
        sx={{
          maxWidth: 345,
          minHeight: 400,
          maxHeight: 450,
          textDecoration: "none",
        }}
        component={Link}
        to="/Recruiter"
      >
        <CardContent>
          <Typography id="card-heading" variant="h5" component="div">
            The Recruiter
          </Typography>
          <Typography
            id="card-body"
            variant="body2"
            sx={{ color: "text.secondary" }}
          >
            Looking to hire?
          </Typography>
          <Typography
            id="card-body"
            variant="body2"
            sx={{ color: "text.secondary" }}
          >
            A bird's eye view of my skillset and contact details.
          </Typography>
        </CardContent>
        <CardMedia
          sx={{ height: 300 }}
          image="/recruiter.png"
          title="Ernest Rutherford"
        />
      </Card>
      <Card
        id="techie"
        sx={{
          maxWidth: 345,
          minHeight: 400,
          maxHeight: 550,
          textDecoration: "none",
        }}
        component={Link}
        to="/Techie"
      >
        <CardContent>
          <Typography id="card-heading" variant="h5" component="div">
            The Techie
          </Typography>
          <Typography
            id="card-body"
            variant="body2"
            sx={{ color: "text.secondary" }}
          >
            Looking for codespiration?
          </Typography>
          <Typography
            id="card-body"
            variant="body2"
            sx={{ color: "text.secondary" }}
          >
            All my projects available on GitHub.
          </Typography>
        </CardContent>
        <CardMedia
          sx={{ height: 300 }}
          image="/techie.png"
          title="Ada Lovelace"
        />
      </Card>
      <Card
        id="philosopher"
        sx={{
          maxWidth: 345,
          minHeight: 400,
          maxHeight: 550,
          textDecoration: "none",
        }}
        component={Link}
        to="/Philosopher"
      >
        <CardContent>
          <Typography id="card-heading" variant="h5" component="div">
            The Curious Mind
          </Typography>
          <Typography
            id="card-body"
            variant="body2"
            sx={{ color: "text.secondary" }}
          >
            Looking to understand the Why?
          </Typography>
          <Typography
            id="card-body"
            variant="body2"
            sx={{ color: "text.secondary" }}
          >
            More about me and my coding journey.
          </Typography>
        </CardContent>
        <CardMedia
          sx={{ height: 300 }}
          image="/philosopher.png"
          title="Marie Curie"
        />
      </Card>
    </>
  );
}

export default PathCards;
