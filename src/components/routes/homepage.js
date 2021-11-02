import React from 'react'
import LandingPage from '../landingpage/landingpage';
import About from "../aboutpage/about"
import Apply from "../apply/apply";
import Orgs from "../orgs/orgs";
import Timeline from "../timeline/timeline";
import Faq from "../faq/faq";
import Footer from "../footer/footer";
import Sponsors from '../sponsorspage/sponsors';

export default function Homepage() {
    return (
        <div>
            <LandingPage/>
            <About/>
            <Apply/>
            <Orgs/>
            <Timeline/>
            <Sponsors/>
            <Faq/>
            <Footer/>
        </div>
    )
}
