const fs = require('fs');

function saveTask(filePath, tasks) {
    const JSONObj = JSON.stringify(tasks);
    fs.writeFileSync(filePath,JSONObj);
}

function loadTasks(filePath) {
    try { 
        const dataFile = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(dataFile);
    } catch (error) {
        console.error(`Error loading file: ${error.message}`);
    }
}

module.exports = {
    saveTask,
    loadTasks
};