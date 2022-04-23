import { Route, Switch } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "./Home";
import WhatIsNew from "./WhatIsNew";
import HowItLooks from "./HowItLooks";
import LifeLearning from "./LifeLearning";
import Pricing from "./Pricing";

const Pages = () => {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/what-is-nu" component={WhatIsNew} />
        <Route exact path="/how-it-looks" component={HowItLooks} />
        <Route exact path="/life-learning" component={LifeLearning} />
        <Route exact path="/pricing" component={Pricing} />
      </Switch>
    </MainLayout>
  );
};

export default Pages;
