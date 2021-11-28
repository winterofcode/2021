import React, {useState, useEffect} from 'react'
import { UseStyles } from './sponsorsdata';

import Parallax from '../../hooks/parallax';
import Schwags2021 from './schwagsinfo/schwags2021';

export default function Sponsors() {

    const { root, sectionHeading, sectionHeadingMobile} = UseStyles();

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
               <div className={sectionHeading}>
                 <h2>Rewards for Successful Students</h2>
               </div>
               <Schwags2021/>
            </div>
        ) 
    }

    const displayMobile = () => {

        return(
            <div>
            <Parallax>
            <div className={sectionHeadingMobile}>
              <h2>Rewards for Successful Students</h2>
            </div>
            <Schwags2021/>
            </Parallax>
           
         </div>
        )
    }

    return (

        <div className={root}>
            <Parallax>
                {mobileView ? displayMobile() : displayDesktop()}  
            </Parallax>
        </div>
    )
}