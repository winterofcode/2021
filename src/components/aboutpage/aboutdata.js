import { makeStyles } from '@material-ui/core';
import { width } from '@mui/system';

export const UseStyles = makeStyles((theme) => ({
    
    root: {
        background: "#000814",
        display: "flex",
        // flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        minheight: '100vh',
        // width: "75%",
        // margin: "0 auto",
        color: "white",
    },
    
    section: {
        background: "#001D3D",
        display: "flex",
        flexDirection: "column",
        margin: "5%",
        marginTop: "1%",
        marginBottom: "0",
        // width:"100%",
        // borderBottom: "45px solid #000814",
        // borderRight: "45px solid #001D3D",
        borderRadius: "50px",
        
    },

    sectionHeading: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "2rem",
        color: '#fff',
        fontWeight: "bold",
        margin: "0 auto",
        // color: "#FFF",
        // width: "100%",
        marginLeft: "5%",
        marginTop: "2%",
        marginRight: "3%",
        // textShadow: "2px 2px #003566",
        // paddingLeft: "5%",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
    },

    titleText: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "1.5rem",
        color: '#fff',
        // fontWeight: "bold",
        marginLeft: "5%",
        paddingTop: '2%',
        alignContent: 'center',
        

    },

    descriptionText: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "1.2rem",
        color: '#fff',
        fontWeight: "lighter",
        marginLeft: "5%",
        marginRight: "2%",
    },

    workSection: {
        background: "#000813",
        display: "flex",
        // flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        // margin: "5%",
        marginTop: "0",
        // width:"100%",
        // borderBottom: "45px solid #000814",
        // borderRight: "45px solid #001D3D",
        // borderRadius: "25px",
    },

    subSection:{
        padding: "10%",
        paddingTop: 0,
        paddingBottom: 0,
        // border: "2px solid #001D3d",
        // width: "90%",
        background: "#001d3d",
        width: "25%",
        height: "25%",
        padding: "5%",
        margin: "5%",
        borderRadius: "50px",

        // marginLeft: 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    statsText: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "1.5rem",
        color: '#fff',
        // fontWeight: "bold",
        // marginLeft: "5%",
        // paddingLeft: "5%",
        // paddingTop: '2%',
        // alignContent: 'center',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },

    workSectionMobile: {
        background: "#000813",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: 'center',
        // margin: "5%",
        // marginTop: "0",
        width: "100%",
        padding:"5%",

    },

    subSectionMobile: {
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // border: "2px solid #001D3d"
        background: "#001d3d",
        padding: "5%",
        margin: "5%",
        borderRadius: "50px"
    },

    
    
    sectionRow: {
        // background: "#001D3D",
        display: "flex",
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: "5%",
        marginTop: "0",
        marginBottom: "0",
        // width:"100%",
        // borderBottom: "45px solid #000814",
        // borderRight: "45px solid #001D3D",
        borderRadius: "25px",

    },

    sectionTwo:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },

    wocimagestyle: {
        width: "100%",
        height: "100%",
    },

    worksubSection: {
           // padding: "10%",
           paddingTop: 0,
           paddingBottom: 0,
           // border: "2px solid #001D3d",
           // width: "90%",
           background: "#001d3d",
        //    padding: "5%",
           margin: "5%",
           borderRadius: "15px",
   
    },

    sectionRowMobile: {
        // background: "#001D3D",
        display: "flex",
        flexDirection: "column",
        margin: "5%",
        marginTop: "0",
        marginBottom: "0",
        // width:"100%",
        // borderBottom: "45px solid #000814",
        // borderRight: "45px solid #001D3D",
        borderRadius: "25px",

     
    },

    iframeMobile: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    


    
}))