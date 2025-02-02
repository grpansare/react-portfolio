import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { StepConnector } from '@mui/material';

const educationSteps = [

  {
    label: 'Higher Secondary (12th Grade)',
    description: `Specialized in Science stream with subjects like Physics, Chemistry, and Mathematics.`,
  },
  {
    label: "Bachelor's Degree",
    description: `Pursued a Bachelor's in Computer Science, focusing on programming, algorithms, and databases.`,
  },
  {
    label: "Full Stack Java Developer Certification",
    description: `Earned a Full Stack Java Developer certificate in January 2024, covering Java, Spring Boot, and front-end technologies.`,
  },
];

export default function Education() {
  return (
    <Box sx={{ maxWidth: 500 }} className="mx-auto mt-4">
      <Typography variant="h5" sx={{ mb: 2 }}>Education Journey</Typography>
      <Stepper
        orientation="vertical"
        connector={<StepConnector sx={{ borderLeftWidth: 2, color: 'white' }} />}
      >
        {educationSteps.map((step) => (
          <Step key={step.label} completed>
            <StepLabel
              
            >
              {step.label}
            </StepLabel>
            <Typography sx={{ pl: 4, mt: 1 }}>{step.description}</Typography>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
