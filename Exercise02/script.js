// Add a border of asterisks around a rectangular matrix of characters
const addBorder = (picture) => {
  const width = picture[0].length + 2;
  const border = "*".repeat(width);
  return [border, ...picture.map((row) => `*${row}*`), border];
};

// Add event listener to the button
document.getElementById("addBorderButton").addEventListener("click", () => {
  const picture = ["abc", "ded"];
  // Add border to the picture
  const borderedPicture = addBorder(picture);
  document.getElementById("result").innerHTML = borderedPicture.join("<br>");
});
