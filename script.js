const container = document.querySelector('#container');
const btn = document.querySelector('#change-size')
const resetBtn = document.querySelector('#reset')

function createGrid(size) {
  container.innerHTML = "";
  const squareSize = 500 / size;


  for (let i = 0; i < size * size; i++) {
  const square = document.createElement("div");

  square.classList.toggle("square");

  square.style.width = `${squareSize}px`;
  square.style.height = `${squareSize}px`;

  square.addEventListener("mouseover", () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    
    square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  });

  container.appendChild(square)
  }
}




  btn.addEventListener("click", () => {
    let size = prompt("Enter the number of squares you want to work with!");

    size = Number(size)

    if (size > 15 && size <= 100) {
      createGrid(size);
    } else {
      alert("Please enter a number between 16 and 100!");
    }
  });

  resetBtn.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");

    squares.forEach(square => {
      square.style.backgroundColor = "white";
    });
  });

  createGrid(16);