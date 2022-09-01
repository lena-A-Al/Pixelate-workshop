// Your code here
const tableElement = document.getElementById('the-ul');

const select = document.getElementById('selectColor');
console.log(select);
function makeRow() {
  let row = document.createElement('tr');
  for (let i = 0; i < 20; i++) {
    const dataCell = document.createElement('td');
    row.appendChild(dataCell);
  }
  tableElement.appendChild(row);
}

const addRow = document.getElementById('add-row');

addRow.addEventListener('click', makeRow);

let chosenColor = 'blue';
select.addEventListener('change', (event) => {
  chosenColor = event.target.value;
});

function colorize(event) {
  const target = event.target;
  //1 if target does not have a class name, give it one of the colors - to toggle it on.
  //1 If you click a gray cell, it should turn the currently chosen color.
  if (target.matches('td')) {
    if (target.classList.value === '') {
      target.classList.add(chosenColor);
      //2 if the the target has a class name, set it to an empty string- toggle it off
      // 3 If you click a colored cell, and that cell's color is different than the currently chosen color, the cell should turn the currently chosen color
    } else if (chosenColor === target.classList.value) {
      target.classList.remove(chosenColor);
    }
  }
}

tableElement.addEventListener('mouseover', colorize);
