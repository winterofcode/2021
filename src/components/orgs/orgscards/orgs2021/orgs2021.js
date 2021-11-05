import React, {useState, useEffect} from 'react'
import { UseStyles } from './orgs2021data';

export default function Orgs2021() {
    const {root, section, sectionMobile} = UseStyles();

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
            <div>
                <div className={section}>
                    <h3>To be announced</h3>
                </div>
            </div>
        );
      };
    
    const displayMobile = () => {
        return (
            <div>
                <div className={sectionMobile}>
                    <h4>To be announced</h4>
                </div>
            </div>
        );
    };

    return (
        <div className={root}>
            {mobileView ? displayMobile() : displayDesktop()}  
        </div>
    )
}