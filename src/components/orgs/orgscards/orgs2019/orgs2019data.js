import { makeStyles } from '@material-ui/core';
import { padding } from '@mui/system';

import dscnseclogo from '../../../../images/orgimages/dscnsec.png';
import tcflogo from '../../../../images/orgimages/tcf.jpg';

export const UseStyles = makeStyles((theme) => ({
    cardSectionMobile:{
       display: "flex",
      //  flexDirection: "column",
       justifyContent: "center",
       alignItems: "center",
    },
  }))

export const Organisations2019 = [
    {
      name: "DSC NSEC",
      logo: dscnseclogo,
      class: "dsc-logo",
      link: "https://2019.winterofcode.com/dsc-nsec.html",
      text: "5 Projects"
    },
    {
      name: "The Code Foundation",
      logo: tcflogo,
      link: "https://2019.winterofcode.com/the-code-foundation.html",
 
      text: "2 Projects"
    },
  ];