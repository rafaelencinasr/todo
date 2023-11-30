//import editIcon;
//import deleteIcon;

import editTodoComponentTop from "./editTodoComponentTop";
import editTodoComponentBot from "./editTodoComponentBot";
import editTodoComponent from "./editTodoComponent";

function todoComponent(todoObj, index, projectIndex){

    let component = document.createElement("div");
    let innerContainer = document.createElement("div");
    let leftSection = document.createElement("div");
    let rightSection = document.createElement("div");
    let topSection = document.createElement("div");
    let botSection = document.createElement("div");
    let checkbox = document.createElement("input");
    let todoTitle = document.createElement("div");
    let todoDate = document.createElement("input");
    let editBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");

    let priorityClasses = ["lowPriority", "midPriority", "highPriority"]
    component.classList.add("todoComponent");
    component.classList.add(priorityClasses[todoObj.priority]);
    component.dataset.index = index;
    component.id = `todoComponent${index}`;

    innerContainer.classList.add("innerContainer");
    innerContainer.dataset.index = index;

    leftSection.classList.add("leftSection");

    checkbox.type = "checkbox";
    checkbox.checked = todoObj.checkbox;
    todoTitle.classList.add("todoTitle");
    todoTitle.textContent = todoObj.title;

    leftSection.append(checkbox, todoTitle);


    rightSection.classList.add("rightSection");
    todoDate.type = "date";
    todoDate.value = todoObj.dueDate;   //AAAA-MM-DD

    editBtn.textContent = "Edit";
    editBtn.addEventListener("click",()=>{
        //console.log("review mode");
        let componentSelector = document.querySelector(`#todoComponent${index}`);
        //console.log(componentSelector);
        componentSelector.innerHTML = "";
        componentSelector.append(editTodoComponent(todoObj, index, projectIndex, false));
    });

    todoTitle.addEventListener("click",()=>{
        botSection.classList.toggle("hideBottomSection");
    });
    botSection.addEventListener("click",()=>{
        botSection.classList.toggle("hideBottomSection");
    })

    deleteBtn.textContent = "Delete";

    rightSection.append(todoDate, editBtn, deleteBtn)

    topSection.classList.add("topSection");
    botSection.classList.add("botSection", "hideBottomSection");

    topSection.append(leftSection, rightSection);
    botSection.textContent = todoObj.description;

    innerContainer.append(topSection, botSection);

    //component.append(topSection, botSection);
    component.append(innerContainer);
    return component;
}

export default todoComponent;

