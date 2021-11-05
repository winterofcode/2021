import React, {useState, useEffect} from "react";
// import alienbrains from "../../../images/orgimages/Alienbrains.png";
import { makeStyles, } from '@material-ui/core';

export const UseStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
        width: "50%",
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        margin:"0 auto",
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
 



const Schwags2019 = () => {

    // const { root, imgContainer, image, titleText, imageMobile, titleTextMobile }= UseStyles()
    const { root }= UseStyles()


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
            {/* <Grid container >
            {SchwagsData.map(schwag =>(
            <Grid item xs={12} md={4} lg={4} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div className={imgContainer}>
                <img src={alienbrains} className={image}
                  alt={schwag.name}/>
                <Typography>
                <p className={titleText}>{schwag.name}</p>
                </Typography>
            </div>
            </Grid> 
        ))}
        </Grid> */}
       
              <div>
                <h2 style={{display: "flex", justifyContent: "center", alignItems: "center",}}>To be announced</h2>
              </div>
          </div>
            
        )
    }
    
    const displayMobile = () => {

        return(
          <div>
              {/* <Grid container>
              {SchwagsData.map(schwag =>(
              <Grid item xs={12} md={4} lg={4} >
                  <img src={alienbrains} className={imageMobile}
                    alt={schwag.name}/>
                  <h1 className={titleTextMobile}>{schwag.name}</h1>
              </Grid> 
          ))}
          </Grid> */}
          <br/><br/>
          <div>
              <h3 style={{display: "flex", justifyContent: "center", alignItems: "center",}}>To be announced</h3>
          </div>
        </div>
        )
    }
  return (
        
      <div className={root}>
          {mobileView ? displayMobile() : displayDesktop()}
      </div>
  );
};

export default Schwags2019;

// const SchwagsData = [
//   {
//     name: "Books",
//     // image: require("../../Assets/Manning.svg"),
//     classes: "", 
//   },
//   {
//     name: "Exclusive Schwags",
//     // image: require("../../Assets/Google Developers.svg"),
//     classes: "", 
//   },
//   {
//     name: "Qwiklabs Credits",
//     // image: require("../../Assets/Qwiklabs.png"),
//     classes: "", 
//   },
//   {
//     name: "1 Year KiwisMedia Premium",
//     // image: require("../../Assets/kiwismedia.png"),
//     classes: "", 
//   },
  
//    {
//      name: " T-shirts and 50% off coupon",
//     //  image: require("../../Assets/Alienbrains.png"),
//      classes: "", 
//      linkName: 'ISB 2.0'
//    },
//   {
//     name: "Winter of Code Schwags",
//     // image: require("../../Assets/swags.png"),
//     classes: "first-child", 
//   },
// ]
