import { createMuiTheme, makeStyles, styled } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { UseStyles } from '../welcomepage/welcomepagedata';

import wocimage from '../../images/WOC.png';



// const StyledButton = styled(Button)({
//     borderRadius: "50%",
//     fontFamily: "Open Sans, sans-serif",
//     fontSize: "18px",
//     color: "white",
// })


export default function WelcomePage() {

    const {root, welcomeTitle, welcomeSubTitle, welcomeWoc, wocimagestyle, wocimagestylemobile} = UseStyles();

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
        <>
        <div>
            <h1 className={welcomeTitle}>Welcome to <br/>
            <span className={welcomeWoc}> Winter of Code </span> <br/>
            <span className={welcomeSubTitle}>An initiative of GDSC NSEC</span>
            </h1>
            <Stack spacing={2} direction="row">
                <Button style={{borderRadius: '50px'}} variant="outlined">Get Started</Button>
                <Button style={{borderRadius: '50px'}} variant="outlined">Apply</Button>
            </Stack>
        </div>
            <img src={wocimage} className={wocimagestyle} alt="WOC main imgs"/>
        </>
        );
      };

    const displayMobile = () => {

    return (
        <div>
            <h1 className={welcomeTitle}>Welcome to <br/>
            <span className={welcomeWoc}> Winter of Code </span> <br/>
            <span className={welcomeSubTitle}>An initiative of GDSC NSEC</span>
            </h1>
            <div>
                <Stack spacing={2} direction="row">
                    <Button style={{borderRadius: '50px'}} variant="outlined">Get Started</Button>
                    <Button style={{borderRadius: '50px'}} variant="outlined">Apply</Button>
                </Stack>
            </div>
            <br/>
            <img src={wocimage} className={wocimagestylemobile} alt="WOC main imgs"/>
        </div>
    );
    };


    return (
        <div className={root}>
            {mobileView ? displayMobile() : displayDesktop()}  
        </div>
    )
}