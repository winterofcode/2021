import { makeStyles } from '@material-ui/core';

export const UseStyles = makeStyles((theme) => ({
    root: {
        background: "#001D3D",
        minHeight: "30vh",
        // minWidth: "20vh",
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        // paddingBottom: "9%",
    },
    ApplyTitle: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "1.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // width: "70%",
        // margin: "0 auto",
        color: "#fff",
    },
    ApplyContent: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Open Sans, sans-serif",
        fontSize: "1rem",
        color: "#fff"

    },
    ApplyButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    ApplyContentMobile: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        width: "80%",
        margin: "0 auto"
    },
    // ApplyButton: {
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center"
    // }
    ApplyButtonMobile: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "5%",
        // width: "75%",
        // margin: "0 auto"
    },
    // ApplySection: {
    //     // display: "flex",
    //     // justifyContent: "center",
    //     // alignItems: "center",
    //     margin: "5%"
    // }
}))