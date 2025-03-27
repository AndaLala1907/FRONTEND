function checkLeapYear() {
  const year = document.getElementById("yearInput").value;
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  const paragraph = document.createElement("p");

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    paragraph.textContent = "The year is a leap year";
    paragraph.style.color = "green";
  } else {
    paragraph.textContent = "The year is not a leap year";
    paragraph.style.color = "red";
  }

  resultDiv.appendChild(paragraph);
}
