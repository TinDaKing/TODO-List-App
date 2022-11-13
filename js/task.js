let btnAddTaskEl = document.querySelector('button')
let taskNameEl = document.querySelector('#content')

let tasks = getTaskFromLocaleStorage()
renderTasks(tasks)

btnAddTaskEl.addEventListener('click', function() {
    if(!taskNameEl.value){
        alert('Please input task name first')
        return false
    }

    let taskID = this.getAttribute('id')
    let tasks = getTaskFromLocaleStorage()
    let task = {name:taskNameEl.value}

    if (taskID==0||taskID){
        tasks[taskID] = task
        this.removeAttribute('id')
    } else {
        tasks.push(task)
    }

    taskNameEl.value=''
    
    localStorage.setItem('tasks',JSON.stringify(tasks))
    renderTasks(tasks)
})

function editTask(id){
    let tasks = getTaskFromLocaleStorage()
    if(tasks.length>0){
        taskNameEl.value=tasks[id].name
        btnAddTaskEl.setAttribute('id',id)
    }
}

function deleteTask(id){
    let tasks = getTaskFromLocaleStorage()
    tasks.splice(id, 1)
    localStorage.setItem('tasks',JSON.stringify(tasks))
    renderTasks(getTaskFromLocaleStorage())
}

function renderTasks(tasks = []){
    let content =''
    tasks.forEach((task,index) => {
        content+= `<li>
            <label>
                    <input type ="checkbox" name ="">
                    <p>${task.name}</p>
                    <span></span>
                    <a href="#" onclick="editTask(${index})">Edit</a>
                    
                    <a href="#" onclick="deleteTask(${index})">Delete</a>
                </label> 
        </li>`
    })
    
    content += '</ul>'
    document.querySelector('#result').innerHTML = content
}


function getTaskFromLocaleStorage(){
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')):[]
}