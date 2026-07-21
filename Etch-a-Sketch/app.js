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

function draw(size) {
  gridContainer.innerHTML = "";
  const totalSquare = size * size;
  for (let i = 0; i < totalSquare; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-item");
    square.style.width = `calc(100% / ${size}) `;
    square.style.height = `calc(100% / ${size}) `;
    square.dataset.opacity = "0";

    square.addEventListener("mouseover", () => {
      let currentOpacity = parseFloat(square.dataset.opacity);

      if (currentOpacity < 1) {
        currentOpacity += 0.1;
        square.dataset.opacity = currentOpacity;
        square.style.backgroundColor = `rgba(0,0,0, ${currentOpacity})`;
      }
    });

    fragment.appendChild(square);
  }

  gridContainer.appendChild(fragment);
}

draw(initialScale);
