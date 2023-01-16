import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "../routes/homepage";
import DeepFusionAIProject from "../routes/DeepFusionAI";
import CanvasBirdProject from "../routes/CanvasBird";
import DSCNSECProject from "../routes/DSCNSEC";
import DSCXProject from "../routes/DscX";
import DSCNITRourkelaProject from "../routes/NITRourkela";
// import BlockchainChiefProject from "../routes/BlockchainChief";
// import TechNScienceProject from "../routes/TechNScience";
import CodingSpaceProject from "../routes/CodingSpace";
// import MojaGlobalProject from "../routes/MojaGlobal";
import Organiser from "../routes/Organiser";
// import GeptonProject from "../routes/Gepton";
import EduhubCommunityProject from "../routes/EduHubCommunity";
// import HITKCommunityProject from "../routes/HITKTechCommunity";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/2021" component={Homepage} />
        <Route path="/2021/organisation/deep-fusion-ai" component={DeepFusionAIProject} />
        <Route path="/2021/organisation/canvasbird" component={CanvasBirdProject} />
        <Route path="/2021/organisation/dsc-nsec" component={DSCNSECProject} />
        <Route path="/2021/organisation/dsc-x" component={DSCXProject} />
        <Route path="/2021/organisation/dsc-nit-rourkela" component={DSCNITRourkelaProject} />
        {/* <Route path="/organisation/theblockchainchief" component={BlockchainChiefProject} /> */}
        {/* <Route path="/organisation/technscince" component={TechNScienceProject} /> */}
        <Route path="/2021/organisation/codingspace" component={CodingSpaceProject} />
        {/* <Route path="/organisation/moja-global" component={MojaGlobalProject} /> */}
        {/* <Route path="/organisation/gepton" component={GeptonProject} /> */}
        {/* <Route path="/organisation/codingspace" component={CodingSpaceProject} /> */}
        {/* <Route path="/organisation/moja-global" component={MojaGlobalProject} /> */}
        {/* <Route path="/organisation/gepton" component={GeptonProject} /> */}
        <Route path="/2021/organisation/eduhub-community" component={EduhubCommunityProject} />
        {/* <Route path="/organisation/hitk-community" component={HITKCommunityProject} /> */}
        <Route path="/2021/organisers" component={Organiser} />
      </Switch>
    </Router>
  );
}