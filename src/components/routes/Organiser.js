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
import piyushimage from "../../images/oranisersimg/piyush.jpeg";
import ayushimage from "../../images/oranisersimg/Ayush.jpg";
import dipikeshimage from "../../images/oranisersimg/dipikesh.png";
import shivaniimage from "../../images/oranisersimg/shivani.jpg";
import shreyabagimage from "../../images/oranisersimg/shreyabag.jpeg";
import shreyasethimage from "../../images/oranisersimg/shreyaseth.jpeg";
import sohamimage from "../../images/oranisersimg/soham.jpg";
import souvikimage from "../../images/oranisersimg/souvik.jpeg";
import suvadeepimage from "../../images/oranisersimg/suvadeep.png";
import swetaimage from "../../images/oranisersimg/sweta.jpeg";
import tanukaimage from "../../images/oranisersimg/tanuka.jpeg";
import tausifimage from "../../images/oranisersimg/tausif.jpg";
import sajalimage from "../../images/oranisersimg/sajal.png";

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
        width:"40%",
        height: "40%",
        // justifyContent:"center",
        // alignItems:"center",
        // margin:"0 auto",
        background: "black",
        borderRadius: "50%"
    },

    profileContainer:{
        marginBottom:"5%",
        width: "100%",
        height: "100%",
        // padding: "2%"
    },
    profileLink: {
        marginRight: "20px"
    },
    iconStyle: {
        // display: "flex",
        // justifyContent: "space-between",
        // alignItems: "center",
        // width: "35%"
    }
 }))


 const OrganisersData = [
        
    {
    username: "Piyush Thakur",
    userphoto: piyushimage,    
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
        username: "Sajal Kumar",
        userphoto: sajalimage,    
        LinkedInLink: "https://www.linkedin.com/in/sajalkr",
        TwitterLink: "https://twitter.com/skT6599?t=CCTAN8sF2pWPEwzLVWzxYg&s=09",
        GithubLink: "https://github.com/devsk99",
    },
    {
        username: "Souvik Guria",
        userphoto: souvikimage,    
        LinkedInLink: "https://www.linkedin.com/in/souvik-guria-/",
        TwitterLink: "https://twitter.com/orionLeo__",
        GithubLink: "github.com/devSouvik",
    },
    {
        username: "Suvadeep Maity",
        userphoto: suvadeepimage,    
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
        username: "Shivani",
        userphoto: shivaniimage,    
        LinkedInLink: "https://www.linkedin.com/mwlite/in/shivani-a24484193",
        TwitterLink: undefined,
        GithubLink: "https://github.com/shivani8651",
    },
    {
        username: "Tanuka Mondal",
        userphoto: tanukaimage,    
        LinkedInLink: "https://www.linkedin.com/in/tanuka-mondal-923051199//",
        TwitterLink: "https://twitter.com/I_am_Tanuka",
        GithubLink: "https://github.com/Tanuka-Mondal",
    },
    {
        username: "Shreya Seth",
        userphoto: shreyasethimage,    
        LinkedInLink: "https://www.linkedin.com/in/shreya-seth-194001191",
        TwitterLink: "https://twitter.com/ShreyaS50175463?s=09",
        GithubLink: "https://github.com/22shreyA",
    },
    {
        username: "Sweta Seth",
        userphoto: swetaimage,    
        LinkedInLink: "https://www.linkedin.com/in/sweta-seth-a11a4a18b",
        TwitterLink: "https://twitter.com/Sweta49861525?s=08",
        GithubLink: "https://github.com/Sweta040799",
    },
    {
        username: "Shreya Bag",
        userphoto: shreyabagimage,    
        LinkedInLink: "https://www.linkedin.com/in/shreya-bag-278314192",
        TwitterLink: "https://twitter.com/Shreya61609637?t=X-oJ8DCUjDNJivza9D4Ueg&s=08",
        GithubLink: "https://github.com/shreyamaybe",
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

]



export default function Organiser() {


    const {container, image, imageContainer, profileLink, profileContainer, iconStyle} = UseStyles()

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
    
    const displayDesktop = () =>{
        return(
            <div>
                <CssBaseline/>
                <NavbarRoute style={{position: "absolute"}}/>
                <div className={container}>
                   <Typography>
                      <h1 style={{fontSize: "3rem"}} align="center"> Our Team </h1>
                    </Typography>
                    <div className={imageContainer}>
                       <Grid container align="center">
                            {OrganisersData.map(organiser =>(
                                <Grid item xs={12} md={4}>
                                    <div className={profileContainer}>
                                        <img src={organiser.userphoto} className={image}></img>
                                        <p style={{fontSize: "1.3rem"}}>{organiser.username}</p>
                                        <div className={iconStyle}>
                                        {organiser.GithubLink && <ExternalLink style={{marginRight: "2%"}} href={organiser.GithubLink} >
                                        <Github fill="#211F1F" width={30} height={30} className={profileLink}/>
                                        </ExternalLink >}
                                        {organiser.GithubLink && <ExternalLink style={{marginRight: "2%"}} href={organiser.LinkedInLink}>
                                        <LinkedIn fill="#0E76A8" width={30} height={30} className={profileLink}/>
                                        </ExternalLink>}
                                        {organiser.TwitterLink && <ExternalLink style={{marginRight: "2%"}} href={organiser.TwitterLink}>
                                        <Twitter fill="#00acee" width={30} height={30} className={profileLink}/>
                                        </ExternalLink>}
                                        </div>
                                    </div>
                                </Grid> 
                            ))}
                       </Grid> 
                    </div>
                </div> 

                  <Footer style={{width: "100%", margin: "0 auto"}}/>
            
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
                  <h1 align="center"> Our Team </h1>
                </Typography>
                <div className={imageContainer}>
                   <Grid container align="center">
                        {OrganisersData.map(organiser =>(
                            <Grid item xs={12} md={4}>
                                <div className={profileContainer}>
                                    <img src={organiser.userphoto} className={image}></img>
                                    <p>{organiser.username}</p>
                                        <div className={iconStyle}>
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




