import React from 'react';
import yellowlogo from '../../images/yellow-org-logo.png';
import redlogo from '../../images/red-org-logo.png';
import greenlogo from '../../images/green-org-logo.png';
import bluelogo from '../../images/blue-org-logo.png';

import '../../styles/splashscreen/splashscreen.css';

export default function SplashScreen() {

    return (
        <div className='container'>
            <div className="logoParts">
                <img src={yellowlogo} id="yellowlogo" alt="yellowlogo"/>
                <img src={redlogo} id="redlogo" alt="redlogo"/>
                <img src={greenlogo} id="greenlogo" alt="greenlogo"/>
                <img src={bluelogo} id="bluelogo" alt="bluelogo"/>
            </div>
        </div>
    )
}