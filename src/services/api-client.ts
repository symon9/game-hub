import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "be6c13451fc24505a9f1cf25bc05765c",
  },
});
