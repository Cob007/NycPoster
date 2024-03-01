import CustomState from "../component/custom/CustomState.js";
import Loading from "../component/loading/Loading.js";
import ApiClient from "./api-client.js"
import { API_KEY } from "./constant.js"

const getGetPosterBySearch = async (keyword) => {
    const apiClient = new ApiClient(API_KEY, keyword);
    populatePosterList(await apiClient.getMoviePoster());
}

const populatePosterList = (posters) => {
    console.log("Poster : ", posters)
}



const formEl = document.querySelector('.header-container__search-form')
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const keyword =  e.target.keyword.value;
    getGetPosterBySearch(keyword);
    e.target.keyword.value = '' 
})



const appDivEl = document.querySelector('.app-container');
const renderUi = () => {
    return `
        ${CustomState(1)}
    `
}
//appDivEl.innerHTML = renderUi()

