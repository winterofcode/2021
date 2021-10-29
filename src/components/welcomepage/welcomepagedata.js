import { makeStyles } from "@material-ui/core"

export const UseStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center',
        height: '100vh',
        width: "75%",
        margin: "0 auto",
    },
    welcomeTitle: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "2.5rem",
        color: '#fff',
        fontWeight: "normal",
    },
    welcomeWoc: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "3rem",
        color: '#fff',
        fontWeight: "bold",
    },
    welcomeSubTitle: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "1.3rem",
        fontWeight: "normal",
    },
    wocimagestyle: {
        width: "50%",
        height: "50%",
    },
    wocimagestylemobile: {
        width: "100%",
        height: "100%",
    },
}))