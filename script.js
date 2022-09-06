let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){

    const toDo = document.createElement('div')

    toDo.classList.add('paragraph-styling');

    toDo.innerText = inputField.value;

    toDoContainer.appendChild(toDo);

    inputField.value = "";


})       




