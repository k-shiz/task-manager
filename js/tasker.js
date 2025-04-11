const container = document.querySelector(".container");
const formCreateTask = document.getElementById("form-create-task");
const taskName = document.getElementById("task-name");
let tasks = document.querySelectorAll(".task");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const searchInput = document.getElementById("searchInput");

console.log(tasks);
//создать новую задачу
formCreateTask.addEventListener("submit", function(event){
    event.preventDefault(); 
    let value = taskName.value;
    
    let newTask = document.createElement("div");
    newTask.innerHTML = `<span>${value}</span><i class="bi bi-mouse btn-edit"></i> <i class="bi bi-x-octagon btn-remove"></i>`
    newTask.classList.add("task");
    container.append(newTask);

    tasks = document.querySelectorAll(".task");
    console.log(tasks);
})

function compare (a, b) {
    if (a.innerHTML > b.innerHTML) return 1;
    if (a.innerHTML == b.innerHTML) return 0;
    if (a.innerHTML < b.innerHTML) return -1;
}
btn1.addEventListener("click", function() {
    let newTasks = [...tasks].sort(compare);
    container.innerHTML = '';
    for (let i in newTasks) {
        container.append(newTasks[i])
    }

})

function compareReverse(a, b) {
    if (a.innerHTML < b.innerHTML) return 1;
    if (a.innerHTML == b.innerHTML) return 0;
    if (a.innerHTML > b.innerHTML) return -1;
}

btn2.addEventListener("click", function() {
    let newTasks = [...tasks].sort(compareReverse);
    container.innerHTML = '';
    for (let i in newTasks) {
        container.append(newTasks[i]);
    }
});

btn3.addEventListener("click", function() {
    let immediateTasks = [...tasks].filter(task => task.classList.contains("immediate"));
    container.innerHTML = '';
    for (let i in immediateTasks) {
        container.append(immediateTasks[i]);
    }
});

btn4.addEventListener("click", function() {
    let searchText = searchInput.value.toLowerCase();
    let filteredTasks = [...tasks].filter(task => task.textContent.toLowerCase().includes(searchText));
    container.innerHTML = '';
    for (let i in filteredTasks) {
        container.append(filteredTasks[i]);
    }
    tasks = document.querySelectorAll(".task");
});

//Кнопка удалить все задачи
btn5.addEventListener("click", function() {
    container.innerHTML = "";
    searchInput.value = '';
    tasks = document.querySelectorAll(".task");
});

// Кнопка сбросить с сохранением исходных задач
btn6.addEventListener("click", function() {
    container.innerHTML = `
        <div class="task"><span>а Первая задача </span><i tabindex="0" class="bi bi-mouse btn-edit"></i> <i tabindex="0" class="bi bi-x-octagon btn-remove"></i></div>
        <div class="task immediate"><span>б Вторая задача </span><i tabindex="0" class="bi bi-mouse btn-edit"></i> <i tabindex="0" class="bi bi-x-octagon btn-remove"></i></div>
        <div class="task"><span>в Третья задача </span><i tabindex="0" class="bi bi-mouse btn-edit"></i> <i tabindex="0" class="bi bi-x-octagon btn-remove"></i></div>
        <div class="task immediate"><span>г Четвертая задача </span><i tabindex="0" class="bi bi-mouse btn-edit"></i> <i tabindex="0" class="bi bi-x-octagon btn-remove"></i></div>
        <div class="task immediate"><span>д Пятая задача </span><i tabindex="0" class="bi bi-mouse btn-edit"></i> <i tabindex="0" class="bi bi-x-octagon btn-remove"></i></div>
        <div class="task"><span>е Шестая задача </span><i tabindex="0" class="bi bi-mouse btn-edit"></i> <i tabindex="0" class="bi bi-x-octagon btn-remove"></i></div>
    `;
    searchInput.value = '';
    tasks = document.querySelectorAll(".task");
});

// удаление задач
container.addEventListener("click", (event)=>{
    let btn = event.target; //элемент, на котором кликнул пользователь
    if(btn.classList.contains("btn-remove")){ //если это кнопка удаления, то...
        btn.closest(".task").remove(); //удаляем задачу
    }
})