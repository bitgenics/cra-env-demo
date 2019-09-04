import React from "react";
import "./App.css";
import useFetch from "react-fetch-hook";

const Component = () => {
  const subreddit = process.env.REACT_APP_SUBREDDIT;
  const url = `https://www.reddit.com/r/${subreddit}/top.json?t=week`;
  const { data: response } = useFetch(url);
  console.log({ response });
  if (!response) return <div>Loading...</div>;

  return (
    <div>
      {response.data.children
        .filter(child => child.data.is_video && child.data.media.reddit_video)
        .map(child => (
          <video
            autoPlay
            loop
            muted
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh"
            }}
            src={child.data.media.reddit_video.fallback_url}
          />
        ))}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Component />
      </header>
    </div>
  );
}

export default App;
