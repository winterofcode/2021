import { makeStyles } from '@material-ui/core';

export const UseStyles = makeStyles((theme) => ({
    root: {
        background: "#000814",
        minHeight: "30vh",
    },
    footerWrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        margin: "0 auto",
        // color: "#fff",
    },
    footerColumn1: {
        flex: "0 0 200px",
        marginTop: "25px",
    },
    footerColumn2: {
        flex: "0 0 200px",
        // marginTop: "20px",
    },
    footerColumn3: {
        flex: "0 0 200px"
    },
    logoRow: {
        display: "flex",
    },
    logoimg: {
        width: "45px",
        height: "45px",
        padding: "5px",
    },
    logoTitle: {
        fontSize: "20px",
        margin: "9px",
        color: "#fff",
    },
    socialLinkRow: {
        display: "flex",
        justifyContent: "space-between",
        margin: "6px",
    },
    wocTitle: {
        margin: "6px",
        fontSize: "15px",
        color: "#fff",
    },
    wocCopyright: {
        margin: "6px",
        color: "#fff",
    },
    resourcesTitle: {
        fontSize: "20px",
        color: "#fff",
    },
    resourcesLink: {
        fontSize: "15px",
        textDecoration: "none",
        color: "#fff",
    },
    DSCNSECTitle: {
        fontSize: "20px",
        color: "#fff",
    },
    handleLinks: {
        fontSize: "15px",
        textDecoration: "none",
        color: "#fff",
    },

    footerWrapperMobile: {
        minHeight: "100vh",
        minWidth: "20vh",
        color: "#fff",
    },
    footerColumnMobile: {
        // display: "flex",
        // flexDirection: "column",
        // width: "20%",
        margin: "0 auto"
    },
    // footerColumnMobile1: {
    //     color: "%fff",
    // },
    // footerColumnMobile2: {
    //     color: "%fff",
    // },
    // footerColumnMobile3: {
    //     color: "%fff",
    // }
    logoflexRowMobile: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    logoTitleMobile: {
        fontSize: "20px",
    },
    socialLinkRowMobile: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width:"30%",
        margin: "0 auto"
    },
    wocTitleMobile: {
        width:"40%",
        margin: "0 auto"   
    },
    wocCopyrightMobile: {
        width:"45%",
        margin: "0 auto"   
    },
    resourcesTitleMobile: {
        // width: "30%",
        // margin: "0 auto",
        display: "flex",
        // flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        fontSize: "20px"
    },
    resourceslinkMobile: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        color: "#fff"   
    },
    DSCNSECTitleMobile: {
        width: "30%",
        margin: "0 auto",
        fontSize: "20px"
    },
    handlesLinkMobile: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        color: "#fff" 
    },
  }))