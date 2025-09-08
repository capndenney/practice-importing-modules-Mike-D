const taskArray = ["wash","dry","fold"];

function addTask (tasks, task) {
    tasks.push(task);
}

function listTasks (tasks) {
    tasks.forEach((task) => console.log(task));
}

module.exports = {
    addTask,
    listTasks
};

// listTasks(taskArray);
// addTask(taskArray,"hang");
// listTasks(taskArray);