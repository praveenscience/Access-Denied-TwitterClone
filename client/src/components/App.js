import React, { Component } from "react";
import Header from "./Header";
import Tweet from "./Tweet";

const Tweets = [
  {
    Name: "Praveen Kumar Purushothaman",
    Content: "Hello everyone! Welcome to Access Denied!"
  },
  {
    Name: "Abhishek Anantharam",
    Content: "​This session is awesomeee"
  },
  {
    Name: "Madhur Padavala",
    Content: "​Praveen sir is nice. Be like praveen sir"
  },
  {
    Name: "Ramesh Suhan",
    Content: "​amazing Session"
  },
  {
    Name: "Bhuvanesh",
    Content: "​Hello all! Have a great day tomorrow 🙂"
  },
  {
    Name: "Gunjan Raj Tiwari",
    Content:
      "​Thank Sushant Srivastav for inviting to this amazing live session"
  },
  {
    Name: "Arjeet Anand",
    Content: "​heyyyy amazinnngggggggggg Sessssssiiioooonnnnnn"
  }
];

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
              {Tweets.map((tweet, key) => (
                <Tweet Name={tweet.Name} key={key}>
                  {tweet.Content}
                </Tweet>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
