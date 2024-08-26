let modeBtn = document.querySelector("#mode");
let currentMode = "Light";
let previouseMode = "Dark";

modeBtn.addEventListener("click", () => {
  if (currentMode === "Light") {
    currentMode = "dark";
  } else {
    currentMode = "Light";
  }
  console.log(currentMode);
});
