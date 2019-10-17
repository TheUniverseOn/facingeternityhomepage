import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";
import Sibate0419 from "./blog/Sibate0419";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

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
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog/sibate0419" component={Sibate0419} />
              <Route component={PageNotFound} />
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
