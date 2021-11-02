import * as React from 'react';
import {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { UseStyles } from '../faq/faqdata';

import Parallax from '../../hooks/parallax';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // border: '1px solid #fff',
  // '&:not(:last-child)': {
  //   borderBottom: 0,
  // },
  '&:before': {
    display: 'none',
  },
  backgroundColor: '#000814',
  color: '#fff',
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color:'#fff' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#001D3D',
  flexDirection: 'row',
  color: '#fff',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid #000',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('');

  const [state, setState] = useState({
    mobileView: false,
  });

  const { root, sectionHeading}= UseStyles();

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);


  


  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : true);
  };
  
  const displayDesktop = () => {
    return (
        <div>
          <Parallax>
          <Typography>
            <div className={sectionHeading}>
              <h1 align="center"> FAQs </h1>
            </div>
          </Typography>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography >When can students apply for Winter of Code?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Please see the program timeline for more detailed information.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography>What programming language(s) should I know to participate in Winter of Code?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              The programming language you need to know depends on which organisation you are interested in working with.
              You should be familiar with the programming language(s) used by that organisation.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <Typography>Will everyone who participates as a student in Winter of Code get WoC schwags?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Winter of Code schwags, access to Manning e-books, schwags from Google Developers, and Qwiklabs credits are only for top contributors of Winter of Code, not for everyone. 
              However, we do promise to have a small token of appreciation in the form of schwags and certificates for everyone who participates in Winter of Code.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
              <Typography >Can I submit more than one proposal?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Yes, each student may submit up to three proposals. However, only one per student may be accepted.
              No more than one proposal per student will be accepted, no matter how many proposals you submit.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
              <Typography >Do I get paid for participating in Winter of Code?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                No, but you get amazing schwags from Winter of Code and lots of fun memories in our open source journey.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
              <Typography >I want to learn more about participating as a mentor in Winter of Code. Where can I find more information?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Read the Mentor Guide How it Works for more information on becoming a Winter of Code mentor.
              You must already be an active community member of the organisation that you wish to mentor for.
              Fill up the form above in the Apply section and join us!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
            <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
              <Typography >What can I do to help spread the word about Winter of Code?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              You can share the message by tweeting about us using the hashtag #WinterofCode or tagging us on your social media posts while you participate in the program or share the posters.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
            <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
              <Typography >Can I participate in Winter of Code as both a mentor and a student?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              No. We want to make sure that each project and student receives sufficient attention, and we feel this could create a bad experience for those involved. Please choose whether participation as a mentor or a student is more appealing to you and plan to apply accordingly.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
            <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
              <Typography>What if I have more questions?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Feel free to mail us at lead@dscnsec.com
              </Typography>
            </AccordionDetails>
          </Accordion>
          </Parallax>
        </div>
    );
  };

  const displayMobile = () => {

    return (
        <div>
     
          <Typography>
            <div className={sectionHeading}>
              <h1 align="center"> FAQs </h1>
            </div>
          </Typography>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>When can students apply for Winter of Code?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Please see the program timeline for more detailed information.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography>What programming language(s) should I know to participate in Winter of Code?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              The programming language you need to know depends on which organisation you are interested in working with.
              You should be familiar with the programming language(s) used by that organisation.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <Typography>Will everyone who participates as a student in Winter of Code get WoC schwags?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Winter of Code schwags, access to Manning e-books, schwags from Google Developers, and Qwiklabs credits are only for top contributors of Winter of Code, not for everyone. 
                However, we do promise to have a small token of appreciation in the form of schwags and certificates for everyone who participates in Winter of Code.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
              <Typography >Can I submit more than one proposal?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Yes, each student may submit up to three proposals. However, only one per student may be accepted.
              No more than one proposal per student will be accepted, no matter how many proposals you submit.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
              <Typography >Do I get paid for participating in Winter of Code?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                No, but you get amazing schwags from Winter of Code and lots of fun memories in our open source journey.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
              <Typography >
                I want to learn more about participating as a mentor in Winter of Code.
                Where can I find more information?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Read the Mentor Guide How it Works for more information on becoming a Winter of Code mentor.
              You must already be an active community member of the organisation that you wish to mentor for.
              Fill up the form above in the Apply section and join us!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
            <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
              <Typography >What can I do to help spread the word about Winter of Code?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              You can share the message by tweeting about us using the hashtag #WinterofCode or tagging us on your social media posts while you participate in the program or share the posters.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
            <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
              <Typography >Can I participate in Winter of Code as both a mentor and a student?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              No. We want to make sure that each project and student receives sufficient attention, and we feel this could create a bad experience for those involved.
              Please choose whether participation as a mentor or a student is more appealing to you and plan to apply accordingly.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
            <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
              <Typography>What if I have more questions?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Feel free to mail us at lead@dscnsec.com
              </Typography>
            </AccordionDetails>
          </Accordion>
       
        </div>
    );
  };

  return (
      <div id="faq" className={root}>
          {mobileView ? displayMobile() : displayDesktop()}  
      </div>
  );
}
