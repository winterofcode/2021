import React, {useState, useEffect} from 'react'
import { UseStyles } from '../../orgsdata';
import { Grid } from '@material-ui/core';
import { Organisations2019 } from './orgs2019data';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';

import { Button } from '@material-ui/core';
import { maxWidth } from '@mui/system';

// import { Card, CardHeader, ImageHeader, } from 'react-simple-card';

import { Card } from 'react-bootstrap';

export default function Orgs2019() {
    const {root, cards, cardWrapper, Media, gridContainer, imageStyle} = UseStyles();

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
            <>
                {Organisations2019.map(orgs => (
                    <Card 
                        style={
                            {
                                margin: "80px", 
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
                                    left: "24%",
                                    margin: "5px",
                                    color: "white",
                                    borderRadius: "50px",
                                    padding: "5%"
                                }}
                                >View Projects</Button>
                        </Card.Body>
                    </Card>
                ))}
                
            </>

        );
      };
    
    const displayMobile = () => {
        return (
            <div>
                {/* {Organisations2019.map(orgs => (
                    <Grid container spacing={6} className={gridContainer}>
                        <Grid item xs={12} sm={6} md={12}>
                        <Card>
                            <CardMedia

                                component="img"
                                // width="45px"
                                // height="550"
                                // width="100"
                                className={Media}
                                image={orgs.logo}
                                alt=""
                            />
                            <CardHeader
                            title={orgs.name}
                            subheader={orgs.text}
                            />
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                            </CardActions>
                        </Card>
                        </Grid>
                        
                    </Grid>
                        
                        ))} */}
            </div>
        );
    };

    return (
        <div className={root}>
            {mobileView ? displayMobile() : displayDesktop()}  
        </div>
        )
    }