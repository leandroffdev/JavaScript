const newTask = document.querySelector('#task');
const taskDesc = document.querySelector('#taskDesc');
const btn = document.querySelector('#btn')
const tasks = document.querySelector('.tasks');
// console.log(date);

class Task {
    constructor(task, date, taskDesc) {
        this.task = task;
        this.date = date;
        this.taskDesc = taskDesc;
    }
    // Getters
    getTask() {
        return this.task;
    }
    getDate() {
        return this.date;
    }
    getTaskDesc() {
        return this.taskDesc;
    }
    // Setters
    setTask(task) {
        this.task = task;
    }
    setDate(date) {
        this.date = date;
    }
    setTaskDesc(taskDesc) {
        this.taskDesc = taskDesc;
    }
    // Show
    show() {
        console.log(`task: ${this.gettask()}, Age: ${this.getDate()}`);
    }
};
var taskList = [];

function renderTasks() {
    tasks.innerHTML = '';
    taskList.forEach((task, pos) => {
        tasks.innerHTML += `<div class="task">
                                <h2 class="title">${task.getTask()}</h2>
                                <p class="date">${task.getDate()}</p>
                                <p class="desc">${task.getTaskDesc()}</p>
                                <button class="delete" onClick="deleteTask(${pos})">Delete</button>
                            </div>`
    });
};

function updateList() {
    const date = Date();
    if (newTask.value != '' && taskDesc.value != '') {
        var task = new Task();
        task.setTask(newTask.value);
        task.setDate(date);
        task.setTaskDesc(taskDesc.value);
        taskList.push(task);
        console.log('clicou', taskList);
        newTask.value = '';
        taskDesc.value = '';
        newTask.focus();
        renderTasks();
    }
};

function deleteTask(pos) {
    taskList.splice(pos, 1);
    renderTasks();
};
