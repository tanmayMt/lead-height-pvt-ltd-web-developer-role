const form = document.getElementById('studentForm');
const tableBody = document.querySelector('#studentTable tbody');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const gender = document.getElementById('gender').value;
  const course = document.getElementById('course').value.trim();

  const student = { name, email, gender, course };
  addStudentToTable(student);

  form.reset();
});

function addStudentToTable(student) {
  const row = document.createElement('tr');

  for (let key in student) {
    const cell = document.createElement('td');
    cell.textContent = student[key];
    row.appendChild(cell);
  }

  const actionCell = document.createElement('td');
  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.addEventListener('click', () => row.remove());

  row.addEventListener('click', () => {
    row.classList.toggle('highlight');
  });

  actionCell.appendChild(delBtn);
  row.appendChild(actionCell);
  tableBody.appendChild(row);
}
