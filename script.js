const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const todoList = document.getElementById('todo-list');
const doingList = document.getElementById('doing-list');
const doneList = document.getElementById('done-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const taskText = input.value.trim();
  if (taskText !== '') {
    createTask(taskText, todoList);
    input.value = '';
  }
});

function createTask(text, columnList) {
  const li = document.createElement('li');
  li.textContent = text;

  const moveBtn = document.createElement('button');
  moveBtn.textContent = '→';
  moveBtn.onclick = () => moveTask(li);

  const delBtn = document.createElement('button');
  delBtn.textContent = 'X';
  delBtn.onclick = () => li.remove();

  li.appendChild(moveBtn);
  li.appendChild(delBtn);

  columnList.appendChild(li);
}

function moveTask(taskItem) {
  const currentList = taskItem.parentElement;
  if (currentList === todoList) {
    doingList.appendChild(taskItem);
  } else if (currentList === doingList) {
    doneList.appendChild(taskItem);
  }
}