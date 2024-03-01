import Loading from "../component/loading/Loading.js";
import ApiClient from "./api-client.js"
import { API_KEY } from "./constant.js"

const getGetPosterBySearch = async (keyword) => {
    const apiClient = new ApiClient(API_KEY, keyword);
    populatePosterList(await apiClient.getMoviePoster());
}

const populatePosterList = (posters) => {

}



const formEl = document.querySelector('.header-container__search-form')
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("clicked!")
})



const appDivEl = document.querySelector('.app-container');
const renderUi = () => {
    return `
        ${Loading}
    `
}
appDivEl.innerHTML = renderUi()