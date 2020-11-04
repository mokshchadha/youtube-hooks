import axios from "axios";
const KEY = "AIzaSyCWBlgFjfq5apIj8p6S1QAYDo21yAh1CAM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 7,
    key: KEY,
  },
});
