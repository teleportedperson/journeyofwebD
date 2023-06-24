const deletedTask = localStorage.getItem('deletedTask');
const listContainer=document.getElementById("list-container");


const inputBox=document.getElementById("todo_input");
function addTask(){
  
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    
    }
    
    saveData();
 

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");

}
showTask();


listContainer.addEventListener("click",function(e) {
    if(e.target.tagName ==="SPAN"){
        const deletedTask=e.target.textContent;
        e.target.parentElement.remove();
        saveData();
        localStorage.setItem('deletedTask', deletedTask);

    }
    
},false);
saveData();

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");

}
showTask();

