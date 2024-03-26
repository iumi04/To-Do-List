const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//adding a task to list
function addTask(){
    if(inputBox.value === ''){
        alert("You cannot add an empty task :)");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }


    inputBox.value = '';
    saveData(); //save task
}

//checking and unchecking tasks
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    
}, false);

//saving tasks even when you refresh
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

