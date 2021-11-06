import React from 'react';
// import yellowlogo from '../../images/yellow-org-logo.png';
// import redlogo from '../../images/red-org-logo.png';
// import greenlogo from '../../images/green-org-logo.png';
// import bluelogo from '../../images/blue-org-logo.png';

import yellowlogo from '../../images/y.png';
import redlogo from '../../images/r.png';
import greenlogo from '../../images/g.png';
import bluelogo from '../../images/b.png';

import {motion} from 'framer-motion';

import './splashscreen.css';

export default function SplashScreen() {

    return (
        <div className='screen'>
            <div className="logoParts">
                <motion.img initial={{opacity: 0}} animate={{y:"calc(50vh - 106px)", opacity: 1}} transition={{ease: "backOut", duration: 2}} src={yellowlogo} id="yellowlogo" alt="yellowlogo"/>
                <motion.img initial={{opacity: 0}} animate={{x:"calc(-50vw + 106px)", opacity: 1}} transition={{ease: "backOut", duration: 2}} src={redlogo} id="redlogo" alt="redlogo"/>
                <motion.img initial={{opacity: 0}} animate={{y:"calc(-50vh + 106px)", opacity: 1}} transition={{ease: "backOut", duration: 2}} src={greenlogo} id="greenlogo" alt="greenlogo"/>
                <motion.img initial={{opacity: 0}} animate={{x: "calc(50vw - 106px)", opacity: 1}} transition={{ease: "backOut", duration: 2}} src={bluelogo} id="bluelogo" alt="bluelogo"/>
            </div>
        </div>
    )
}