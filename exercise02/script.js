let grade = prompt("Please enter your grade:");

grade = parseFloat(grade);

if (!isNaN(grade) && grade >= 0 && grade <= 100) {
  let heading = document.createElement("h1");

  if (grade >= 90 && grade <= 100) {
    heading.textContent = "Nota juaj është A";
    heading.style.color = "green";
  } else if (grade >= 80 && grade < 90) {
    heading.textContent = "Nota juaj është B";
    heading.style.color = "blue";
  } else if (grade >= 70 && grade < 80) {
    heading.textContent = "Nota juaj është C";
    heading.style.color = "yellow";
  } else if (grade >= 60 && grade < 70) {
    heading.textContent = "Nota juaj është D";
    heading.style.color = "orange";
  } else if (grade >= 0 && grade < 60) {
    heading.textContent = "Nota juaj është F";
    heading.style.color = "red";
  }

  document.body.appendChild(heading);
} else {
  alert("Invalid input. Please enter a valid grade between 0 and 100.");
}
