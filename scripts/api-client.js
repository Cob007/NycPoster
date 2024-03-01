import { BASE_URL } from "./constant.js";

class ApiClient {
  constructor(apiKey, searchBy) {
    this.apiKey = apiKey;
    this.searchBy = searchBy;
  }

  getMoviePoster = async () => {
    try {
      const urlGetMovieBySearch = `${BASE_URL}?s=${this.searchBy}&apikey=${this.apiKey}`;
      console.log("urlGetMovieBySearch: ", urlGetMovieBySearch);
      const res = await axios.get(urlGetMovieBySearch);
      console.log(res.data);
      return res.data;
    } catch (e) {
      return e;
    }
  };
}

export default ApiClient
