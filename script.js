//constants declared for input button and task area 
const taskIinput = document.querySelector("#newtask input");
const taskSection = document.querySelector(".tasks");
//listener for the enter key used to qdd new task 
taskIinput.addEventListener("keyup", (e) => {
    if (e.key == "Enter"){createTask()
    }})
// the onclick event for the add button 
document.querySelector('#push').onclick = function(){
    createTask();
}
// createTask function 
function  createTask(){
    if (taskIinput.value.length == 0){
        alert("the task field is blank , enter a task and try again ");}
    else{
        //block to add tasks into task area
        taskSection.innerHTML += 
        `<div class="task">
        <label id="taskname">
        <input onclick="updateTask(this)" type="checkbox" id="check-task">
        <p>${document.querySelector("#newtask input").value}</p>
        </label>
        <div class="delete">
        <i class="uil uil-trash"></i> </div></div>
        `;
        taskIinput.value = '';
        var current_task = document.querySelectorAll(".delete");
        for (var i=0;i<current_task.length; i++){
            current_task[i].onclick= function(){this.parentNode.remove();}
            
        }
        taskSection.offsetHeight >= 100
        ? taskSection.classList.add("overflow")
        : taskSection.classList.remove("overflow");
        
    }
}
function updateTask(task){
    let taskItem = task.parentElement.lastElementChild;
    if (task.checked) {
        taskItem.classList.add("checked");
    }
    else{taskItem.classList.remove("checked");}
}
