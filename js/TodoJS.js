const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //json.stringify는 값을 스트링=문자열로 저장하고 싶을 때 씀
    //json.parse는 문자열로 저장한 값을 js배열로 만들어줌
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id=newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button); 
    todoList.appendChild(li);
    saveTodos();
}

function handleTodo(event){
    event.preventDefault();
    const newTodo =todoInput.value;
    todoInput.value="";
    const newTodoObj= {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); 
    paintTodo(newTodoObj);
    saveTodos;
}

todoForm.addEventListener("submit", handleTodo);

const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos!== null){
    const parsedTodos=JSON.parse(savedTodos);
    //배열로 만들어야 js에서 쓸 수 있움
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
    //forEach는 배열안에 있는 각각의 아이템이 하나씩 순차적으로 실행함
    //이 (item)을 매개변수로 하고, => 뒤에가 함수 안에 실행문임
}

//.filter(함수) -> 필터에서 실행되는 함수는 true를 리턴해야함 false를 리턴하면 저장안함
//기본적으로 filter도 forEach처럼 순차적으로 주루루룩 실행함