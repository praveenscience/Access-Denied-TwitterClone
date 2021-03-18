import React from "react";
import Card from "./Card";
import Bird from "../assets/logo.png";

const Tweet = ({ Name, children }) => {
  return (
    <div className="Tweet media border rounded">
      <img src={Bird} alt="Bird" className="mr-2" />
      <div className="TweetContents flex-grow-1">
        <p>
          <strong>{Name}</strong>
        </p>
        <Card>{children}</Card>
      </div>
    </div>
  );
};

export default Tweet;
