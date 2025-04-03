// Function to split an array into smaller arrays of a specified size
function chunkArray(array, size) {
  if (size <= 0) throw new Error("Chunk size must be greater than zero");

  return array.reduce((result, item, index) => {
    const chunkIndex = Math.floor(index / size);
    if (!result[chunkIndex]) {
      result[chunkIndex] = [];
    }
    result[chunkIndex].push(item);
    return result;
  }, []);
}

document.getElementById("chunkButton").addEventListener("click", () => {
  // Define sample array and chunk size
  const array = [1, 2, 3, 4, 5];
  const chunkSize = 2;
  const chunkedArray = chunkArray(array, chunkSize);

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  // Display each chunk in a new div
  chunkedArray.forEach((chunk) => {
    const chunkDiv = document.createElement("div");
    chunkDiv.textContent = JSON.stringify(chunk);
    resultDiv.appendChild(chunkDiv);
  });
});
