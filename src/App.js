import React from "react";
import "./App.css";
import useFetch from "react-fetch-hook";

const Component = () => {
  const { data: response } = useFetch(
    `https://www.reddit.com/r/WeatherGifs/top.json?t=week`
  );
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
