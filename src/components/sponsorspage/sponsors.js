import React, {useState, useEffect} from 'react'
import { UseStyles } from './sponsorsdata';
import Schwags2019 from './schwagsinfo/schwags2019';

export default function Sponsors() {

    const { root, section, sectionHeading} = UseStyles();

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
            <div className={section}>
               <div>
                 <h1 className={sectionHeading}> Rewards for Successful Students </h1>
               </div>
               <Schwags2019/>
            </div>
            </>
        ) 
    }

    const displayMobile = () => {

        return(
           <>
                <div className={section}>
                 <h1 className={sectionHeading} style={{fontSize: "1.2rem"}}> Rewards for Successful Students </h1>
                 <Schwags2019/>
                </div>
           </>
        )
    }



    return (

        <div className={root}>
        {mobileView ? displayMobile() : displayDesktop()}  
        </div>
    )
}


