import React, {useState, useEffect} from 'react'
import { UseStyles } from './applydata';
import { Stack, Button } from '@mui/material';

import Parallax from '../../hooks/parallax';

export default function Apply() {
    const {root, ApplyTitle, ApplyButton, ApplyContent, ApplyContentMobile, ApplyButtonMobile, ApplySection} = UseStyles();

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

    const displayDesktop = () => {
        return (
            <div className={ApplySection}>
            
                <div className={ApplyTitle}>
                    <h2>Apply</h2>
                </div>
                <div className={ApplyContent}>
                    <p>Start your journey with Winter Of Code & be a part of our Open Source community.</p>
                </div>
                <div className={ApplyContent}>
                    <p>Check the <a 
                        style={{textDecoration: "none",
                                color: "#FFD60A"}}
                        href="#timeline">Timeline</a> section. Applications will open on the mentioned date.</p>
                </div>
                <div className={ApplyButton}>
                    <Stack spacing={2} direction="row">
                        <Button 
                            style={{borderRadius: '50px'}} 
                            variant="contained">
                                <a 
                                    style={{textDecoration: "none",
                                          color: "white"}}
                                    href="https://forms.gle/m7qx3nCawkH5mg616">
                                        Apply as Organisation
                                </a>
                        </Button>
                        <Button 
                            style={{borderRadius: '50px'}} 
                            variant="contained">
                                <a 
                                    style={{textDecoration: "none",
                                          color: "white"}}
                                    href="https://forms.gle/ab4mCgH5ELzp6YQ16">
                                        Apply as Mentor
                                </a>
                        </Button>
                        <Button 
                            style={{borderRadius: '50px'}} 
                            variant="contained">
                                <a 
                                    style={{textDecoration: "none",
                                          color: "white"}}
                                    href="https://forms.gle/Ux6F21CsiQ5vMHv49">
                                        Apply as Student
                                </a>
                        </Button>
                    </Stack>
                </div>
                
            </div>
        );
      };
    
    const displayMobile = () => {
        return (
            <div>
         
                <h2 className={ApplyTitle}>Apply</h2>
                <p className={ApplyContentMobile}>Start your journey with Winter Of Code & be a part of our Open Source community.</p>
                <br />
                <p className={ApplyContentMobile}>Check the&nbsp; <a 
                        style={{textDecoration: "none",
                                color: "#FFD60A"}}
                        href="#timeline"> Timeline&nbsp;</a> section.</p>
                <br/>
                <p className={ApplyContentMobile}>Applications will open on the mentioned date.</p>
                <Stack className={ApplyButtonMobile} spacing={2} direction="row">
                    <Button 
                        style={{borderRadius: '50px'}} 
                        variant="contained">
                            <a 
                                style={{textDecoration: "none",
                                        color: "white"}}
                                href="https://forms.gle/m7qx3nCawkH5mg616">
                                    Apply as Organisation
                            </a>
                    </Button>
                </Stack>
                <Stack className={ApplyButtonMobile} spacing={2} direction="row">
                    <Button 
                        style={{borderRadius: '50px'}} 
                        variant="contained">
                            <a 
                                style={{textDecoration: "none",
                                        color: "white"}}
                                href="https://forms.gle/ab4mCgH5ELzp6YQ16">
                                    Apply as Mentor
                            </a>
                    </Button>
                </Stack>
                <Stack className={ApplyButtonMobile} spacing={2} direction="row">
                    <Button 
                        style={{borderRadius: '50px'}} 
                        variant="contained">
                            <a 
                                style={{textDecoration: "none",
                                        color: "white"}}
                                href="https://forms.gle/Ux6F21CsiQ5vMHv49">
                                    Apply as Student
                            </a>
                    </Button>
                </Stack>
             
            </div>
        )     
    };

    return (
        <div id="apply" className={root}>
            
            {mobileView ? displayMobile() : displayDesktop()}  
            
        </div>
    )
}
