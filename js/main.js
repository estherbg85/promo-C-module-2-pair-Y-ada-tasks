'use strict';


// SECCION DE LOS QUERY SELECTOR

const taskList = document.querySelector('.js_list');
const btntNewTask = document.querySelector('.js_new_task_btn');
const searchInput = document.querySelector('.js_search_input');
const taskSubmit = document.querySelector('.js_task_submit');

// SECCION DE LOS DATOS DE LA APLICACION

const taskArray = [
    { name: "Sacar al perro", completed: true, id: 1 },
    { name: "Echar gasolina", completed: true, id: 2 },
    { name: "Ir al supermercado", completed: true, id: 3 },
    { name: "Pedir cita a la peluqueria para el lunes 25 ",completed: false, id: 4,}
];

let filteredTaskArray = [];

// SECCION DE FUNCIONES



const handleClickTask = (ev) => {

    ev.currentTarget.classList.toggle('completed');
    console.log(ev.currentTarget);

   // fillTasks();
}

const fillTasks = (taskFilter) => {
    taskList.innerHTML=``;
    for( const task of taskFilter) {
    
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

    console.log(searchInput.value);
    //filteredTaskArray.concat(taskArray.filter((taskObj) => taskObj.name.includes(searchInput.value)));
    filteredTaskArray = taskArray.filter((taskObj) => taskObj.name.includes(searchInput.value)).slice();
    console.log(filteredTaskArray);
       
}   
 

fillTasks(taskArray);



// SECCION DE EVENTOS

btntNewTask.addEventListener('click', (ev) => {
    ev.preventDefault();
    
    const newTask = [];

    const newTaskInput = document.querySelector('.js_new_task_input');
    newTask.push(newTaskInput.value);

    const addTask = 
    { name: newTaskInput.value, completed: false, id: taskArray.length+1 };

    taskArray.push(addTask);
    
    fillTasks(taskArray);

    newTaskInput.value ='';
});

taskSubmit.addEventListener('click', (ev) => {
    ev.preventDefault();
    fillTasks(filteredTaskArray); 
 });


searchInput.addEventListener('input', handleSearchInput);









