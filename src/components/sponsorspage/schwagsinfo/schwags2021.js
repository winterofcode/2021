import React, {useState, useEffect} from "react";
// import alienbrains from "../../../images/orgimages/Alienbrains.png";
import { makeStyles, } from '@material-ui/core';
import googledevelopers from "../../../images/sponsor/Google Developers.svg";
import { Grid, Typography } from "@material-ui/core";

export const UseStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
        width: "100%",
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        margin:"0 auto",
    },
    imgContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    titleText: {
        fontSize: "1.5rem",
        textAlign: "center",
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
    },
    imageMobile: {
        width: "50%",
        margin:"0 auto",
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
    },
    titleTextMobile: {
        fontSize: "1.5rem",
        display:"flex",   
        justifyContent: "center",
        alignItems: "center",

    }

}));
 



const Schwags2021 = () => {

    const { root, imgContainer, image, titleText, imageMobile, titleTextMobile }= UseStyles()
    // const { root }= UseStyles()


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
          <div>
            <Grid container >
            {SchwagsData.map(schwag =>(
            <Grid item xs={12} md={12} lg={12} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div className={imgContainer}>
                <img src={schwag.image} className={image}
                  alt={schwag.name}/>
                {/* <Typography>
                <p className={titleText}>{schwag.name}</p>
                </Typography> */}
            </div>
            </Grid> 
        ))}
        </Grid>
       
              {/* <div>
                <h2 style={{display: "flex", justifyContent: "center", alignItems: "center",}}>To be announced</h2>
              </div> */}
          </div>
            
        )
    }
    
    const displayMobile = () => {

        return(
          <div>
              <Grid container>
              {SchwagsData.map(schwag =>(
              <Grid item xs={12} md={12} lg={12} >
                  <img src={schwag.image} className={imageMobile}
                    alt={schwag.name}/>
                  {/* <h1 className={titleTextMobile}>{schwag.name}</h1> */}
              </Grid> 
          ))}
          </Grid>
          <br/><br/>
          {/* <div>
              <h3 style={{display: "flex", justifyContent: "center", alignItems: "center",}}>To be announced</h3>
          </div> */}
        </div>
        )
    }
  return (
        
      <div className={root}>
          {mobileView ? displayMobile() : displayDesktop()}
      </div>
  );
};

export default Schwags2021;

const SchwagsData = [
  {
    name: "Google Developers",
    image: googledevelopers,
    classes: "", 
  },
]
