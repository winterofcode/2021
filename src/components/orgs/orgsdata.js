import { makeStyles } from '@material-ui/core';

export const UseStyles = makeStyles((theme) => ({
    root: {
        background: "#000814",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
    },
    orgsTitle: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "1.3rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
    },
    ApplyButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },



    cards: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: "5%",
        width: "80%",
        margin: "0 auto",
    }
  }))

export const Organisations2019 = [
    {
      name: "DSC NSEC",
      logo: require("../../images/orgimages/dscnsec.png"),
      class: "dsc-logo",
      link: "https://2019.winterofcode.com/dsc-nsec.html",
      openInNewPage: true,
      text: "5 Projects"
    },
    {
      name: "The Code Foundation",
      logo: require("../../images/orgimages/tcf.jpg"),
      link: "https://2019.winterofcode.com/the-code-foundation.html",
      openInNewPage: true,
      text: "2 Projects"
    },
  ];
export const Organisations2020 = [
    {
      name: "Deep Fusion AI",
      logo: require("../../images/orgimages/deepfusionai.png"),
      link: "/organisation/deep-fusion-ai",
    },
   
    {
      name: "Absurd Nerd",
      logo: require("../../images/orgimages/absurdNerd.png"),
      link: "/organisation/absurd-nerd",
    },
   
    {
      name: "Canvasbird",
      logo: require("../../images/orgimages/canvasbird.png"),
      link: "/organisation/canvasbird",
    },
    {
      name: "eduAlgo",
      logo: require("../../images/orgimages/eduAlgo.png"),
      link: "/organisation/eduAlgo",
    },
    {
      name: "DSC NIT Rourkela",
      logo: require("../../images/orgimages/dscnitrourkela.png"),
      class: "dsc-logo",
      link: "/organisation/dsc-nit-rourkela",
    },
    {
      name: "DSC IEM",
      logo: require("../../images/orgimages/dsciem.png"),
      class: "dsc-logo",
      link: "/organisation/dsc-iem",
    },
    {
      name: "FireShort",
      logo: require("../../images/orgimages/fireshort.png"),
      link: "/organisation/fireshort",
    },
    {
      name: "Dynopii",
      logo: require("../../images/orgimages/dynopii.png"),
      link: "/organisation/dynopii",
    },
    {
      name: "DSC-X",
      logo: require("../../images/orgimages/dscx.png"),
      link: "/organisation/dsc-x",
    },
    {
      name: "Tesseract Coding",
      class: 'tesseract-logo',
      logo: require("../../images/orgimages/tesseract.png"),
      link: "/organisation/tesseract-coding",
    },
    {
      name: "DSC NSEC",
      logo: require("../../images/orgimages/dscnsec.png"),
      link: "/organisation/dsc-nsec",
      class: "dsc-logo",
    },
  ];