import { makeStyles } from '@material-ui/core';
import deepfusionAIlogo from '../../../../images/orgimages/deepfusionai.png';
import absurdnerdlogo from '../../../../images/orgimages/absurdNerd.png';
import canvasbirdlogo from '../../../../images/orgimages/canvasbird.png';
import edualgologo from '../../../../images/orgimages/eduAlgo.png';
import dscnitrourkelalogo from '../../../../images/orgimages/dscnitrourkela.png';
import dsciemlogo from '../../../../images/orgimages/dsciem.png';
import fireshortlogo from '../../../../images/orgimages/fireshort.png';
import dynopiilogo from '../../../../images/orgimages/dynopii.png';
import dscxlogo from '../../../../images/orgimages/dscx.png'
import tesseractcodinglogo from '../../../../images/orgimages/tesseract.png';
import dscnseclogo from '../../../../images/orgimages/dscnsec.png';

export const UseStyles = makeStyles((theme) => ({
    root: {
      background: "#001D3D",
      minHeight: "30vh",
  },
   cardSection:{
      display: "grid",
      gridTemplateColumns: "20% 20% 20%",
   },
  }))

export const Organisations2020 = [
    {
      name: "Deep Fusion AI",
      logo: deepfusionAIlogo,
      link: "/organisation/deep-fusion-ai",
      text: "1 Project",
    },
   
    {
      name: "Absurd Nerd",
      logo: absurdnerdlogo,
      link: "/organisation/absurd-nerd",
      text: "2 Projects"
    },
   
    {
      name: "Canvasbird",
      logo: canvasbirdlogo,
      link: "/organisation/canvasbird",
      text: "1 Project"
    },
    {
      name: "eduAlgo",
      logo: edualgologo,
      link: "/organisation/eduAlgo",
      text: "3 Projects"
    },
    {
      name: "DSC NIT Rourkela",
      logo: dscnitrourkelalogo,
      class: "dsc-logo",
      link: "/organisation/dsc-nit-rourkela",
      text: "3 Projects"
    },
    {
      name: "DSC IEM",
      logo: dsciemlogo,
      class: "dsc-logo",
      link: "/organisation/dsc-iem",
      text: "6 Projects"
    },
    {
      name: "FireShort",
      logo: fireshortlogo,
      link: "/organisation/fireshort",
      text: "1 Project"
    },
    {
      name: "Dynopii",
      logo: dynopiilogo,
      link: "/organisation/dynopii",
      text: "1 Project"
    },
    {
      name: "DSC-X",
      logo: dscxlogo,
      link: "/organisation/dsc-x",
      text: "1 Project"
    },
    {
      name: "Tesseract Coding",
      class: 'tesseract-logo',
      logo: tesseractcodinglogo,
      link: "/organisation/tesseract-coding",
      text: "1 Project"
    },
    {
      name: "DSC NSEC",
      logo: dscnseclogo,
      link: "/organisation/dsc-nsec",
      class: "dsc-logo",
      text: "5 Projects"
    },
  ];