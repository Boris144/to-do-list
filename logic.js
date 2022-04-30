const toDoList = document.getElementById('toDoList');
const newItemInput = document.getElementById('newItemInput');

function toggleDone(event) {
    event.target.classList.toggle("done");
}

function add(){
   const newItem = document.createElement('li');
   newItem.addEventListener("click", toggleDone);
   newItem.innerText = newItemInput.value;
    toDoList.append(newItem);

    newItemInput.value = '';
}