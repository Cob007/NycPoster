import CustomState from "../component/custom/CustomState.js";
import Loading from "../component/loading/Loading.js";
import ApiClient from "./api-client.js";
import { API_KEY } from "./constant.js";

const appDivEl = document.querySelector(".app-container");


const populateListEl = (posters, totalPages) => {

}

const getGetPosterBySearch = async (keyword) => {
  const apiClient = new ApiClient(API_KEY, keyword);
  processApiRes(await apiClient.getMoviePoster());
};

const processApiRes = (posters) => {
  console.log("Poster search : ", posters.Search);
  console.log("  : ", posters.totalResults);
  console.log("Poster : ", posters.Error);

  if (posters.Response === 'True') {
    populateListEl(posters.Search, posters.totalResults )
  } else if (posters.Response === 'False') {
    console.log("Poster : ", posters.Response);
    appDivEl.innerHTML = renderUi(1, posters.Error);
  }
};

const formEl = document.querySelector(".header-container__search-form");
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  appDivEl.innerHTML = ""
  const keyword = e.target.keyword.value;
  getGetPosterBySearch(keyword);
  e.target.keyword.value = "";
});

const renderUi = (state, msg) => {
  return `
        ${CustomState(state, msg)}
    `;
};

//appDivEl.innerHTML  = renderUi(2, "")


