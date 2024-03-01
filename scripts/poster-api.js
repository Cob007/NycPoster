import ApiClient from "./api-client.js"
import { API_KEY } from "./constant.js"

const getGetPosterBySearch = async (keyword) => {
    const apiClient = new ApiClient(API_KEY, keyword);
    populatePosterList(await apiClient.getMoviePoster());
}

const populatePosterList = (posters) => {
    
}