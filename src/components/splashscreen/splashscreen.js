import React from 'react';
import yellowlogo from '../../images/yellow-org-logo.png';
import redlogo from '../../images/red-org-logo.png';
import greenlogo from '../../images/green-org-logo.png';
import bluelogo from '../../images/blue-org-logo.png';

import {motion} from 'framer-motion';

import './splashscreen.css';

export default function SplashScreen() {

    return (
        <div className='container'>
            <div className="logoParts">
                <motion.img animate={{y:"calc(50vh - 115px)"}} src={yellowlogo} id="yellowlogo" alt="yellowlogo"/>
                <motion.img animate={{x:"calc(-50vw + 115px)"}} src={redlogo} id="redlogo" alt="redlogo"/>
                <motion.img animate={{y:"calc(-50vh + 115px)"}} src={greenlogo} id="greenlogo" alt="greenlogo"/>
                <motion.img animate={{x: "calc(50vw - 115px)"}} src={bluelogo} id="bluelogo" alt="bluelogo"/>
            </div>
        </div>
    )
}