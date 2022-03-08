let addToDoButton = document.getElementById("addToDo");
// let removeToDoButton =
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    var removeButton = document.createElement('button');
    removeButton.id = "removeButton";
    removeButton.innerText = "Delete";

    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = `Task: ${inputField.value}`;
    toDoContainer.appendChild(paragraph);
    toDoContainer.appendChild(removeButton);

    //Input field value reset
    inputField.value = "";

    //Event listeners
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    removeButton.addEventListener('click', function(){
        toDoContainer.removeChild(paragraph);
        toDoContainer.removeChild(removeButton);
    })
    

})