import React, {useState, useEffect} from 'react'
import { UseStyles } from './sponsorsdata';
import Schwags2019 from './schwagsinfo/schwags2021';

export default function Sponsors() {

    const { root, section, sectionHeading, sectionHeadingMobile} = UseStyles();

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
                 <h1>Rewards for Successful Students</h1>
               </div>
               <Schwags2019/>
            </div>
        ) 
    }

    const displayMobile = () => {

        return(
            <div>
            <div className={sectionHeadingMobile}>
              <h1>Rewards for Successful Students</h1>
            </div>
            <Schwags2019/>
           
         </div>
        )
    }

    return (

        <div className={root}>
        {mobileView ? displayMobile() : displayDesktop()}  
        </div>
    )
}