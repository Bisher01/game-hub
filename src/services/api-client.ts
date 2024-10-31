import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4ce8f121229b441bb21a99d901be3688",
  },
});
