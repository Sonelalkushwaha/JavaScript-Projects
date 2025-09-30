const serachBarContainerEl = document.querySelector(".search-bar-contianer");
const magnifierEl = document.querySelector(".magnifier-img");
const googlemicEl =document.querySelector(".google-mic")
magnifierEl.addEventListener("click",() => {
    serachBarContainerEl.classList.toggle("active");
})
