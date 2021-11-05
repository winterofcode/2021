import React, {useState, useEffect} from 'react'
import { CssBaseline, makeStyles } from '@material-ui/core';
import Navbar from '../navbar/navbar';
import { Grid, Button,Typography } from '@material-ui/core';
import { Card } from 'react-bootstrap';
import Footer from '../footer/footer';
import { flexbox, width } from '@mui/system';
import { Github, LinkedIn, Twitter } from '../../icon/icon';
import { ExternalLink } from 'react-external-link';
import NavbarRoute from './navbarroute';
import ayushimage from "../../images/oranisersimg/Ayush.jpg";
import dipikeshimage from "../../images/oranisersimg/dipikesh.png";
import shivaniimage from "../../images/oranisersimg/shivani.jpg";
import shreyabagimage from "../../images/oranisersimg/shreyabag.jpeg";
import shreyasethimage from "../../images/oranisersimg/shreyaseth.jpg";
import sohamimage from "../../images/oranisersimg/soham.jpg";
// import souvikimage from "../../images/organisersimg/souvik.jpeg";
// import suvadeepimage from "../../images/organisersimg/suvadeep.jpg";
import swetaimage from "../../images/oranisersimg/sweta.jpg";
import tanukaimage from "../../images/oranisersimg/tanuka.jpg";
import tausifimage from "../../images/oranisersimg/tausif.jpg";

export const UseStyles = makeStyles((theme) => ({


    container:{
          
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "10%",
        // margin: "0 auto",
        // minHeight: "100vh",
        // minWidth: "100vh",
        


    },
    
    imageContainer:{
        // display: "flex",
        // background: "black",
        // margin: "auto",
        // display: "inline"
        // minHeight: "100vh",
    
    },

    image:{
        width:"45%",
        height: "45%",
        // justifyContent:"center",
        // alignItems:"center",
        // margin:"0 auto",
        background: "black",
    },

    profileContainer:{

        marginBottom:"5%",
        width: "100%",
        height: "100%",
        // padding: "2%"
    },
    profileLink: {
        marginRight: "20px"
    }


 }))



