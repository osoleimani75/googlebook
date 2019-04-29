import React from "react";
// import { ToastContainer } from "react-toastify";
import { Route, Redirect, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Search from "./pages/search";
import Saved from "./pages/save";

import "./css/App.css";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <React.Fragment>
          {/* <ToastContainer /> */}
              <section>

                  <div>
                    <Nav />
                  </div>
                  <div className="head-body">
                  <Switch>
                    <Route path="/search" component={Search} />
                    <Route path="/saved" component={Saved} />
                    {/* <Route path="/not-found" component={NotFound} /> */}
                    <Redirect from="/" exact to="/search" />
                    <Redirect to="/not-found" />
                  </Switch>
                  </div>
              </section>

    </React.Fragment>

  );
}

export default App;
