const submitButton = document.getElementsByClassName('btn')[0];
var ulList = document.getElementsByClassName('ulList')[0];
submitButton.addEventListener("click", addTask);

function addTask(e){
    const newTask = document.getElementsByTagName('input')[0];
    ulList.innerHTML += "<li>" + newTask.value + "</li>" + "<hr>";
    
}
