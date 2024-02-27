const toDoForm = document.getElementById("todo-form"); 
const toDoInput =  document.querySelector("#todo-form  input"); 
const toDoList = document.getElementById("todo-list"); 

const TODOS_KEY = "todos";
let toDos = [];

function buttonDelete(event) {
    const li = event.target.parentElement; 
    li.remove(); 
    console.log(li.id); 
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));   
    saveToDos();
    console.log("Button delete");
};

function saveToDos() {
    console.log("들어왔니");
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
    
};

 
function paintToDo(newTodo) { 
 const li = document.createElement("li");  
 li.id = newTodo.id
 const span = document.createElement("span");
 span.innerText = newTodo.text; 
 const button = document.createElement("button");
 button.innerText= "delete"; 
 button.addEventListener("click", buttonDelete);



 li.appendChild(span);// li는 span의 자식
 li.appendChild(button);  
 console.log(li); 
toDoList.appendChild(li);  

};


function handleToDoSubmit(event) {
    event.preventDefault(); 
    const newTodo = toDoInput.value; //newTodo에 복사 
    toDoInput.value = "";  
    const newTodoObj = {
      text:newTodo, 
      id: Date.now(), 
    }; 
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);  
    saveToDos(); 

}


toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(saveToDos);

if(savedToDos !== null ) {
    const parsedToDos = JSON.parse(savedToDos); 
    toDos = parsedToDos;
    console.log("parsed"+ parsedToDos)
    parsedToDos.forEach((item) => console.log(item + "이 들어왔네요"));

}