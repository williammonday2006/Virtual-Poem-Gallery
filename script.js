const westWall = document.getElementById("wall-west");
const eastWall = document.getElementById("wall-east");

const moonPoem = document.getElementById("poem-moon");

moonPoem.style.backgroundColor = "lightblue";

const westPoems = document.querySelectorAll("#wall-west .poem");

console.log(westPoems);

const rainPoem = document.getElementById("poem-rain");

eastWall.appendChild(rainPoem);

rainPoem.style.backgroundColor = "lightgreen";

const addPoemButton = document.getElementById("add-poem-btn");

addPoemButton.addEventListener("click", function () {
    const title = document.getElementById("poem-title").value;
    const content = document.getElementById("poem-content").value;
    const color = document.getElementById("poem-color").value;
    const wallId = document.getElementById("poem-wall").value;

    const poem = document.createElement("article");
    const poemTitle = document.createElement("h3");
    const poemContent = document.createElement("p");

    poem.className = "poem";

    poemTitle.textContent = title;
    poemContent.textContent = content;

    poem.style.backgroundColor = color;

    poem.appendChild(poemTitle);
    poem.appendChild(poemContent);

    const selectedWall = document.getElementById(wallId);

    selectedWall.appendChild(poem);

    document.getElementById("poem-title").value = "";
    document.getElementById("poem-content").value = "";
});