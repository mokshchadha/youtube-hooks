import { useState } from "react";
import youtube from "../apis/youtube";

const useVideos = () => {
  const [video, setVideo] = useState([]);

  const search = async (term) => {
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    await setVideo(res.data.items);
  };

  return [video, search];
};

export default useVideos;
