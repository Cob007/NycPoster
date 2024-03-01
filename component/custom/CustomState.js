const CustomState = (state) => {
  return state === 1
    ? `
    <section class="error-container"> 
        <img class="error-container__img" 
        src="./assets/icons/search.gif" alt="search gif" />
        <p class='error-container__msg'>Ready to SEARCH</p>
    </section>
    `
    : `
    <section class="error-container"> 
        <img class="error-container__img" 
        src="./assets/icons/giphy.gif" alt="404 error gif" />
        <p class='error-container__msg'>Ready to SEARCH</p>
    </section>
    `;
};

export default CustomState;
