import React, { Component } from "react";

import NewsItemContainer from "./components/NewsItemContainer";

class App extends Component {
  render() {
    const header_style = {
      textAlign: "center"
    };

    return (
      <div>
        <div className="m-5" style={header_style}>
          <h1>News App - React</h1>
        </div>

        <div className="d-flex justify-content-between flex-wrap m-4">
          <NewsItemContainer item="newsitem" />
        </div>
      </div>
    );
  }
}

export default App;
