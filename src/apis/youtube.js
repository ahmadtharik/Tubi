import axios from "axios";

const KEY = "AIzaSyBavYAs0mqozxoela1djig977IbUAIaUeY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY
  }
});
