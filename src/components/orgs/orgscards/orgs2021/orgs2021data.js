import { makeStyles } from '@material-ui/core';
import deepfusionAIlogo from '../../../../images/orgimages/deepfusionai.png';
import canvasbirdlogo from '../../../../images/orgimages/canvasbird.png';
import dscnitrourkelalogo from '../../../../images/orgimages/dscnitrourkela.png';
import dscxlogo from '../../../../images/orgimages/dscx.png';
import dscnseclogo from '../../../../images/orgimages/dscnsec.png';
import TechNScience from '../../../../images/orgimages/TechNScience.png';
import theblockchainchief from '../../../../images/orgimages/theblockchainchief.png';
import codingspace from '../../../../images/orgimages/codingspace.png';

export const UseStyles = makeStyles((theme) => ({
    root: {
        
    },
    section: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "1.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff"
    },
    sectionMobile: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "1.2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff"
    }
}))

export const Organisations2021 = [
    {
      name: "Deep Fusion AI",
      logo: deepfusionAIlogo,
      link: "/organisation/deep-fusion-ai",
      text: "1 Project",
    },
   
    {
      name: "Tech N Science",
      logo: TechNScience,
      link: "/organisation/technscince",
      text: "1 Projects"
    },
   
    {
      name: "Canvasbird",
      logo: canvasbirdlogo,
      link: "/organisation/canvasbird",
      text: "1 Project"
    },
    {
      name: "The Blockchain Chief",
      logo: theblockchainchief,
      link: "/organisation/theblockchainchief",
      text: "5 Projects"
    },
    {
      name: "DSC NIT Rourkela",
      logo: dscnitrourkelalogo,
      class: "dsc-logo",
      link: "/organisation/dsc-nit-rourkela",
      text: "5 Projects"
    },
    {
      name: "HITK Tech Community",
      logo: "none",
      class: "dsc-logo",
      link: "none",
      text: "6 Projects"
    },
    {
      name: "Moja Global",
      logo: "none",
      link: "none",
      text: "2 Project"
    },
    {
      name: "Gepton",
      logo: "none",
      link: "none",
      text: "1 Project"
    },
    {
      name: "DSC-X",
      logo: dscxlogo,
      link: "/organisation/dsc-x",
      text: "1 Project"
    },
    {
      name: "Eduhub Community",
      class: 'tesseract-logo',
      logo: "none",
      link: "none",
      text: "1 Project"
    },
    {
      name: "DSC NSEC",
      logo: dscnseclogo,
      link: "/organisation/dsc-nsec",
      class: "dsc-logo",
      text: "5 Projects"
    },
    {
        name: "Coding Space",
        logo: codingspace,
        link: "/organisation/codingspace",
        class: "dsc-logo",
        text: "1 Projects"
      },
  ];