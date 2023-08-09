const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");

slider.addEventListener("input", () => {
  const size = parseInt(slider.value);
  main.style.setProperty("--size", size);
  createGrid(size);
  sliderValue.textContent = size; // Actualiza el número mostrado
});

let pressed;
const main = document.querySelector("main"); // seleccionar main
function createGrid(size) {
  main.innerHTML = ""; // resetea el contenido de main
  for (let i = 0; i < size * size; i++) {
    // crear div hijo de main
    const div = document.createElement("div");
    main.appendChild(div);

    // color rgb random
    let baseColor = [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
    ];
    let darkness = 0;

    // si se mantiene el mouse apretado, y se pasa por encima de un div, se colorea
   
    div.addEventListener("mousedown", () => (pressed = true));
    div.addEventListener("mouseup", () => (pressed = false));
    div.addEventListener("mouseover", () => {
      if (pressed) {
        let light = 1 + darkness * 0.1;
        let color = `rgb(${baseColor[0] * light}, ${baseColor[1] * light}, ${
          baseColor[2] * light
        })`;
        div.style.backgroundColor = color;
        darkness++;
      }
    });
  }
}

createGrid(16);
