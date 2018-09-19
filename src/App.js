import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";

import NewsItemContainer from "./components/NewsItemContainer";

class App extends Component {
  state = {
    sources: []
  };

  componentDidMount() {
    axios
      .get(
        "https://newsapi.org/v2/sources?language=en&apiKey=" +
          process.env.REACT_APP_NEWS_API_KEY
      )
      .then(res =>
        this.setState({ sources: _.sampleSize(res.data.sources, 3) })
      )
      .catch(err => {
        console.log(err.message);
        alert(err.message);
      });
  }

  render() {
    const header_style = {
      textAlign: "center"
    };

    return (
      <div className="container-fluid">
        <div className="m-5" style={header_style}>
          <h1>News App - React</h1>
        </div>

        <div className="d-flex justify-content-between flex-wrap m-4">
          {this.state.sources.map((source, index) => (
            <NewsItemContainer source={source} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
