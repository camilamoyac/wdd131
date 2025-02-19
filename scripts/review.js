const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `${today.getFullYear()}`;

const lastModified = document.querySelector("#lastmodified");
lastModified.textContent = `Last modified: ${document.lastModified}`;

// review counter
let reviewCount = localStorage.getItem("reviewCount") || 0;
reviewCount = parseInt(reviewCount) + 1;
localStorage.setItem("reviewCount", reviewCount);

const counterElement = document.getElementById("reviewCounter");
if (counterElement) {
  counterElement.textContent = `Reviews completed: ${reviewCount}`;
}