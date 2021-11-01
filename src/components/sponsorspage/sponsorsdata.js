import { makeStyles } from '@material-ui/core';

export const UseStyles = makeStyles((theme) => ({
    root: {
        background: "none",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    section: {
        // background: "#001D3D",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        // width:"100%",
        // borderBottom: "45px solid #000814",
        // borderRight: "45px solid #001D3D",
        // borderRadius: "25px",
        justifyContent: "center",
        alignItems: "center"
        
    },
    sectionHeading: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "2rem",
        color: '#000813',
        fontWeight: "bold",
        // margin: "0 auto",
        // marginLeft: "2%",
        // marginTop: "2%",
        // marginRight: "3%",
    },
   
  }))