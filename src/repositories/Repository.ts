import axios from "axios";

const baseDomein = "http://localhost:8000";

export default axios.create({
  baseURL: baseDomein,
  withCredentials: true,
});
