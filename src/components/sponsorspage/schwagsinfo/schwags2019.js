import React, {useState, useEffect} from "react";
import alienbrains from "../../../images/orgimages/Alienbrains.png";
import { makeStyles, Typography } from '@material-ui/core';
import { Grid } from "@material-ui/core";

export const UseStyles = makeStyles((theme) => ({

    imgContainer: {
          
        width: "23rem",
        display:"flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        // margin:"0 auto",
    },
    
    titleText: {
        fontSize: "1.5rem",
        textAlign: "center",
        // marginTop: "1.5rem",
    }

}));
 



const Schwags2019 = () => {

    const { imgContainer, image, titleText }= UseStyles()


    const [state, setState] = useState({
        mobileView: false,
      });

    const { mobileView } = state;

    useEffect(() => {
    const setResponsiveness = () => {
        return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
        window.removeEventListener("resize", () => setResponsiveness());
    };
    }, []);

    const displayDesktop = () =>{

        return(
            <Grid container >
            {SchwagsData.map(schwag =>(
            <Grid item xs={12} md={4} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div className={imgContainer}>
                <img src={alienbrains} className={image}
                  alt={schwag.name}/>
                <Typography>
                <p className={titleText}>{schwag.name}</p>
                </Typography>
            </div>
            
            </Grid>
           
        ))}
        </Grid>
        )
    }
    
    const displayMobile = () => {

        return(
            <Grid container >
            {SchwagsData.map(schwag =>(
            <Grid item xs={12} md={4} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div className={imgContainer}>
                <img src={alienbrains} className={image}
                  alt={schwag.name}/>
                <Typography>
                <p className={titleText}>{schwag.name}</p>
                </Typography>
            </div>
            
            </Grid>
           
        ))}
        </Grid>
        )
    }
  return (
        
      <div>
          {mobileView ? displayMobile() : displayDesktop()}
      </div>
  );
};

export default Schwags2019;

const SchwagsData = [
  {
    name: "Books",
    // image: require("../../Assets/Manning.svg"),
    classes: "", 
  },
  {
    name: "Exclusive Schwags",
    // image: require("../../Assets/Google Developers.svg"),
    classes: "", 
  },
  {
    name: "Qwiklabs Credits",
    // image: require("../../Assets/Qwiklabs.png"),
    classes: "", 
  },
  {
    name: "1 Year KiwisMedia Premium",
    // image: require("../../Assets/kiwismedia.png"),
    classes: "", 
  },
  
   {
     name: " T-shirts and 50% off coupon for",
    //  image: require("../../Assets/Alienbrains.png"),
     classes: "", 
     linkName: 'ISB 2.0'
   },
  {
    name: "Winter of Code Schwags",
    // image: require("../../Assets/swags.png"),
    classes: "first-child", 
  },
]
