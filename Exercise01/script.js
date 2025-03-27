function transformArray(arr) {
  return arr.map((num) => {
    if (num <= 10) {
      return num * 2;
    } else {
      return num * 4;
    }
  });
}

const array = [1, 5, 10, 11, 20, 34];

const transformButton = document.getElementById("transformButton");
const outputParagraph = document.getElementById("output");

transformButton.addEventListener("click", () => {
  const transformedArray = transformArray(array);
  outputParagraph.textContent = transformedArray.join(", ");
});
