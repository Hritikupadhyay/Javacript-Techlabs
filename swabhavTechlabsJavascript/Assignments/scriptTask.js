function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');

        const li = document.createElement('li');
        li.textContent = taskText;

        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.classList.add('done');
        doneButton.onclick = () => markAsDone(li);
        
       
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.onclick = () => deleteTask(li); 
        
        li.appendChild(doneButton);
        li.appendChild(deleteButton);

        taskList.appendChild(li);

        taskInput.value = '';
    } else {
        alert('Please enter a task');
    }
}

function markAsDone(task) {
    const completedTaskList = document.getElementById('completedTaskList');
    const taskList = document.getElementById('taskList');

    task.classList.add('done');

    taskList.removeChild(task);
    completedTaskList.appendChild(task);

    const doneButton = task.querySelector('.done');
    doneButton.disabled = true;
    doneButton.remove()
}

function deleteTask(task) {
    const taskList = document.getElementById('taskList');
    const completedTaskList = document.getElementById('completedTaskList');

    if (taskList.contains(task)) {
        taskList.removeChild(task);
    } else {
        completedTaskList.removeChild(task);
    }
}
