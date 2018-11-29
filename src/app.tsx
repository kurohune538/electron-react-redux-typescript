import React from "react";
import { hot } from "react-hot-loader";

import HomeContainer from "./containers/HomeContainer";

import GlobalStyles from "./style";

class App extends React.Component {
  public render() {
    return (
      <>
        <HomeContainer />
        <GlobalStyles />
      </>
    );
  }
}

export default hot(module)(App);
