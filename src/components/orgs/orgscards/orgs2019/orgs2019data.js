import { makeStyles } from '@material-ui/core';
import { padding } from '@mui/system';

import dscnseclogo from '../../../../images/orgimages/dscnsec.png';
import tcflogo from '../../../../images/orgimages/tcf.jpg';

export const UseStyles = makeStyles((theme) => ({
    // root: {
    //     background: "#000814",
    //     minHeight: "100vh",
    //     display: "flex",
    //     justifyContent: "center",
    // },
    // orgsTitle: {
    //     fontFamily: "Open Sans, sans-serif",
    //     fontSize: "1.3rem",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     color: "#fff",
    // },
    // ApplyButton: {
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    // },
    // cards: {
    //     display: "flex",
    //     justifyContent: "space-evenly",
    //     alignItems: "center",
    //     marginTop: "5%",
    //     width: "80%",
    //     margin: "0 auto",
    // }
    root: {
        background: "#001D3D",
        minHeight: "30vh",
        // display: "flex",
        // justifyContent: "center"
    },
    cardWrapper: {
        // display: "flex",
        // flexGrow: "1",
        // justifyContent: "space-between",
        // alignItems: "center",
        // width: "80%",
        // margin: "0 auto",
        minWidth: "50%"
    },
    Media: {
        height: "10",
        width: "10%",
    },
    gridContainer: {
        // display: "flex",
        // justifyContent: "space-between",
    }
  }))

export const Organisations2019 = [
    {
      name: "DSC NSEC",
      logo: dscnseclogo,
      class: "dsc-logo",
      link: "https://2019.winterofcode.com/dsc-nsec.html",
      openInNewPage: true,
      text: "5 Projects"
    },
    {
      name: "The Code Foundation",
      logo: tcflogo,
      link: "https://2019.winterofcode.com/the-code-foundation.html",
      openInNewPage: true,
      text: "2 Projects"
    },
  ];