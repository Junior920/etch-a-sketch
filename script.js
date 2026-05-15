const container = document.querySelector('#container');
const btn = document.querySelector('#change-size')


function createGrid(size) {
  container.innerHTML = "";
  const squareSize = 500 / size;


  for (let i =0; i < size * size; i++) {
  const square = document.createElement("div");

  square.classList.toggle("square");

  square.style.width = `${squareSize}px`;
  square.style.height = `${squareSize}px`;

  container.appendChild(square)
  }
}




  btn.addEventListener("click", () => {
    let size = prompt("Enter the number of squares you want to work with!");

    size = Number(size)

    if (size > 0 && size <= 100) {
      createGrid(size);
    } else {
      alert("Please enter a number between 1 and 100!");
    }
  });

  createGrid(16);