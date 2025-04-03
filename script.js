const images = [
  "img/image1.jpg",
  "img/image2.jpg",
  "img/image3.jpg",
  "img/image4.jpg",
];

let currentIndex = 0;

const imageDisplay = document.getElementById("imageDisplay");
const btnPrevious = document.getElementById("btnPrevious");
const btnNext = document.getElementById("btnNext");

// Exercise 01: Change Images
const updateImage = () => {
  imageDisplay.src = images[currentIndex]; // Set image source
};
// Change image and stay within bounds
const changeImage = (direction) => {
  currentIndex = Math.max(
    0,
    Math.min(images.length - 1, currentIndex + direction)
  );
  updateImage();
};

// Exercise 02: Disable Actions
const updateButtons = () => {
  btnPrevious.disabled = currentIndex === 0; // Disable Previous button if on first image
  btnNext.disabled = currentIndex === images.length - 1; // Disable Next button if on last image
};

// Change image and update buttons
const changeImageWithDisabling = (direction) => {
  changeImage(direction);
  updateButtons();
};

// Exercise 03: Keyboard Events
const handleKeydown = (event) => {
  if (event.key === "ArrowLeft" && currentIndex > 0) {
    changeImageWithDisabling(-1);
  } else if (event.key === "ArrowRight" && currentIndex < images.length - 1) {
    changeImageWithDisabling(1);
  }
};
// Event listeners
btnPrevious.addEventListener("click", () => changeImageWithDisabling(-1));
btnNext.addEventListener("click", () => changeImageWithDisabling(1));
document.addEventListener("keydown", handleKeydown);
// Initial setup
updateImage();
updateButtons();
