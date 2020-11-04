import React, { useState } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [video, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");

  const onTermSubmit = async (term) => {
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    await setSelectedVideo(res.data.items[0]);
    await setVideo(res.data.items);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit}></SearchBar>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={video} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
