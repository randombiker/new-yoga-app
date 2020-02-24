import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home.js';
import Main from './Main.js';
import BeginnerTwenty from './BeginnerTwenty.js';
import BeginnerForty from './BeginnerForty.js';
import BeginnerSixty from './BeginnerSixty.js';
import IntermediateTwenty from './IntermediateTwenty.js';
import IntermediateForty from './IntermediateForty.js';
import IntermediateSixty from './IntermediateSixty.js';
import Advanced from './Advanced.js';

class App extends Component {
  render = () => {
    return (
      <>
        <BrowserRouter>
          <div>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/Main" component={Main} />

            <Route
              exact={true}
              path="/BeginnerTwenty"
              component={BeginnerTwenty}
            />
            <Route
              exact={true}
              path="/BeginnerForty"
              component={BeginnerForty}
            />
            <Route
              exact={true}
              path="/BeginnerSixty"
              component={BeginnerSixty}
            />
            <Route
              exact={true}
              path="/IntermediateTwenty"
              component={IntermediateTwenty}
            />
            <Route
              exact={true}
              path="/IntermediateForty"
              component={IntermediateForty}
            />
            <Route
              exact={true}
              path="/IntermediateSixty"
              component={IntermediateSixty}
            />
            <Route exact={true} path="/Advanced" component={Advanced} />
          </div>
        </BrowserRouter>
      </>
    );
  };
}

export default App;
