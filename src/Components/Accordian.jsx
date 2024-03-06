import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import Expand from "../../public/Expand.svg"

const MyAccordion = ({accordianTitle}) => {
  return (
    <Accordion sx={{ backgroundColor: '#1D1D1D', color: 'white', borderTop: '1px solid #474747' }}>
      <AccordionSummary
        expandIcon={<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="14" fill="#E3B748"/>
        <path d="M13.0497 19.2266V10.38H15.0568V19.2266H13.0497ZM9.62997 15.8068V13.7997H18.4766V15.8068H9.62997Z" fill="black"/>
        </svg>
        } // Use your custom icon component here
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{accordianTitle}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {/* Your accordion content here */}
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
          libero. Sed cursus ante dapibus diam.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default MyAccordion;
