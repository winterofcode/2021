import React, {useState, useEffect} from 'react'
import { UseStyles } from './footerdata';
import logo from "../../images/org-logo.png";
import {ExternalLink}  from "react-external-link"
import {Instagram,Facebook,Twitter} from "../../icon/icon"

export default function Footer() {
    const {
        root, 
        footerWrapper, 
        footerColumn1,
        footerColumn2,
        footerColumn3,
        logoRow,
        logoimg,
        logoTitle,
        socialLinkRow,
        wocTitle,
        wocCopyright,
        resourcesTitle,
        resourceslink,
        DSCNSECTitle,
        handlesLink,
        footerWrapperMobile,
        footerColumnMobile,
        logoflexRowMobile,
        logoTitleMobile,
        socialLinkRowMobile,
        wocTitleMobile,
        wocCopyrightMobile,
        resourcesTitleMobile,
        resourceslinkMobile,
        DSCNSECTitleMobile,
        handlesLinkMobile,
    } = UseStyles();

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
            <div className={footerWrapper}>
                <div className={footerColumn1}>
                    <div className={logoRow}>
                        <img src={logo} className={logoimg} alt="logo" />
                        <p className={logoTitle}>Winter of Code</p>
                    </div>
                    <div className={socialLinkRow}>
                        <ExternalLink href="https://www.instagram.com/winterofcode/">
                            <Instagram fill={"#DA003D"} width={30} height={30} />
                        </ExternalLink>
                        <ExternalLink href="https://www.facebook.com/winterofcode/">
                            <Facebook fill="#4267B2" width={30} height={30} />
                        </ExternalLink>
                        <ExternalLink href="https://twitter.com/winterofcode/">
                            <Twitter fill="#00acee" width={30} height={30} />
                        </ExternalLink>
                    </div>
                    <div className={wocTitle}>
                        <p>The Winter of Code is a program aimed to increase participation for the Google Summer of Code program among students in colleges and universities.</p>
                    </div>
                    <div className={wocCopyright}>
                        <p>&copy; Winter of Code 2020</p>
                    </div>
                </div>
                <div className={footerColumn2}>
                    <div className={resourcesTitle}>
                        <p>Resources</p>
                    </div>
                    <div className={resourceslink}>
                        <ExternalLink className={resourceslink} href="https://intro2ml.dscnsec.com/">
                            <p>Intro to ML</p>
                        </ExternalLink>
                        <ExternalLink className={resourceslink} href="https://logo-generator.dscnsec.com/">
                            <p>Logo Generator</p>
                        </ExternalLink>
                        <ExternalLink className={resourceslink} href="https://go.dscnsec.com/">
                            <p>DSC NSEC Go</p>
                        </ExternalLink>
                        <ExternalLink className={resourceslink} href="https://www.youtube.com/playlist?list=PLLGfrNGZ7g4MzarnbBN-DC_AGErhYMC2s">
                            <p>Full Stack Projects</p>
                        </ExternalLink>
                        <ExternalLink className={resourceslink} href="https://30daysofgc.dscnsec.com/">
                            <p>30 Days of Google Cloud</p>
                        </ExternalLink>
                    </div>
                </div>
                <div className={footerColumn3}>
                    <div className={DSCNSECTitle}>
                        <p>DSC NSEC Handles</p>
                    </div>
                    <div className={handlesLink}>
                        <ExternalLink className={handlesLink} href="https://www.instagram.com/dscnsec/">
                            <p>Instagram</p>
                        </ExternalLink>
                        <ExternalLink className={handlesLink} href="https://twitter.com/dscnsec">
                            <p>Twitter</p>
                        </ExternalLink>
                        <ExternalLink className={handlesLink} href="https://t.me/dscnsec">
                            <p>Telegram</p>
                        </ExternalLink>
                        <ExternalLink className={handlesLink} href="https://www.youtube.com/channel/UCKKrqXvTWZm0tULPxqv1NPg">
                            <p>Youtube</p>
                        </ExternalLink>
                        <ExternalLink className={handlesLink} href="https://www.facebook.com/dscnsec/">
                            <p>Facebook</p>
                        </ExternalLink>
                    </div>
                </div>
            </div>
        );
      };
    
    const displayMobile = () => {
        return (
            <div className={footerWrapperMobile}>
                <div className={footerColumnMobile}>
                    <div className={logoflexRowMobile}>
                        <img src={logo} className={logoimg} alt="logo" />
                        <p className={logoTitleMobile}>Winter of Code</p>
                    </div>
                    <div className={socialLinkRowMobile}>
                        <ExternalLink href="https://www.instagram.com/winterofcode/">
                            <Instagram fill={"#DA003D"} width={30} height={30} />
                        </ExternalLink>
                        <ExternalLink href="https://www.facebook.com/winterofcode/">
                            <Facebook fill="#4267B2" width={30} height={30} />
                        </ExternalLink>
                        <ExternalLink href="https://twitter.com/winterofcode/">
                            <Twitter fill="#00acee" width={30} height={30} />
                        </ExternalLink>
                    </div>
                    <div className={wocTitleMobile}>
                        <p>The Winter of Code is a program aimed to increase participation for the Google Summer of Code program among students in colleges and universities.</p>
                    </div>
    
                    <div className={resourcesTitleMobile}>
                        <p>Resources</p>
                    </div>
                    <div className={resourceslinkMobile}>
                        <ExternalLink className={resourceslinkMobile} href="https://intro2ml.dscnsec.com/">
                            <p>Intro to ML</p>
                        </ExternalLink>
                        <ExternalLink className={resourceslinkMobile} href="https://logo-generator.dscnsec.com/">
                            <p>Logo Generator</p>
                        </ExternalLink>
                        <ExternalLink className={resourceslinkMobile} href="https://go.dscnsec.com/">
                            <p>DSC NSEC Go</p>
                        </ExternalLink>
                        <ExternalLink className={resourceslinkMobile} href="https://www.youtube.com/playlist?list=PLLGfrNGZ7g4MzarnbBN-DC_AGErhYMC2s">
                            <p>Full Stack Projects</p>
                        </ExternalLink>
                        <ExternalLink className={resourceslinkMobile} href="https://30daysofgc.dscnsec.com/">
                            <p>30 Days of Google Cloud</p>
                        </ExternalLink>
                    </div>
                    <div className={DSCNSECTitleMobile}>
                        <p>DSC NSEC Handles</p>
                    </div>
                    <div className={handlesLinkMobile}>
                        <ExternalLink className={handlesLinkMobile} href="https://www.instagram.com/dscnsec/">
                            <p>Instagram</p>
                        </ExternalLink>
                        <ExternalLink className={handlesLinkMobile} href="https://twitter.com/dscnsec">
                            <p>Twitter</p>
                        </ExternalLink>
                        <ExternalLink className={handlesLinkMobile} href="https://t.me/dscnsec">
                            <p>Telegram</p>
                        </ExternalLink>
                        <ExternalLink className={handlesLinkMobile} href="https://www.youtube.com/channel/UCKKrqXvTWZm0tULPxqv1NPg">
                            <p>Youtube</p>
                        </ExternalLink>
                        <ExternalLink className={handlesLinkMobile} href="https://www.facebook.com/dscnsec/">
                            <p>Facebook</p>
                        </ExternalLink>
                    </div>
                    <div className={wocCopyrightMobile}>
                        <p>&copy; Winter of Code 2020</p>
                    </div>
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
