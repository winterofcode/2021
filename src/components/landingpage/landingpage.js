import React from 'react'
import { CssBaseline, makeStyles } from '@material-ui/core'
import Navbar from '../navbar/navbar';

const UseStyles = makeStyles(() => ({
    root: {
        minHeight: '100vh',
        backgroundColor: '#001D3D',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}));

export default function landingPage() {
    const {root} = UseStyles();

    return (
        <div className={root}>
            <CssBaseline/>
            <Navbar/>
        </div>
    )
}