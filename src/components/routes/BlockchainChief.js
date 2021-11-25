import React, {useState, useEffect} from 'react'
import { CssBaseline, makeStyles } from '@material-ui/core';
import Navbar from '../navbar/navbar';
import { Grid, Button } from '@material-ui/core';
import { Card } from 'react-bootstrap';
import Footer from '../footer/footer';

import TheBlockchainChief from '../../images/orgimages/theblockchainchief.png';
import NavbarRoute from './navbarroute';

export const UseStyles = makeStyles((theme) => ({
    // root: {
    //     background: "#001D3D",
    //     minHeight: "100vh"
    // },
    projectTitle: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "1.5rem",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        width: "100px",
        height: "100px",
        position: "absolute",
        top:"100px", 
        left: "100px",
        margin: "auto",
        color: "#fff"
    },
    projectSection: {
        minHeight: "100vh",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    cardStyle: {
      position: "relative",
        top:"60px",
        left: "0",
        right: "0",
    },
    projectTitleMobile: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: "1.5rem",
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      width: "100px",
      height: "100px",  
      position: "absolute",
      top:"60px", 
      left: "60px",
      margin: "auto",
      color: "#fff",
      fontSize: "20px"
  },
  cardStyleMobile: {
      position: "relative",
      top:"50px",
      left: "0",
      right: "0",

      display: "flex",
      flexGrow:"1"
  },
  }))

export default function BlockchainChiefProject() {
    const {root, projectSection, projectTitle, cardStyle, cardStyleMobile, projectTitleMobile} = UseStyles();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
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

    const displayDesktop = () => {
        return (
            <div>
                <div style={{height: "5vh",}}>
                  <CssBaseline/>
                  <NavbarRoute/>
                </div>
                <div className={projectSection}>
                    <div className={projectTitle}>
                      <h1>Projects</h1>
                    </div>
                    <div className={cardStyle}>
                        <Grid container>
                            {Projects.map(projects => (
                                <Grid item lg={12} md={12} xs={12} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Card
                                        style={
                                            {
                                                margin: "100px",
                                                background: "white",
                                                width: "18rem",
                                                height: "20rem",
                                                border: "50px"
                                            }}>
                                        <Card.Img
                                            style={
                                                {
                                                    width: "100px",
                                                    height: "100px",
                                                    objectFit: "cover",
                                                    margin: "10px"
                                                    }}
                                                    variant="top"
                                                    src={projects.logo} />
                                        <Card.Body>
                                            <Card.Title
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    fontSize: "16px"
                                                        }}>
                                                            {projects.name}
                                            </Card.Title>
                                            <br/><br/><br/>
                                            <Button
                                                style={{
                                                    background: "#003566",
                                                    color: "white",
                                                    borderRadius: "50px",
                                                    padding: "5%",
                                                    marginLeft: "20%",
                                                    marginRight: "20%",
                                                    width: "60%"
                                                }}
                                                ><a 
                                                style={{
                                                    textDecoration: "none",
                                                    color: "white"
                                                }} 
                                                href={projects.link}>View Projects</a></Button>
                                        </Card.Body>
                                    </Card>
                                </Grid>
                        ))}
                        </Grid>
                    </div>
                </div>
   
                <Footer/>
            </div>
        );
      };
    
    const displayMobile = () => {
        return (
            <div>
                <div style={{height: "5vh",}}>
                    <CssBaseline/>
                    <NavbarRoute/>
                </div>
                <div className={projectSection}>
                    <div className={projectTitleMobile}>
                        <h1>Projects</h1>
                    </div>
                    <div className={cardStyleMobile}>
                        <Grid container spacing={12}>
                        {Projects.map(projects => (
                        <Grid item lg={12} md={12} xs={12} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Card
                            style={
                                {
                                    margin: "56px",
                                    background: "white",
                                    width: "70%",
                                    height: "70%",
                                    border: "50px"
                                }}>
                            <Card.Img
                                style={
                                    {
                                        width: "100px",
                                        height: "100px",
                                        objectFit: "cover",
                                        margin: "10px"
                                        }}
                                        variant="top"
                                        src={projects.logo} />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontSize: "25px"
                                            }}>
                                                {projects.name}
                                </Card.Title>
                                
                                <br/><br/><br/>
                                <Button
                                    style={{
                                        background: "#003566",
                                        marginBottom: "40px",
                                        color: "white",
                                        borderRadius: "50px",
                                        padding: "5%",
                                        marginLeft: "20%",
                                        marginRight: "20%",
                                        width: "60%"
                                    }}
                                    ><a 
                                    style={{
                                        textDecoration: "none",
                                        color: "white"
                                    }} 
                                    href={projects.link}>View Projects</a></Button>
                            </Card.Body>
                        </Card>
                        </Grid>
                    ))}
                    </Grid>
            
                    </div>
                </div>
                <Footer/>
            </div>
        );
    };

    return (
        <div>
            {mobileView ? displayMobile() : displayDesktop()}  
        </div>
    )
}


const Projects = [
    {
      name: "The Blockchain Chief",
      logo: TheBlockchainChief,
      tag: "theblockchainchief",
      link: "",
      btnText: "View Project",
      openInNew: true
    },
  ];