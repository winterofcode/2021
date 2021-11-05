import React, {useState, useEffect} from 'react'
import { CssBaseline, makeStyles } from '@material-ui/core';
import Navbar from '../navbar/navbar';
import { Grid, Button,Typography } from '@material-ui/core';
import { Card } from 'react-bootstrap';
import Footer from '../footer/footer';
import pic from '../../images/orgimages/fireshort.png'
import { flexbox } from '@mui/system';
import { Github, LinkedIn, Twitter } from '../../icon/icon';
import { ExternalLink } from 'react-external-link';
import NavbarRoute from './navbarroute';

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
    },

    profileContainer:{

        marginBottom:"2%"
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
            // userphoto: require("../Assets/vishwajeet.png"),    
            LinkedInLink: "https://www.linkedin.com/in/ayush-mishra-62586b190/",
            TwitterLink: "https://twitter.com/supermanaayush",
            GithubLink: "https://github.com/ayush-ai",
        },
        {
            username: "Souvik Guria",
            // userphoto: require("../Assets/vishwajeet.png"),    
            LinkedInLink: "https://www.linkedin.com/in/souvik-guria-/",
            TwitterLink: "https://twitter.com/orionLeo__",
            GithubLink: "github.com/devSouvik",
        },
        {
            username: "Sajal Kumar",
            // userphoto: require("../Assets/vishwajeet.png"),    
            LinkedInLink: "https://www.linkedin.com/in/vishwajeetraj11/",
            TwitterLink: "https://twitter.com/Vishwajeet323",
            GithubLink: "https://github.com/vishwajeetraj11",
        },
        {
            username: "Tanuka Mondal",
            // userphoto: require("../Assets/vishwajeet.png"),    
            LinkedInLink: "https://www.linkedin.com/in/tanuka-mondal-923051199//",
            TwitterLink: "https://twitter.com/I_am_Tanuka",
            GithubLink: "https://github.com/Tanuka-Mondal",
        },
        {
            username: "Sweta Seth",
            // userphoto: require("../Assets/vishwajeet.png"),    
            LinkedInLink: "https://www.linkedin.com/in/sweta-seth-a11a4a18b",
            TwitterLink: "https://twitter.com/Sweta49861525?s=08",
            GithubLink: "https://github.com/Sweta040799",
        },
        {
            username: "Shreya Seth",
            // userphoto: require("../Assets/vishwajeet.png"),    
            LinkedInLink: "https://www.linkedin.com/in/shreya-seth-194001191",
            TwitterLink: "https://twitter.com/ShreyaS50175463?s=09",
            GithubLink: "",
        },
        {
            username: "Suvadeep Maity",
            // userphoto: require("../Assets/vishwajeet.png"),    
            LinkedInLink: "https://www.linkedin.com/in/suvadeep-maity-392a881a7/",
            TwitterLink: "",
            GithubLink: "https://github.com/suvadeep2001",
        },
        {
            username: "Dipikesh kumar",
            // userphoto: require("../Assets/vishwajeet.png"),    
            LinkedInLink: "https://www.linkedin.com/in/dipikesh-kumar-465b111b1/",
            TwitterLink: "",
            GithubLink: "https://github.com/Dipikesh",
        },
        {
            username: "Shreya Bag",
            // userphoto: require("../Assets/vishwajeet.png"),    
            LinkedInLink: "https://www.linkedin.com/in/shreya-bag-278314192",
            TwitterLink: "https://twitter.com/Shreya61609637?t=X-oJ8DCUjDNJivza9D4Ueg&s=08",
            GithubLink: "github.com/shreyamaybe",
        },

        {
            username: "Md. Tausif Siddqui",
            // userphoto: require("../Assets/vishwajeet.png"),    
            LinkedInLink: "https://www.linkedin.com/in/md-tausif-siddiqui-2560b31a6/",
            TwitterLink: "https://twitter.com/iamtausif9?t=swOKzu7xZdgXHBhGd6P-rg&s=09",
            GithubLink: "https://github.com/Tausif121",
        },

        {
            username: "Soham chakraborty",
            // userphoto: require("../Assets/vishwajeet.png"),    
            LinkedInLink: "https://www.linkedin.com/in/soham-chakraborty-69aa70192/",
            TwitterLink: "",
            GithubLink: "https://github.com/Soham-Official",
        },
        {
            username: "Shivani",
            // userphoto: require("../Assets/vishwajeet.png"),    
            LinkedInLink: "https://www.linkedin.com/in/vishwajeetraj11/",
            TwitterLink: "https://twitter.com/Vishwajeet323",
            GithubLink: "https://github.com/vishwajeetraj11",
        },



    ]

    const OrganizersData = [
        {
          username: "Piyush Thakur",
        //   userphoto: require("../Assets/vishwajeet.png"),
          tags: ["DSC NSEC"],
          description:
            "Web Team Lead at DSC NSEC, Designer and Developer. Building vishwajeet.js. JavaScript 💛",
        //   organisationLogo: require("../Assets/org-logo.png"),
          organisationName: "Winter of Code",
          LinkedInLink: "https://www.linkedin.com/in/vishwajeetraj11/",
          TwitterLink: "https://twitter.com/Vishwajeet323",
          GithubLink: "https://github.com/vishwajeetraj11",
        },
        {
          username: "Shailly Keshari",
        //   userphoto: require("../Assets/Shailly-Keshari.jpg"),
          tags: ["DSC NSEC"],
          description: "CS Undergraduate, Machine Learning enthusiast",
        //   organisationLogo: require("../Assets/org-logo.png"),
          organisationName: "Winter of Code",
          LinkedInLink: "https://www.linkedin.com/in/shaillykeshari/",
          TwitterLink: undefined,
          GithubLink: "https://github.com/shaillykeshari",
        },
        {
          username: "Rajwrita Nath",
        //   userphoto: require("../Assets/Rajwrita-Nath.jpg"),
          tags: ["DSC NSEC"],
          description:
            "Lead at DSC NSEC, Women Techmakers Scholar, Technical Content Moderator Manning Publications",
        //   organisationLogo: require("../Assets/org-logo.png"),
          organisationName: "Winter of Code",
          LinkedInLink: "https://www.linkedin.com/in/rajwrita-nath/",
          TwitterLink: "https://twitter.com/rajwrita",
          GithubLink: "https://github.com/rajwrita",
        },
        {
          username: "Anjali Jha",
        //   userphoto: require("../Assets/Anjali-Jha.jpeg"),
          tags: ["DSC NSEC"],
          description:
            "Contributor at Mozilla, Web Developer, Competitive Programmer",
        //   organisationLogo: require("../Assets/org-logo.png"),
          organisationName: "Winter of Code",
          LinkedInLink: "https://www.linkedin.com/in/anjali-jha-1903/",
          TwitterLink: undefined,
          GithubLink: "https://github.com/anjali1903/",
        },
        {
          username: "Anuska Sinha",
        //   userphoto: require("../Assets/Anuska-Sinha.jpeg"),
          tags: ["DSC NSEC"],
          description:
            "Winter of Code 2020 Mentor for DSC NSEC, Web Developer, ML enthusiast and Competitive Programmer.",
        //   organisationLogo: require("../Assets/org-logo.png"),
          organisationName: "Winter of Code",
          LinkedInLink: "https://www.linkedin.com/in/anuska-sinha-039002160/",
          TwitterLink: undefined,
          GithubLink: "https://github.com/theslytherin",
        },
        {
          username: "Ashutosh Krishna",
        //   userphoto: require("../Assets/Ashutosh-Krishna.jpg"),
          tags: ["DSC NSEC"],
          description:
            "Winter of Code 2020 Mentor for DSC NSEC, Backend Web Developer, App Developer",
        //   organisationLogo: require("../Assets/org-logo.png"),
          organisationName: "Winter of Code",
          LinkedInLink: "https://www.linkedin.com/in/ashutoshkrris/",
          TwitterLink: undefined,
          GithubLink: "https://github.com/ashutoshkrris/",
        },
      
        {
          username: "Sucheta Nandy",
        //   userphoto: require("../Assets/Sucheta-Nandy.jpg"),
          tags: ["DSC NSEC"],
          description:
            "ML and Data Science Enthusiast, JBNSTS BKMB Scholar 2018, keen & fast learner",
        //   organisationLogo: require("../Assets/org-logo.png"),
          organisationName: "Winter of Code",
          LinkedInLink: "https://www.linkedin.com/in/sucheta-nandy-a79605180/",
          TwitterLink: "https://twitter.com/NandySucheta",
          GithubLink: "https://github.com/sucheta-nandy",
        },
        {
          username: "Ayush Singh",
        //   userphoto: require("../Assets/Ayush-Singh.jpg"),
          tags: ["DSC NSEC"],
          description:
            "Flutter Dev, Technical Content Moderator at Manning Publications.",
        //   organisationLogo: require("../Assets/org-logo.png"),
          organisationName: "Winter of Code",
          LinkedInLink: "https://www.linkedin.com/in/ayush-singh-5823a5180/",
          TwitterLink: "https://twitter.com/ahyush_670",
          GithubLink: "https://github.com/ayush-670",
        },
        {
          username: "Ritesh Prasad Singh",
        //   userphoto: require("../Assets/Ritesh.jpg"),
          tags: ["Deep Fusion AI"],
          description: "Data Science Enthusiast",
        //   organisationLogo: require("../Assets/org-logo.png"),
          organisationName: "Winter of Code",
          LinkedInLink: "https://www.linkedin.com/in/chafer/",
          TwitterLink: "https://twitter.com/Ritesh_chafer",
          GithubLink: "https://github.com/ritesh-chafer",
        },
        {
          username: "Rishiraj Acharya",
        //   userphoto: require("../Assets/Rishiraj-Acharya.jpg"),
          tags: ["DSC NSEC", "Deep Fusion AI"],
          description:
            "ML Engineer, Microsoft Student Partner, deeplearning.ai Ambassador, former Facilitator at Stanford University.",
        //   organisationLogo: require("../Assets/org-logo.png"),
          organisationName: "Winter of Code",
          LinkedInLink: "https://www.linkedin.com/in/rishirajacharya/",
          TwitterLink: "https://twitter.com/RishirajAcharya",
          GithubLink: "https://github.com/rishiraj",
        },
        {
          username: "Saurav Kumar",
        //   userphoto: require("../Assets/Saurav-Kumar.jpg"),
          tags: ["DSC NSEC"],
          description:
            "WOC 2020 Mentor for DSC NSEC, App Developer",
        //   organisationLogo: require("../Assets/org-logo.png"),
          organisationName: "Winter of Code",
          LinkedInLink: "https://www.linkedin.com/in/saurav0001kumar/",
          TwitterLink: undefined,
          GithubLink: "https://github.com/saurav0001kumar/",
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
                            {OrganizersData.map(organiser =>(
                                <Grid item xs={12} md={4}>
                                    <div className={profileContainer}>
                                        <img src={pic} className={image}></img>
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
                        {OrganizersData.map(organiser =>(
                            <Grid item xs={12} md={4}>
                                <div className={profileContainer}>
                                    <img src={pic} className={image}></img>
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

