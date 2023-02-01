const trailerButton = document.querySelector(".trailer-button");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-modal");
const video = document.getElementById("video");
const linkVideo = video.src;

function toggleModal(){
    modal.classList.toggle("open");
}

trailerButton.addEventListener("click", () => {
    toggleModal();
});

closeButton.addEventListener("click", () => {
    toggleModal();
    video.setAttribute("src", "");
    video.setAttribute("src", linkVideo);
});

