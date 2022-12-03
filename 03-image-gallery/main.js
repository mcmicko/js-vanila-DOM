const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.4;

// Set first image opacity
imgs[0].style.opacity = opacity;

imgs.forEach((img) => img.addEventListener("click", imgClick));

function imgClick(e) {
  //RESET THE OPACITY
  imgs.forEach((img) => (img.style.opacity = 1));

  // change current image to src of clicked image
  current.src = e.target.src;

  // Add fade in class
  current.classList.add("fade-in");

  // Remove fade-in class after 5 seconds
  setTimeout(() => current.classList.remove("fade-in"), 500);

  // change the opacity to opacity var
  e.target.style.opacity = opacity;
}
