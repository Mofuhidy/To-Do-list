import './style.css';
import tasks, { submit, listContainer } from './modules/tasks.js';
import TaskStatus from './modules/updateStatus.js';

window.onload = tasks.displayTasks();
TaskStatus.updateStatus();

submit.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    tasks.addTask();
    submit.value = '';
    listContainer.innerHTML = '';
    tasks.displayTasks();
    TaskStatus.updateStatus();
  }
});