const panels = document.querySelectorAll(".panel");
const backButton = document.getElementById("backbtn");
const nextButton = document.getElementById("nextbtn");

let pictureNode = 0;

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActive();
    panel.classList.add("active");
  });
});

const removeActive = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};

setInterval(() => {
  let width = document.documentElement.clientWidth;
  if (width <= 950) {
    panels.forEach((panel) => {
      panel.classList.add("active");
    });
  }
}, 1000);

nextButton.onclick = () => {
  if (pictureNode == 4) {
    panels[pictureNode].style.display = "none";
    pictureNode = 0;
    panels[pictureNode].style.display = "block";
  } else {
    panels[pictureNode].style.display = "none";
    panels[pictureNode + 1].style.display = "block";
    pictureNode++;
  }
};

backButton.onclick = () => {
  if (pictureNode == 0) {
    panels[pictureNode].style.display = "none";
    pictureNode = 4;
    panels[pictureNode].style.display = "block";
  } else {
    panels[pictureNode].style.display = "none";
    panels[pictureNode - 1].style.display = "block";
    pictureNode--;
  }
};
