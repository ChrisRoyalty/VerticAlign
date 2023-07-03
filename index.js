let menu = document.getElementById("menu");
let dropDown = document.getElementById("dropDown");
let nav1 = document.getElementById("nav1");
let mainNav = document.getElementById("mainNav");
let cancel = document.getElementById("cancel");
let cancelModal = document.getElementById("cancelModal");
let searchIcon = document.getElementById("searchIcon");
let searchIconMini = document.getElementById("searchIconMini");
let searchModal = document.getElementById("search-modal");
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let modalContent = document.getElementById("modal-content");
let modalContentDdiv = document.getElementById("modal-content-div");
let modalH2 = document.getElementById("modal-h2");
menu.onclick = function menuItems() {
  nav1.style.display = "none";
  mainNav.style.display = "none";
  modalContent.style.display = "none";
  dropDown.style.display = "block";
};
cancel.onclick = function cancelDropdown() {
  nav1.style.display = "none";
  mainNav.style.display = "block";
  dropDown.style.display = "none";
};
searchIcon.onclick = function searchModalPop() {
  searchModal.style.display = "flex";
  dropDown.style.display = "none";
  // searchModal.style.display = "block";
};
searchIconMini.onclick = function searchModalPop() {
  searchModal.style.display = "flex";
  // searchModal.style.display = "block";
};
searchBtn.onclick = function searchBtn() {
  if (searchInput.value === "") {
    searchModal.style.display = "flex";
    searchInput.placeholder = "Your Search is still empty";
    searchInput.placeholder.style.color = "red";
  } else {
    modalContentDdiv.style.display = "none";
    let newTag = document.createElement("h2");
    newTag.classList.add("searchText");
    newTag.innerText = "Searching....";
    newTag.style.textAlign = "center";
    newTag.style.color = "lightgray";
    // modalContentDdiv.innerHTML = `<h2> Searching... </h2>`;
    modalContent.appendChild(newTag);
  }
};
cancelModal.onclick = function cancelModal() {
  searchModal.style.display = "none";
  mainNav.style.display = "block";
};
