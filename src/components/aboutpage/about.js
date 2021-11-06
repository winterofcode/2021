import * as React from 'react';
import {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import { UseStyles } from '../aboutpage/aboutdata';
import wocimage from '../../images/woc.png'

import Parallax from '../../hooks/parallax';

export default function About() {


    const [state, setState] = useState({
        mobileView: false,
      });
    
      const { root, sectionHeading, section, titleText, descriptionText, workSection,
         subSection, workSectionMobile, subSectionMobile, statsText, sectionRow,
         sectionTwo, worksubSection, wocimagestyle, sectionRowMobile, iframeMobile}= UseStyles();
    
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
            <Parallax>
            <div className={section}>
                    <div>
                        <h2 className={sectionHeading}>About The Program <br /></h2>
                    </div>
                    <div>
                        <h2 className={titleText}>
                            Winter of Code is{" "}
                            <span>a program aimed to increase participation </span>{" "}
                            for{" "}
                            <span>
                                the Google Summer of Code program among students in colleges and universities.
                            </span>
                        </h2>
                    </div>
                    <p className={descriptionText}>
                        Winter of Code is here to light up your winter spirits with the wide
                        world of open source development. This initiative aims to prepare you
                        for the grand Google Summer of Code. Join us for a month-long
                        programming project with an open-source organisation.
                    </p>
                    <p className={descriptionText}>
                        As a part of the Winter of Code, students are paired with mentors from
                        the participating organisation. This initiative aims at developing
                        your skills in real-world software development in a wide range of
                        specializations. In turn, the participating organisation gets to know
                        your potential and also gives you the correct exposure that you need
                        in your formative years. Above all, we hope you get encouraged into
                        the world of open source and develop more code for the benefit of all.
                    </p>
            </div>
        
                <br/>
        
            <div className={workSection}>
                <div className={subSection}>
                        <Typography>
                        <p align='center' className={statsText}>300+</p>
                        <p align='center' className={statsText}>Students</p>
                        </Typography>
                </div>
                <div className={subSection}>
                    <Typography>
                    <p align='center' className={statsText}>10+</p>
                    <p align='center' className={statsText}>Organisations</p>
                    </Typography>
                </div>
                <div align='center' className={subSection}>
                    <Typography>
                    <p align='center' className={statsText}>40+</p>
                    <p align='center' className={statsText}>Mentors</p>
                    </Typography>
                </div>
            </div>
            </Parallax>
            <Parallax>
            <div>
               <h2 className={sectionHeading}>Let's Build Something Awesome Together <br /></h2>   
            </div>
            </Parallax>
            <div className={sectionTwo}>
                <Parallax>
                <div className={sectionRow}>
                    <div style={{ marginTop: "1%"}}>
                        <p className={descriptionText}>
                          Developer Students Club of NSEC brings to you Winter of Code which is a month-long extravaganza
                          of Open Source contribution, bringing together students, organisations and mentors to build 
                          amazing projects together. Here is what the program has to offer for students, organisations, and mentors.
                        </p>
                    </div>
                    <div>
                       <img src={wocimage} className={wocimagestyle} alt="WOC main imgs"/>
                    </div>
                </div>
                </Parallax>
                <Parallax>
                <div>
                  <h2 className={sectionHeading}>How the Program Works?<br /></h2>   
                </div>
                </Parallax>
                <Parallax>
                <div className={sectionRow}>
                  <div style={{margin: "2%"}}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZtyBCP6_whw"
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
                    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                   <div>
                      <Typography>
                        <h2 align="center"> Students</h2>
                        <p className={descriptionText}>Students who are interested can register for the Winter of Code by filling a form.
                         Students who are selected will work with mentors of the organisation that they are accepted for.
                         If accepted, students amalgamate with their organisations prior to the start of coding and learn more
                          about their organisation’s community. Students then have one month to code and meet the deadlines agreed upon with their mentors.
                          On successful completion of the program students will be rewarded with some cool schwags.</p>
                      </Typography>
                   </div>
                
                </div>
            
                <div className={sectionRow}>
                    <div>
                        <Typography>
                            <h2 align="center">Organisations</h2>
                            <p className={descriptionText}>
                             Open source organisations can apply to be mentor organisations. Once accepted, organisations
                              discuss possible ideas with students and then decide on the proposals they wish to mentor for the winter. 
                              They provide feedback to help guide each student through the program. Mentors and students work together 
                              to determine appropriate milestones and requirements for the winter. Mentor interaction is a vital part of the program.
                            </p>
                        </Typography>
                    </div>
                    <div>
                        <Typography>
                          <h2 align="center">Mentors</h2>
                          <p className={descriptionText}>
                           Mentors guide the students throughout their projects and review their code samples multiple times. 
                           They provide valuable feedback and suggest possible improvements to the code. 
                           They also determine if a student has successfully completed the Winter of code 2020 project. 
                           Students are then notified of the pass/fail status and schwags are delivered accordingly.
                          </p>

                        </Typography>
                    </div>

                </div>
                </Parallax>


            </div>

        </div>
        )
      }

      const displayMobile = () =>{
          
        return(
        <div>
            <Parallax>
            <div className={section}>
                <div>
                    <h2 className={sectionHeading}>About The Program <br /></h2>
                </div>
                <div>
                    <h2 className={titleText}>
                        Winter of Code is{" "}
                        <span>a program aimed to increase participation </span>{" "}
                        for{" "}
                        <span>
                            the Google Summer of Code program among students in colleges and universities.
                        </span>
                    </h2>
                    <p className={descriptionText}>
                        Winter of Code is here to light up your winter spirits with the wide
                        world of open source development. This initiative aims to prepare you
                        for the grand Google Summer of Code. Join us for a month-long
                        programming project with an open-source organisation.
                    </p>
                    <p className={descriptionText}>
                        As a part of the Winter of Code, students are paired with mentors from
                        the participating organisation. This initiative aims at developing
                        your skills in real-world software development in a wide range of
                        specializations. In turn, the participating organisation gets to know
                        your potential and also gives you the correct exposure that you need
                        in your formative years. Above all, we hope you get encouraged into
                        the world of open source and develop more code for the benefit of all.
                    </p>
                </div>
            </div>
            </Parallax>
            <Parallax>
            <div className={workSectionMobile}>
                <div className={subSectionMobile}>
                    <Typography>
                      <p align='center' className={statsText}>300+</p>
                      <p align='center' className={statsText}>Students</p>
                    </Typography>
                </div>
                <div className={subSectionMobile}>
                    <Typography>
                       <p align='center' className={statsText}>10+</p>
                       <p align='center' className={statsText}>Organisations</p>
                    </Typography>
                </div>
                <div align='center' className={subSectionMobile}>
                    <Typography>
                        <p align='center' className={statsText}>40+</p>
                        <p align='center' className={statsText}>Mentors</p>
                    </Typography>
                </div>
            </div>
            </Parallax>
            <Parallax>
            <div>
               <h2 className={sectionHeading}>Let's Build Something Awesome Together <br /></h2>   
            </div>
            </Parallax>
            <div className={sectionTwo}>
                <Parallax>
                <div className={sectionRowMobile}>
                    <div style={{ marginTop: "1%"}}>
                        <p className={descriptionText}>
                          Developer Students Club of NSEC brings to you Winter of Code which is a month-long extravaganza
                          of Open Source contribution, bringing together students, organisations and mentors to build 
                          amazing projects together. Here is what the program has to offer for students, organisations, and mentors.
                        </p>
                    </div>
                    <div>
                       <img src={wocimage} style={{display:"none"}} className={wocimagestyle} alt="WOC main imgs"/>
                    </div>
                </div>
                </Parallax>
                <Parallax>
                <div>
                  <h2 className={sectionHeading}>How the Program Works?<br /></h2>   
                </div>
                </Parallax>
         
                <div className={sectionRowMobile}>
                    <Parallax>
                    <div className={iframeMobile}>
               
                        <iframe src="https://www.youtube.com/embed/ZtyBCP6_whw"
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
                        clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            How to write proposal for winter of code</iframe>
                    </div>
                    </Parallax>
                    <Parallax>
                     <Typography>
                        <h2 align="center"> Students</h2>
                        <p className={descriptionText}>Students who are interested can register for the Winter of Code by filling a form.
                            Students who are selected will work with mentors of the organisation that they are accepted for.
                            If accepted, students amalgamate with their organisations prior to the start of coding and learn more
                            about their organisation’s community. Students then have one month to code and meet the deadlines agreed upon with their mentors.
                            On successful completion of the program students will be rewarded with some cool schwags.</p>
                      </Typography>
                    </Parallax>

                </div>
            
                <div className={sectionRowMobile}>
                    <Parallax>
                    <div>
                        <Typography>
                            <h2 align="center">Organisations</h2>
                            <p className={descriptionText}>
                             Open source organisations can apply to be mentor organisations. Once accepted, organisations
                              discuss possible ideas with students and then decide on the proposals they wish to mentor for the winter. 
                              They provide feedback to help guide each student through the program. Mentors and students work together 
                              to determine appropriate milestones and requirements for the winter. Mentor interaction is a vital part of the program.
                            </p>
                        </Typography>
                    </div>
                    </Parallax>
                    <Parallax>
                    <div>
                        <Typography>
                          <h2 align="center">Mentors</h2>
                          <p className={descriptionText}>
                           Mentors guide the students throughout their projects and review their code samples multiple times. 
                           They provide valuable feedback and suggest possible improvements to the code. 
                           They also determine if a student has successfully completed the Winter of code 2020 project. 
                           Students are then notified of the pass/fail status and schwags are delivered accordingly.
                          </p>

                        </Typography>
                    </div>
                    </Parallax>

                </div>
                

            </div>
            

        </div>
        )
      }


    
    return (
            <div id="about" className={root}>
            {mobileView ? displayMobile() : displayDesktop()} 
            </div>   
    )
}


