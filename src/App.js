import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <News />
      </>
    );
  }
}

export default App;
