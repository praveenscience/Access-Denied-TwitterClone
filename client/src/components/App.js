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
  },
  {
    Name: "Sushant Srivastav",
    Content: "Enjoying AccessDenied'21"
  },
  {
    Name: "Madhur Padavala",
    Content: "​Yaay."
  },
  {
    Name: "Bhuvanesh",
    Content:
      "​I hate JS and Frontend but still loving watching this session, especially for that bam and voice modulation😂😊"
  },
  {
    Name: "Anshuman Phadke",
    Content: "Do we need a driving license for a self driving car"
  },
  {
    Name: "Atul Karn",
    Content: "Enjoying access to access denied"
  },
  {
    Name: "Madhur Padavala",
    Content: "​Made my first tweet lol"
  },
  {
    Name: "Mayuri Tyagi",
    Content: "​🔥🔥🔥"
  },
  {
    Name: "Saumya Verma",
    Content: "​woahh!"
  },
  {
    Name: "Abhishek Anantharam",
    Content: "​Sir's Youtube Channel is amazinggg"
  }
];
const colours = [
  "bg-primary",
  "bg-secondary text-white",
  "bg-success",
  "bg-danger text-white",
  "bg-warning",
  "bg-info",
  "bg-light",
  "bg-dark text-white"
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
                <Tweet
                  Name={tweet.Name}
                  key={key}
                  className={colours[key % colours.length]}
                >
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
