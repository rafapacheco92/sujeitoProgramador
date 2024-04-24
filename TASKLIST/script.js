
let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');


let tasks = JSON.parse(localStorage.getItem('@taskList')) || [];


function tasksRender() {
  listElement.innerHTML = "";
  tasks.map((e) => {
    let liElement = document.createElement('li');
    let taskText = document.createTextNode(e)
    let linkElement = document.createElement('a');
    let linkText = document.createTextNode('  delete')
    let index = tasks.indexOf(e)

    linkElement.setAttribute('href', '#');
    linkElement.appendChild(linkText);
    linkElement.setAttribute("onclick", `deleteTask(${index})`)

    liElement.appendChild(taskText);
    liElement.appendChild(linkElement);
    listElement.appendChild(liElement);
  })
}

tasksRender()

function add() {
  if (inputElement.value === '') {
    alert('Please enter the task name');
    return false;
  } else {
    let newTask = inputElement.value;
    tasks.push(newTask);
    inputElement.value = '';
    console.log(tasks);

    tasksRender();
    saveData();
  }
}

buttonElement.onclick = add;

function deleteTask(i) {
  tasks.splice(i, 1);
  tasksRender();
  saveData();
}

function saveData() {
  localStorage.setItem("@taskList", JSON.stringify(tasks));
}