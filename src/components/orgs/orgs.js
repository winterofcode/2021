import React, {useState, useEffect} from 'react'
import { UseStyles } from './orgsdata';
import { Stack, Button } from '@mui/material';
import Orgs2019 from './orgscards/orgs2019/orgs2019';
import Orgs2020 from './orgscards/orgs2020/orgs2020';
import Orgs2021 from './orgscards/orgs2021/orgs2021';
import Parallax from '../../hooks/parallax';

export default function Orgs() {
    const {root, orgsTitle, ApplyButton, cardStyle} = UseStyles();

    const [active, setActive] = useState('2021');
    const [isContained2019, setisContained2019] = useState(false);
    const [isContained2020, setisContained2020] = useState(false);
    const [isContained2021, setisContained2021] = useState(true);

    const Toggle = (e) => {
        setActive(e.target.value)
        if(e.target.value==='2019') {
            setisContained2019(true)
            setisContained2020(false)
            setisContained2021(false)
        }
        else if(e.target.value==='2020') {
            setisContained2019(false)
            setisContained2020(true)
            setisContained2021(false)
        }
        else {
            setisContained2019(false)
            setisContained2020(false)
            setisContained2021(true)
        }
    }

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
                <div className={orgsTitle}>
                    <h2>Organisations</h2>
                </div>
                <div className={ApplyButton}>
                    <Stack spacing={2} direction="row">
                        <Button 
                            value="2019" 
                            onClick={Toggle} 
                            style={{borderRadius: '50px'}} variant={isContained2019 ? 'contained' : "outlined"}>
                                <a 
                                    style={{textDecoration: "none", color: "#1976d2"}}
                                    href="https://2019.winterofcode.com/#org">
                                    2019
                                </a>
                        </Button>
                        <Button 
                            value='2020' 
                            onClick={Toggle} 
                            style={{borderRadius: '50px'}} variant={isContained2020 ? 'contained' : "outlined"}>
                                <a 
                                    style={{textDecoration: "none", color: "#1976d2"}}
                                    href="https://winterofcode.com/#js-organisations">
                                    2020
                                </a>
                        </Button>
                        <Button value='2021' onClick={Toggle} style={{borderRadius: '50px'}} variant={isContained2021 ? 'contained' : "outlined"}>2021</Button>
                    </Stack>
                </div>
                <div>
                    {active==="2019" && <Orgs2019/>}
                    {active==="2020" && <Orgs2020/>}
                    {active==="2021" && <Orgs2021/>}
                </div>
            </div>
        );
      };
    
    const displayMobile = () => {
        return (
            <div>
                <Parallax>
                <div className={orgsTitle}>
                    <h2>Organisations</h2>
                </div>
                <div className={ApplyButton}>
                    <Stack spacing={2} direction="row">
                        <Button 
                            value="2019" 
                            onClick={Toggle} 
                            style={{borderRadius: '50px'}} 
                            variant={isContained2019 ? 'contained' : "outlined"}>
                                <a 
                                    style={{textDecoration: "none", color: "#1976d2"}}
                                    href="https://2019.winterofcode.com/#org">
                                    2019
                                </a>
                        </Button>
                        <Button 
                            value='2020' 
                            onClick={Toggle} 
                            style={{borderRadius: '50px'}} variant={isContained2020 ? 'contained' : "outlined"}>
                                <a 
                                    style={{textDecoration: "none", color: "#1976d2"}}
                                    href="https://winterofcode.com/#js-organisations">
                                    2020
                                </a>
                        </Button>
                        <Button value='2021' onClick={Toggle} style={{borderRadius: '50px'}} variant={isContained2021 ? 'contained' : "outlined"}>2021</Button>
                    </Stack>
                </div>
      
                <div>
                    {active==="2019" && <Orgs2019/>}
                    {active==="2020" && <Orgs2020/>}
                    {active==="2021" && <Orgs2021/>}
                </div>
             
                </Parallax>
            </div>
        );
    };

    return (
        <div id="organisations" className={root}>
            <Parallax>
                {mobileView ? displayMobile() : displayDesktop()}  
            </Parallax>
        </div>
    )
}