export default function Organiser() {


    const {container, image, imageContainer, profileLink, profileContainer} = UseStyles()

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
      });
    
    const { mobileView, drawerOpen } = state;
    
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

    const OrganisersData = [
        
        {
        username: "Piyush Thakur",
        // userphoto: require("../Assets/vishwajeet.png"),    
        LinkedInLink: "https://www.linkedin.com/in/cosmo3769/",
        TwitterLink: "https://twitter.com/cosmo3769",
        GithubLink: "https://github.com/cosmo3769",
        },
        {
            username: "Ayush",
            userphoto: ayushimage,    
            LinkedInLink: "https://www.linkedin.com/in/ayush-mishra-62586b190/",
            TwitterLink: "https://twitter.com/supermanaayush",
            GithubLink: "https://github.com/ayush-ai",
        },
        {
            username: "Souvik Guria",
            // userphoto: souvikimage,    
            LinkedInLink: "https://www.linkedin.com/in/souvik-guria-/",
            TwitterLink: "https://twitter.com/orionLeo__",
            GithubLink: "github.com/devSouvik",
        },
        {
            username: "Sajal Kumar",
            // userphoto: require("../Assets/vishwajeet.png"),    
            LinkedInLink: "",
            TwitterLink: "",
            GithubLink: "",
        },
        {
            username: "Tanuka Mondal",
            userphoto: tanukaimage,    
            LinkedInLink: "https://www.linkedin.com/in/tanuka-mondal-923051199//",
            TwitterLink: "https://twitter.com/I_am_Tanuka",
            GithubLink: "https://github.com/Tanuka-Mondal",
        },
        {
            username: "Sweta Seth",
            userphoto: swetaimage,    
            LinkedInLink: "https://www.linkedin.com/in/sweta-seth-a11a4a18b",
            TwitterLink: "https://twitter.com/Sweta49861525?s=08",
            GithubLink: "https://github.com/Sweta040799",
        },
        {
            username: "Shreya Seth",
            userphoto: shreyasethimage,    
            LinkedInLink: "https://www.linkedin.com/in/shreya-seth-194001191",
            TwitterLink: "https://twitter.com/ShreyaS50175463?s=09",
            GithubLink: undefined,
        },
        {
            username: "Suvadeep Maity",
            // userphoto: suvadeepimage,    
            LinkedInLink: "https://www.linkedin.com/in/suvadeep-maity-392a881a7/",
            TwitterLink: undefined,
            GithubLink: "https://github.com/suvadeep2001",
        },
        {
            username: "Dipikesh kumar",
            userphoto: dipikeshimage,    
            LinkedInLink: "https://www.linkedin.com/in/dipikesh-kumar-465b111b1/",
            TwitterLink: "https://twitter.com/KumarDipikesh?t=dUkgStdqAguofmNBtU9sFQ&s=08",
            GithubLink: "https://github.com/Dipikesh",
        },
        {
            username: "Shreya Bag",
            userphoto: shreyabagimage,    
            LinkedInLink: "https://www.linkedin.com/in/shreya-bag-278314192",
            TwitterLink: "https://twitter.com/Shreya61609637?t=X-oJ8DCUjDNJivza9D4Ueg&s=08",
            GithubLink: "github.com/shreyamaybe",
        },

        {
            username: "Md. Tausif Siddqui",
            userphoto: tausifimage,    
            LinkedInLink: "https://www.linkedin.com/in/md-tausif-siddiqui-2560b31a6/",
            TwitterLink: "https://twitter.com/iamtausif9?t=swOKzu7xZdgXHBhGd6P-rg&s=09",
            GithubLink: "https://github.com/Tausif121",
        },

        {
            username: "Soham chakraborty",
            userphoto: sohamimage,    
            LinkedInLink: "https://www.linkedin.com/in/soham-chakraborty-69aa70192/",
            TwitterLink: undefined,
            GithubLink: "https://github.com/Soham-Official",
        },
        {
            username: "Shivani",
            userphoto: shivaniimage,    
            LinkedInLink: "",
            TwitterLink: "",
            GithubLink: "",
        },

    ]

    

    const displayDesktop = () =>{
        return(
            <div>
                <NavbarRoute style={{position: "absolute"}}/>
                <div className={container}>
                   <Typography>
                      <h1 align="center"> Our Organisers </h1>
                    </Typography>
                    <div className={imageContainer}>
                       <Grid container align="center">
                            {OrganisersData.map(organiser =>(
                                <Grid item xs={12} md={4}>
                                    <div className={profileContainer}>
                                        <img src={organiser.userphoto} className={image}></img>
                                        <p>{organiser.username}</p>
                                        <ExternalLink href={organiser.GithubLink} >
                                        <Github fill="#211F1F" width={30} height={30} className={profileLink}/>
                                        </ExternalLink >
                                        <ExternalLink href={organiser.LinkedInLink}>
                                        <LinkedIn fill="#0E76A8" width={30} height={30} className={profileLink}/>
                                        </ExternalLink>
                                        <ExternalLink href={organiser.TwitterLink}>
                                        <Twitter fill="#00acee" width={30} height={30} className={profileLink}/>
                                        </ExternalLink>
                                    </div>
                                </Grid> 

                            ))}
                       </Grid> 
                    </div>
                </div> 

              <Footer />

              

            </div>

        )
    }

    const displayMobile =() =>{
        return(
            <div>
            <div style={{height: "5vh",}}>
                <CssBaseline/>
                <NavbarRoute/>
            </div>
            <div className={container} style={{marginTop: "20%"}}>
               <Typography>
                  <h1 align="center"> Our Organisers </h1>
                </Typography>
                <div className={imageContainer}>
                   <Grid container align="center">
                        {OrganisersData.map(organiser =>(
                            <Grid item xs={12} md={4}>
                                <div className={profileContainer}>
                                    <img src={organiser.userphoto} className={image}></img>
                                    <p>{organiser.username}</p>
                                    <ExternalLink href={organiser.GithubLink} >
                                    <Github className={profileLink}/>
                                    </ExternalLink >
                                    <ExternalLink href={organiser.LinkedInLink}>
                                    <LinkedIn className={profileLink}/>
                                    </ExternalLink>
                                    <ExternalLink href={organiser.TwitterLink}>
                                    <Twitter className={profileLink}/>
                                    </ExternalLink>
                                </div>
                            </Grid> 

                        ))}
                   </Grid> 
                </div>
            </div> 

          <Footer />
        </div>
        )
    }
    
    
    return (
        <div>
            {mobileView ? displayMobile() : displayDesktop()}
        </div>
    )
}




