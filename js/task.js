let btnAddTaskEl = document.querySelector('button')
let taskNameEl = document.querySelector('#content')

let tasks = getTaskFromLocaleStorage()
renderTasks(tasks)

btnAddTaskEl.addEventListener('click', function() {
    if(!taskNameEl.value){
        alert('Please input task name first')
        return false
    }

    let tasks = getTaskFromLocaleStorage()

    tasks.push({
        name: taskNameEl.value
    })
    taskNameEl.value=''
    
    localStorage.setItem('tasks',JSON.stringify(tasks))
    renderTasks(tasks)
})

function renderTasks(tasks = []){
    let content =''
    tasks.forEach((task) => {
        content+= `<li>
            <label>
                    <input type ="checkbox" name ="">
                    <p>${task.name}</p>
                    <span></span>
                </label> 
        </li>`
    })
    
    content += '</ul>'
    document.querySelector('#result').innerHTML = content
}

function getTaskFromLocaleStorage(){
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')):[]
}