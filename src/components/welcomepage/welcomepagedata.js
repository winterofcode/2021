import { makeStyles } from "@material-ui/core"

export const UseStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        height: '100vh',
        width: "80%",
        margin: "0 auto",
        
    },
    welcomeSection: {
        marginTop: "5%",
        '@media (max-width: 1024px)': {
            marginTop: "30%"
        },
    },
    welcomeSectionMobile: {
        marginTop: "40%",
        '@media (max-width: 320px)': {
            marginTop: "80%"
        }
    },
    welcomeTitle: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "4rem",
        color: '#fff',
        fontWeight: "normal",
        display: "flex",
        justifyContent: "center",
        alignItems: "cemter",
        margin: "5px"
    },
    welcomeWoc: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "3rem",
        color: '#fff',
        fontWeight: "bold",
    },
    welcomeSubTitle: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "1.5rem",
        fontWeight: "normal",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    wocimagestyle: {
        // width: "100%",
        height: "100%",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "50%",
    },
    buttonStyle: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
    buttonStyleMobile: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        fontSize: "0.5rem",
    },
    wocimagestylemobile: {
        width: "100%",
        height: "100%",
    },
    welcomeTitleMobile: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "2.1rem",
        color: '#fff',
        fontWeight: "normal",
        display: "flex",
        justifyContent: "center",
        alignItems: "cemter",
        margin: "5px"
    },
    welcomeSubTitleMobile: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "1rem",
        fontWeight: "normal",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    wocimagestyleMobile: {
        // width: "100%",
        height: "100%",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
    }
}))