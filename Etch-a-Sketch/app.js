const gridContainer = document.querySelector(".grid-container");
const squaresInput = document.getElementById("squares-input");

const initialScale = 16;
const fragment = document.createDocumentFragment();

squaresInput.addEventListener("change", (e) => {
  const newSize = e.target.value;
  if (newSize > 0 && newSize < 100) {
    draw(newSize);
  } else {
    alert("Enter a number less than 100!");
  }
});

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function draw(size) {
  gridContainer.innerHTML = "";
  const totalSquare = size * size;
  for (let i = 0; i < totalSquare; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-item");
    square.style.width = `calc(100% / ${size}) `;
    square.style.height = `calc(100% / ${size}) `;
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = getRandomColor();
    });

    fragment.appendChild(square);
  }

  gridContainer.appendChild(fragment);
}

draw(initialScale);
