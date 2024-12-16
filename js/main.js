'use strict';


// SECCION DE LOS QUERY SELECTOR

const taskList = document.querySelector('.js_list');
const btntNewTask = document.querySelector('.js_new_task_btn');
const searchInput = document.querySelector('.js_search_input');

// SECCION DE LOS DATOS DE LA APLICACION

const taskArray = [
    { name: "Sacar al perro", completed: true, id: 1 },
    { name: "Echar gasolina", completed: true, id: 2 },
    { name: "Ir al supermercado", completed: true, id: 3 },
    { name: "Pedir cita a la peluqueria para el lunes 25 ",completed: false, id: 4,},
];

// SECCION DE FUNCIONES



const handleClickTask = (ev) => {

    ev.currentTarget.classList.toggle('completed');
    console.log(ev.currentTarget);
}

const fillTasks = () => {
    taskList.innerHTML=``;
    for( const task of taskArray) {
    
        if (task.completed) {
            taskList.innerHTML += `<li class="js_input list_tasks completed"><input class="checkbox" 
            checked type="checkbox" id="task_${task.id}">
            <label for="task_${task.id}">${task.name}</label>
            </li>`;
        }

        else {
            taskList.innerHTML += `<li class="js_input list_tasks"><input class="checkbox" 
            type="checkbox" id="task_${task.id}">
            <label for="task_${task.id}">${task.name}</label>
            </li>`;
        }
    }

    const taskInput = document.querySelectorAll('.js_input');

for (const input of taskInput) {

input.addEventListener('click', handleClickTask);

}
};


const handleSearchInput = (ev) => {
    console.log('estoy escribiendo');
        
    }

fillTasks();



// SECCION DE EVENTOS

btntNewTask.addEventListener('click', (ev) => {
    ev.preventDefault();
    
    const newTask = [];

    const newTaskInput = document.querySelector('.js_new_task_input').value;
    newTask.push(newTaskInput);

    const addTask = 
    { name: newTaskInput, completed: false, id: taskArray.length+1 };

    taskArray.push(addTask);
    
    fillTasks();

});




searchInput.addEventListener('input', handleSearchInput);









