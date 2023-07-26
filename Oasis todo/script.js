function addtask() {
  const text = document.getElementById("text");
  const taskList = document.getElementById("task"); 

  if (text.value === '') {
    alert("You have to write something");
  } else {
    let li = document.createElement("li");
    li.textContent = text.value;

    let span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);

    taskList.appendChild(li);
  }
  text.value = '';
}

task.addEventListener("click", function(e){
  if(e.target.tagName == "LI"){
    e.target.classList.toggle("check"); 
  }
  else if(e.target.tagName === "SPAN")
  {
    e.target.parentElement.remove();
  }
}, false);

function saveData(){
  localStorage.setItem("data", taskList.innerHTML); 
}
function showTask(){
  taskList.innerHTML = localStorage.getItem("data"); 
}
showTask();
