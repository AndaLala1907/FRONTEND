function generateTable(nrRows, nrColumns) {
  const table = document.createElement("table");

  const headerRow = document.createElement("tr");
  for (let j = 1; j <= nrColumns; j++) {
    const th = document.createElement("th");
    th.textContent = "Header " + j;
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  for (let i = 1; i <= nrRows; i++) {
    const tr = document.createElement("tr");
    for (let j = 1; j <= nrColumns; j++) {
      const td = document.createElement("td");
      td.textContent = "Row " + i + " Col " + j;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  document.body.appendChild(table);
}

const nrColumns = parseInt(prompt("Enter number of columns:"));
const nrRows = parseInt(prompt("Enter number of rows:"));

generateTable(nrRows, nrColumns);
