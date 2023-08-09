const projects = [
  { name: "Etch a sketch", url: "etch-a-sketch/index.html" },
  { name: "Calculator", url: "calculator/index.html" },
  { name: "Tic Tac Toe", url: "tic-tac-toe/index.html" },
];

let currentProjectIndex = 0;

function updateSections() {
  const appMain = document.getElementById("appMain");
  appMain.innerHTML = "";

  projects.forEach((project, index) => {
    const section = document.createElement("section");
    const container1 = document.createElement("div");
    container1.className = "container";
    container1.innerHTML = `
      <h2>${project.name}</h2>
      <a class="project-button" href="${project.url}">Go to Project</a>
    `;
    section.appendChild(container1);

    const container2 = document.createElement("div");
    container2.className = "container";
    container2.innerHTML = `
      <div class="project-preview">
        <iframe src="${project.url}"></iframe>
      </div>
    `;
    section.appendChild(container2);

    appMain.appendChild(section);

    setTimeout(() => {
      container1.style.opacity = "1";
      container1.style.transform = "translateY(0)";
      container2.style.opacity = "1";
      container2.style.transform = "translateY(0)";
    }, 200 * index);
  });
}

function moveProjects(offset) {
  const newIndex =
    (currentProjectIndex + offset + projects.length) % projects.length;

  const movedProject = projects.splice(currentProjectIndex, 1);
  projects.splice(newIndex, 0, movedProject[0]);

  currentProjectIndex = newIndex;

  updateSections();
}
// Inicializa las secciones en la página
updateSections();
