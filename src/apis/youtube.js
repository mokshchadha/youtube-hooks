import axios from "axios";
const KEY = "AIzaSyCGZIlVxmFqf4aZNWYUPlROHNxoieuGZqY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 7,
    key: KEY,
  },
});
