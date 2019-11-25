import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import withTracker from './components/WithTracker';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Sibate0419 from "./blog/Sibate0419";
import Bocagrande1018 from "./blog/Bocagrande1018";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <div
          className="stylish-color-dark"
          style={{
            flexDirection: "column",
            minHeight: "100vh",
            display: "flex"
          }}
        >
          <div
            style={{
              flex: "1"
            }}
          >
            <NavBar />
            <Switch>
              <Route exact path="/" component={withTracker(Home)} />
              <Route path="/about" component={withTracker(About)} />
              <Route path="/contact" component={withTracker(Contact)} />
              <Route path="/blog/sibate0419" component={withTracker(Sibate0419)} />
              <Route path="/blog/bocagrande1018" component={withTracker(Bocagrande1018)} />
              <Route component={withTracker(Home)} />
            </Switch>
          </div>
          <div
            style={{
              zIndex: 100
            }}
          >
            <Footer />
          </div>
        </div>
      </Router>
    </React.Fragment>
  );
};

export default App;
