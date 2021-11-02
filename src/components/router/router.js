import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "../routes/homepage";
import DeepFusionAIProject from "../routes/DeepFusionAI";
import DSCIEMProject from "../routes/DSCIEM";
import AbsurdNerdProject from "../routes/AbsurdNerd";
import CanvasBirdProject from "../routes/CanvasBird";
import DSCNSECProject from "../routes/DSCNSEC";
import DSCXProject from "../routes/DscX";
import DynopiiProject from "../routes/Dynopii";
import EduAlgoProject from "../routes/EduAlgo";
import FireShortProject from "../routes/FireShot";
import DSCNITRourkelaProject from "../routes/NITRourkela";
import TesseractCodingProject from "../routes/TesseractCoding";
import Organiser from "../routes/Organiser";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Homepage} />
        <Route path="/organisation/deep-fusion-ai" component={DeepFusionAIProject} />
        <Route path="/organisation/dsc-iem" component={DSCIEMProject} />
        <Route path="/organisation/absurd-nerd" component={AbsurdNerdProject} />
        <Route path="/organisation/canvasbird" component={CanvasBirdProject} />
        <Route path="/organisation/dsc-nsec" component={DSCNSECProject} />
        <Route path="/organisation/dsc-x" component={DSCXProject} />
        <Route path="/organisation/dynopii" component={DynopiiProject} />
        <Route path="/organisation/eduAlgo" component={EduAlgoProject} />
        <Route path="/organisation/fireshort" component={FireShortProject} />
        <Route path="/organisation/dsc-nit-rourkela" component={DSCNITRourkelaProject} />
        <Route path="/organisation/tesseract-coding" component={TesseractCodingProject} />
        <Route path="/organisers" component={Organiser} />
      </Switch>
    </Router>
  );
}