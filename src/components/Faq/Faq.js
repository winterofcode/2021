import React from "react";

import { Collapse, Button } from "antd";

const { Panel } = Collapse;

function AppFaq() {
  return (
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          <p>Kindly read all the points carefully</p>
        </div>
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="When can students apply for Winter Of Code?" key="1">
            <p>
              Please see the program timeline for more detailed information.
            </p>
          </Panel>
          <Panel
            header="What programming language(s) should I know to participate in Winter Of Code?"
            key="2"
          >
            <p>
              The programming language you need to know depends on which
              organization you are interested in working with. You should be
              familiar with the programming language(s) used by that
              organization.
            </p>
          </Panel>
          <Panel
            header="Will everyone who participates as a student in Winter Of Code get the WoC schwags?"
            key="3"
          >
            <p>
              Winter of Code schwags, access to Manning e-books, schwags from
              Google Developers, and Qwiklabs credits are only for top
              contributors of Winter of Code, not for everyone. However, we do
              promise to have a small token of appreciation in the form of
              schwags and certificates for everyone who participates in Winter
              of Code.
            </p>
          </Panel>
          <Panel header="Can I submit more than one proposal?" key="4">
            <p>
              Yes, each student may submit up to three proposals. However, only
              one per student may be accepted. No more than one proposal per
              student will be accepted, no matter how many proposals you submit.
            </p>
          </Panel>
          <Panel header="Do I get paid for participating in WoC?" key="5">
            <p>
              No, but you get amazing schwags from Winter of Code and lots of
              fun memories in our open source journey.
            </p>
          </Panel>
          <Panel
            header="I want to learn more about participating as a mentor in Winter of Code. Where can I find more information?"
            key="6"
          >
            <p>
              Read the Mentor Guide How it Works for more information on
              becoming a Winter of Code mentor. You must already be an active
              community member of the organization that you wish to mentor for.
              Fill up the form above in the Apply section and join us!
            </p>
          </Panel>
          <Panel header="What can I do to help spread the word about Winter of Code?">
            <p>
              You can share the message by tweeting about us using the hashtag
              #WinterofCode or tagging us on your social media posts while you
              participate in the program or share the posters.
            </p>
          </Panel>

          <Panel header="Can I participate in Winter of Code as both as a member and student?">
            <p>
              No. We want to make sure that each project and student receives
              sufficient attention, and we feel this could create a bad
              experience for those involved. Please choose whether participation
              as a mentor or a student is more appealing to you and plan to
              apply accordingly.
            </p>
          </Panel>

          {/* <Panel header=""> */}
          {/* <p></p> */}
          {/* </Panel> */}
        </Collapse>
        <div style={{ margin: 25 }} className="quickSupport">
          <h3>What if I have more questions?</h3>

          <Button type="primary" size="large">
            <i className="fas fa-envelope">
              <a style={{ color: "white" }} href="mailto:dscnsecorg@gmail.com">
                {" "}
                Email your question
              </a>
            </i>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AppFaq;
