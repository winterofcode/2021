import { makeStyles } from '@material-ui/core';
import deepfusionAIlogo from '../../../../images/orgimages/deepfusionai.png';
import canvasbirdlogo from '../../../../images/orgimages/canvasbird.png';
import dscnitrourkelalogo from '../../../../images/orgimages/dscnitrourkela.png';
import dscxlogo from '../../../../images/orgimages/dscx.png';
import dscnseclogo from '../../../../images/orgimages/dscnsec.png';
import TechNScience from '../../../../images/orgimages/TechNScience.png';
import theblockchainchief from '../../../../images/orgimages/theblockchainchief.png';
import codingspace from '../../../../images/orgimages/codingspace.png';
import mojaglobal from '../../../../images/orgimages/mojaglobal.png';
import gepton from '../../../../images/orgimages/gepton.png';
import eduhub from '../../../../images/orgimages/eduhub.png';

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
      link: "https://github.com/Tech-N-Science/FunwithScience/blob/main/ideas.md",
      text: "1 Projects"
    },
    {
      name: "DSC NIT Rourkela",
      logo: dscnitrourkelalogo,
      class: "dsc-logo",
      link: "/organisation/dsc-nit-rourkela",
      text: "5 Projects"
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
      link: "https://adhesive-xylophone-d60.notion.site/The-Blockchain-Chief-ce860387adfa44e1bd2cec78da2e214c",
      text: "5 Projects"
    },
    {
      name: "Moja Global",
      logo: mojaglobal,
      link: "https://docs.google.com/document/d/1T0U1pKS1-I0CMC478iaZEX871sr86itJz4qsSpBLdfk/edit?usp=sharing",
      text: "2 Project"
    },
    {
      name: "Gepton",
      logo: gepton,
      link: "https://github.com/GEPTON-INFOTECH/.github/wiki/Idealist-for-Open-Source-Contributors",
      text: "3 Project"
    },
    {
        name: "Coding Space",
        logo: codingspace,
        link: "https://docs.google.com/document/d/1xytZdoYvKCzKf2ysunf3Zz1nk3mWENKpY2s7C5WDuGo/edit#heading=h.e8rx6cvny3pl",
        class: "dsc-logo",
        text: "1 Projects"
    },
    // {
    //   name: "DSC-X",
    //   logo: dscxlogo,
    //   link: "/organisation/dsc-x",
    //   text: "1 Project"
    // },
    // {
    //   name: "DSC-X",
    //   logo: dscxlogo,
    //   link: "/organisation/dsc-x",
    //   text: "1 Project"
    // },
    {
      name: "Eduhub Community",
      class: 'eduhubcommunity',
      logo: eduhub,
      link: "/organisation/eduhub-community",
      text: "1 Project"
    },
    {
      name: "DSC NSEC",
      logo: dscnseclogo,
      link: "/organisation/dsc-nsec",
      class: "dsc-logo",
      text: "6 Projects"
    },
      // {
      //   name: "HITK Tech Community",
      //   logo: "none",
      //   class: "dsc-logo",
      //   link: "/organisation/hitk-community",
      //   text: "6 Projects"
      // },
   
  ];