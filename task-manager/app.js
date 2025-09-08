const files = require('./filehandler');
const tasks = require('./taskManager');
const path = require('path');
const newFilePath = path.join(__dirname, "tasks.json");
const taskArray = files.loadTasks(newFilePath);

files.loadTasks(newFilePath);
tasks.addTask(taskArray,"sort");
// tasks.listTasks(taskArray);
tasks.addTask(taskArray,["wash","dry","hang","fold"]);
tasks.listTasks(taskArray);
files.saveTask(newFilePath,taskArray);