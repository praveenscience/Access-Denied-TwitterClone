import React, { Component } from "react";
import Header from "./Header";
import Tweet from "./Tweet";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header dark={true} className="justify-content-center">
          React Twitter
        </Header>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <Tweet Name="Twitter User">Hello, this is a tweet.</Tweet>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
