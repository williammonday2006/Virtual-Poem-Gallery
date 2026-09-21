const westWall = document.getElementById("wall-west");
const eastWall = document.getElementById("wall-east");
const moonPoem = document.getElementById("poem-moon");

moonPoem.style.backgroundColor = "lightblue";

const westPoems = document.querySelectorAll("#wall-west .poem");

console.log(westPoems);

const rainPoem = document.getElementById("poem-rain");

eastWall.appendChild(rainPoem);

rainPoem.style.backgroundColor = "lightgreen";