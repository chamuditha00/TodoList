const inputBox = document.querySelector("#input-box");
const listcontainer = document.querySelector("#list-container");

function addTask() {
    if(inputBox.value === '') {
        alert("Please Enter a Task");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = " ";
    saveTask();
}
listcontainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTask();
    }else if(e.target.tagName === "SPAN") {
        let li = e.target.parentElement;
        listcontainer.removeChild(li);
        saveTask();
    }
}, false);

function saveTask(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function loadTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
loadTask();