import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
  Box,
} from "@mui/material";
import SportsIcon from "@mui/icons-material/Sports";
import skills from "../data/professional_skills.json";

function Professional() {
  return (
    <>
      <Box>
        <Typography
          variant="h4"
          className="content-heading"
          sx={{ mb: 4, fontWeight: "bold", textAlign: "center", width: "100%" }}
        >
          The Coach’s Playbook: Tactical Advantage
        </Typography>
      </Box>
      <Box sx={{ maxWidth: 800, p: 4 }}>
        <Stepper orientation="vertical" nonLinear activeStep={-1}>
          {skills.map((step) => (
            <Step key={step.id} active={true}>
              <StepLabel
                slots={{ stepIcon: SportsIcon }}
                StepIconComponent={() => (
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      bgcolor: "#b7b8b9",
                    }}
                  />
                )}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "#00a591", fontFamily: "serif" }}
                >
                  {step.heading}
                </Typography>
              </StepLabel>
              <StepContent>
                <Typography sx={{ color: "#212121", opacity: 0.8 }}>
                  {step.content}
                </Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box>
        <Typography
          id="prof-sent"
          sx={{
            fontWeight: "bold",
            lineHeight: 1.5,
            textAlign: "center",
            fontSize: 15,
            textTransform: "uppercase",
          }}
        >
          In the classroom, I taught the laws of the universe. On the field, I
          coached the laws of the game. In the codebase, I engineer the logic of
          the solution. This is how those worlds intersect.
        </Typography>
      </Box>
    </>
  );
}

export default Professional;
