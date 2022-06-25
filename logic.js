const localStorageKey = 'toDoList';
const toDoListElements = document.getElementById('toDoList');
const newItemInput = document.getElementById('newItemInput');
if (!localStorage.getItem(localStorageKey) ){
    localStorage.setItem(localStorageKey, JSON.stringify([]));
}
const toDoList = JSON.parse(localStorage.getItem(localStorageKey));
render();

function removeToDo(toDoItem) {
    const indexForDelete = toDoList.indexOf(toDoItem);
    toDoList.splice(indexForDelete, 1);
    localStorage.setItem(localStorageKey,JSON.stringify(toDoList));
    render();
}

function toggleDone(event) {
    event.target.classList.toggle("done");
}

function add(){
    toDoList.push(newItemInput.value);
    localStorage.setItem(localStorageKey,JSON.stringify(toDoList));
    render();
    newItemInput.value = '';
}

function render() {
    removeAllChildNodes(toDoListElements);
    toDoList.forEach(toDo =>  {
        const newItemButton = document.createElement('button');
        newItemButton.innerText = 'X';
        newItemButton.addEventListener("click", removeToDo);

        const newItem = document.createElement('li');
        newItem.addEventListener("click", toggleDone);
        newItem.innerText = toDo;
        newItem.appendChild(newItemButton);
       toDoListElements.append(newItem);
      })
    }

    function removeAllChildNodes(parent) {
        while(parent.firstChild) {
            parent.removeChild(parent.firstChild)
        }
    }

//  https://github.com/Boris144/to-do-list.git