const inputBox=document.getElementById("todo_input");
const listContainer=document.getElementById("list-container");

function addTask(){
    if (inputBox.value===''){
        alert("Field empty");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    
    }
    inputBox.value="";
    saveData();
} 

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");

}
showTask();


listContainer.addEventListener("click",function(e) {
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        const deletedTask=e.target.textContent;
        saveData();
        localStorage.setItem('deletedTask', deletedTask);


    }
    else if(e.target.tagName ==="SPAN"){
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

