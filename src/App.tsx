import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import Sibate0419 from "./blog/Sibate0419";
import Bocagrande1018 from "./blog/Bocagrande1018";

// Initialize google analytics page view tracking
const trackingId = "UA-112464932-1";
ReactGA.initialize(trackingId);
const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Router history={history}>
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
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog/sibate0419" component={Sibate0419} />
              <Route path="/blog/bocagrande1018" component={Bocagrande1018} />
              <Route component={Home} />
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
