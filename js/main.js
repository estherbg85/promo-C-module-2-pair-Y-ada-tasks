'use strict';

const taskArray = [
    { name: "Sacar al perro", completed: true, id: 1 },
    { name: "Echar gasolina", completed: true, id: 2 },
    { name: "Ir al supermercado", completed: true, id: 3 },
    { name: "Pedir cita a la peluqueria para el lunes 25 de septiembre",completed: false, id: 4,},
];

const taskList = document.querySelector('.js_list');

/*
for( const task of taskArray) {
    taskList.innerHTML += `<li class="list_tasks"><input class="js_checkbox_${task.id}" 
        type="checkbox" id="task_${task.id}">
        <label class="js_label" for="task_${task.id}">${task.name}</label>
        </li>`;
}

for( const task of taskArray) {
    const checkbox =  document.querySelector('.js_checkbox_'+task.id);
    checkbox.checked = task.completed;*/

for( const task of taskArray) {
    
    
        if (task.completed) {
            taskList.innerHTML += `<li class="list_tasks tachado"><input class="js_checkbox" 
            checked type="checkbox" id="task_${task.id}">
            <label class="js_label" for="task_${task.id}">${task.name}</label>
            </li>`;
        }

        else {
            taskList.innerHTML += `<li class="list_tasks"><input class="js_checkbox" 
            type="checkbox" id="task_${task.id}">
            <label class="js_label" for="task_${task.id}">${task.name}</label>
            </li>`;
        }
    
}