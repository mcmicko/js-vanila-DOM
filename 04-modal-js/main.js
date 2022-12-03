//GET MODAL ELEMENT
let modal = document.getElementById("simpleModal");
// GET OPEN MODAL BUTTON
let modalBtn = document.getElementById("modalBtn");
// GET CLOSE BUTTON
let closeBtn = document.getElementsByClassName("closeBtn")[0];

// Listen for click
modalBtn.addEventListener("click", openModal);
// listen for close click
closeBtn.addEventListener("click", closeModal);
// listen for outside click
window.addEventListener("click", clickOutside);

// fumction to OPEN MODAL
function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
