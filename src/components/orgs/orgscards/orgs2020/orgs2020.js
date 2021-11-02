import React, {useState, useEffect} from 'react'
import { UseStyles } from '../../orgsdata';
import { Grid } from '@material-ui/core';
import { Organisations2020 } from './orgs2020data';
import { Button } from '@material-ui/core';
import { Card } from 'react-bootstrap';
import Parallax from '../../../../hooks/parallax';

export default function Orgs2020() {
    const {root, cards, cardWrapper, Media, gridContainer, cardSection} = UseStyles();

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

    const displayDesktop = () => {
        return (
            <div>
                {/* <div Style={{display: "grid"}} className={cardSection}> */}
                <Grid container>
                {Organisations2020.map(orgs => (
                    <Grid item lg={4} md={6} xs={12} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
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
                                    src={orgs.logo} />
                        <Card.Body>
                            <Card.Title
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "25px"
                                         }}>
                                             {orgs.name}
                            </Card.Title>
                            <Card.Subtitle
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "20px"
                                }}
                                className="mb-2 text-muted">
                                {orgs.text}
                            </Card.Subtitle>
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
                                href={orgs.link}>View Projects</a></Button>
                        </Card.Body>
                    </Card>
                    </Grid>
                ))}
                </Grid>
            </div>
        );
      };

    const displayMobile = () => {
        return (
            <div>
                <Grid container spacing={12}>
                {Organisations2020.map(orgs => (
                    <Grid item lg={4} md={6} xs={12} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
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
                                    src={orgs.logo} />
                        <Card.Body>
                            <Card.Title
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "end",
                                    fontSize: "25px"
                                         }}>
                                             {orgs.name}
                            </Card.Title>
                            <Card.Subtitle
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "20px"
                                }}
                                className="mb-2 text-muted">
                                {orgs.text}
                            </Card.Subtitle>
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
                                href={orgs.link}>View Projects</a></Button>
                        </Card.Body>
                    </Card>
                    </Grid>
                ))}
                </Grid>
            </div>
        );
    };

    return (
        <div className={root}>
            <Parallax offset={100}>
            {mobileView ? displayMobile() : displayDesktop()}
            </Parallax>
        </div>
        )
    }