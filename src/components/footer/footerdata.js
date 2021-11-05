import { makeStyles } from '@material-ui/core';

export const UseStyles = makeStyles((theme) => ({
    root: {
        background: "#001D3D",
        minHeight: "30vh",
    },
    footerWrapper: {
        display: "flex",
        justifyContent: "space-between",
        // alignItems: "center",
        width: "80%",
        margin: "0 auto",
    },
    footerColumn1: {
        flex: "0 0 210px",
        marginTop: "10px",
    },
    footerColumn2: {
        flex: "0 0 200px",
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
    resourceslink: {
        fontSize: "15px",
        textDecoration: "none",
        color: "#fff",
    },
    DSCNSECTitle: {
        fontSize: "20px",
        color: "#fff",
    },
    handlesLink: {
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
        margin: "0 auto"
    },
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
        padding: "15px",
        display: "flex", 
        justifyContent: "center",
        alignItems: "center",  
    },
    wocCopyrightMobile: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",   
    },
    resourcesTitleMobile: {
        display: "flex",
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
        fontSize: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    handlesLinkMobile: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        color: "#fff" 
    },
    developer: {
        margin: "6px",
        color: "#fff",
    },
    developerMobile: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",   
    },
    previousVersion: {
        margin: "6px",
        color: "#fff",
    },
    previousVersionMobile: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",   
    }
  }))