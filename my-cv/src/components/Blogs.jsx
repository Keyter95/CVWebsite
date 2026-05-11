import React from "react";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import blogs from "../data/blogs.json";

function Blogs() {
  return (
    <Box>
      <Typography
        className="skeleton_heading"
        sx={{
          fontWeight: "bold",
          lineHeight: 1.5,
          textAlign: "center",
          fontSize: 20,
          textTransform: "uppercase",
        }}
      >
        Some recent tech-reads or videos that have inspired and taught me!
      </Typography>
      <Box className="blog-box">
        {blogs.map((blog) => (
          <a href={blog.link} target="_blank">
            <Card key={blog.id} className="blog_cards">
              <Typography className="blog-heading" variant="h3">
                {blog.author}
              </Typography>
              <CardContent>
                <Typography className="blog-desc" variant="body2">
                  {blog.topic}
                </Typography>
              </CardContent>
            </Card>
          </a>
        ))}
      </Box>
    </Box>
  );
}

export default Blogs;
