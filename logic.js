const toDoList = document.getElementById('toDoList');
const newItemInput = document.getElementById('newItemInput');

function delte(event) {
    event.target.parentElement.remove();
}

function toggleDone(event) {
    event.target.classList.toggle("done");
}

function add(){
    const newItemButton = document.createElement('button');
    newItemButton.innerText = 'X';
    newItemButton.addEventListener("click", delte);

    const newItem = document.createElement('li');
    newItem.addEventListener("click", toggleDone);
    newItem.innerText = newItemInput.value;
    newItem.appendChild(newItemButton);
    toDoList.append(newItem)

    newItemInput.value = '';
}https://github.com/Boris144/to-do-list.git