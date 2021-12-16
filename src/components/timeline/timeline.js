import React, {useState, useEffect} from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import "./timeline.css";
import {CircleStarFull, StarFull, StarEmpty, CircleStarEmpty } from "../../icon/icon";
import { UseStyles } from '../timeline/timelinedata';
import { Typography } from '@mui/material';

export default function Timeline() {

    const {root, timelineTitle} = UseStyles();

    const [state, setState] = useState({
        mobileView: false,
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
            <Typography>
            <div className={timelineTitle}>
                <h1 align="center">Timeline</h1>
            </div>
            </Typography>
            <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#FFC300', color: 'black' }}    // dont delete this, will be needed to update.
                contentArrowStyle={{ borderRight: '7px solid  #FFC300' }}  // dont delete this, will be needed to update.
                date="10th November, 2021"
                iconStyle={{ background: '#FFC300', color: '#fff' }}
                icon={<StarFull/>}
            >
                <h3 className="vertical-timeline-element-title">Project Application Starts</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4> */}
                <p>
                Within this period various organisations submit their project proposal.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#FFC300', color: 'black' }}    // dont delete this, will be needed to update.
                contentArrowStyle={{ borderRight: '7px solid  #FFC300' }}  // dont delete this, will be needed to update.
                date="23rd November, 2021"
                iconStyle={{ background: '#FFC300', color: '#fff' }}
                icon={<StarFull/>}
            >
                <h3 className="vertical-timeline-element-title">Organisations Announced</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4> */}
                <p>
                The Organisations selected for the event will be announced.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#FFC300', color: 'black' }}    // dont delete this, will be needed to update.
                contentArrowStyle={{ borderRight: '7px solid  #FFC300' }}  // dont delete this, will be needed to update.
                date="25th November - 12th December, 2021"
                iconStyle={{ background: '#FFC300', color: '#fff' }}
                icon={<StarFull/>}
            >
                <h3 className="vertical-timeline-element-title">Student Application Starts</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4> */}
                <p>
                Students select their organisations and apply to them during this period.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#FFC300', color: 'black' }}    // dont delete this, will be needed to update.
                contentArrowStyle={{ borderRight: '7px solid  #FFC300' }}  // dont delete this, will be needed to update.
                date="14th December, 2021"
                iconStyle={{ background: '#FFC300', color: '#fff' }}
                icon={<StarFull/>}
            >
                <h3 className="vertical-timeline-element-title">Students announced, projects matched by organisations</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4> */}
                <p>
                Students receive an email regarding their selection and are assigned projects by their respective organisation.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#FFC300', color: 'black' }}    // dont delete this, will be needed to update.
                contentArrowStyle={{ borderRight: '7px solid  #FFC300' }}  // dont delete this, will be needed to update.
                date="14th December - 16th December, 2021"
                iconStyle={{ background: '#FFC300', color: '#fff' }}
                icon={<StarFull/>}
            >
                <h3 className="vertical-timeline-element-title">Community Bonding period</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4> */}
                <p>
                Students come to know of their respective Organisations. Mentors are assigned. Strategies and approaches towards their project are discussed over platforms like slack.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="16th December - 29th December, 2021"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<StarEmpty/>}
            >
                <h3 className="vertical-timeline-element-title">Phase 1</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4> */}
                <p>
                The First round of tasks are handed out regarding the projects.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="30th December - 31st December, 2021"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<StarEmpty/>}
            >
                <h3 className="vertical-timeline-element-title">First Evaluation</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4> */}
                <p>
                The process of students is assessed.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="1st January - 11th January, 2022"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<StarEmpty/>}
            >
                <h3 className="vertical-timeline-element-title">Phase 2</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4> */}
                <p>
                Second round of tasks is assigned.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="12th January - 13th January, 2022"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<StarEmpty/>}
            >
                <h3 className="vertical-timeline-element-title">Second Evaluation</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4> */}
                <p>
                Final evaluation is done based on the outcome of the assigned tasks.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="20th January"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<StarEmpty/>}
            >
                <h3 className="vertical-timeline-element-title">Successful Students Announced</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4> */}
                <p>
                Name of students who have successfully completed the event will be announced.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<StarEmpty/>}
            />
        </VerticalTimeline>
    </div>
    );
    };

    const displayMobile = () => {
    return (
        <div>
            <Typography>
            <div className={timelineTitle}>
                <h1 align="center">Timeline</h1>
            </div>
            </Typography>
            <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#FFC300', color: 'black' }}    // dont delete this, will be needed to update.
                contentArrowStyle={{ borderRight: '7px solid  #FFC300' }}  // dont delete this, will be needed to update.
                date="10th November, 2021"
                iconStyle={{ background: '#FFC300', color: '#fff' }}
                icon={<StarFull/>}
            >
                <h3 className="vertical-timeline-element-title">Project Application Starts</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4> */}
                <p>
                Within this period various organisations submit their project proposal.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#FFC300', color: 'black' }}    // dont delete this, will be needed to update.
                contentArrowStyle={{ borderRight: '7px solid  #FFC300' }}  // dont delete this, will be needed to update.
                date="23rd November, 2021"
                iconStyle={{ background: '#FFC300', color: '#fff' }}
                icon={<StarFull/>}
            >
                <h3 className="vertical-timeline-element-title">Organisations Announced</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4> */}
                <p>
                The Organisations selected for the event will be announced.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#FFC300', color: 'black' }}    // dont delete this, will be needed to update.
                contentArrowStyle={{ borderRight: '7px solid  #FFC300' }}  // dont delete this, will be needed to update.
                date="25th November - 12th December, 2021"
                iconStyle={{ background: '#FFC300', color: '#fff' }}
                icon={<StarFull/>}
            >
                <h3 className="vertical-timeline-element-title">Student Application Starts</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4> */}
                <p>
                Students select their organisations and apply to them during this period.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#FFC300', color: 'black' }}    // dont delete this, will be needed to update.
                contentArrowStyle={{ borderRight: '7px solid  #FFC300' }}  // dont delete this, will be needed to update.
                date="14th December, 2021"
                iconStyle={{ background: '#FFC300', color: '#fff' }}
                icon={<StarFull/>}
            >
                <h3 className="vertical-timeline-element-title">Students announced, projects matched by organisations</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4> */}
                <p>
                Students receive an email regarding their selection and are assigned projects by their respective organisation.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#FFC300', color: 'black' }}    // dont delete this, will be needed to update.
                contentArrowStyle={{ borderRight: '7px solid  #FFC300' }}  // dont delete this, will be needed to update.
                date="14th December - 16th December, 2021"
                iconStyle={{ background: '#FFC300', color: '#fff' }}
                icon={<StarFull/>}
            >
                <h3 className="vertical-timeline-element-title">Community Bonding period</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4> */}
                <p>
                Students come to know of their respective Organisations. Mentors are assigned. Strategies and approaches towards their project are discussed over platforms like slack.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="16th December - 29th December, 2021"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<StarEmpty/>}
            >
                <h3 className="vertical-timeline-element-title">Phase 1</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4> */}
                <p>
                The First round of tasks are handed out regarding the projects.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="30th December - 31st December, 2021"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<StarEmpty/>}
            >
                <h3 className="vertical-timeline-element-title">First Evaluation</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4> */}
                <p>
                The process of students is assessed.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="1st January - 11th January, 2022"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<StarEmpty/>}
            >
                <h3 className="vertical-timeline-element-title">Phase 2</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4> */}
                <p>
                Second round of tasks is assigned.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="12th January - 13th January, 2022"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<StarEmpty/>}
            >
                <h3 className="vertical-timeline-element-title">Second Evaluation</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4> */}
                <p>
                Final evaluation is done based on the outcome of the assigned tasks.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="20th January"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<StarEmpty/>}
            >
                <h3 className="vertical-timeline-element-title">Successful Students Announced</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Kolkata, India</h4> */}
                <p>
                Name of students who have successfully completed the event will be announced.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<StarEmpty/>}
            />
        </VerticalTimeline>
    </div>
    );
    };

    return (
        <div id="timeline" className={root}>
            {mobileView ? displayMobile() : displayDesktop()}  
        </div>
    )
}