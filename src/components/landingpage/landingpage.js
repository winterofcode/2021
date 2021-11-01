import React from 'react'
import { CssBaseline, makeStyles } from '@material-ui/core'
import Navbar from '../navbar/navbar';
import WelcomePage from '../welcomepage/welcomepage';
import { UseStyles } from '../landingpage/landingpagedata';

export default function LandingPage() {
    const {root} = UseStyles();

    return (
        <div className={root}>
            <CssBaseline/>
            <Navbar/>
            <WelcomePage/>
        </div>
    )
}