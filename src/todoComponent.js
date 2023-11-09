//import editIcon;
//import deleteIcon;
function todoComponent(todoObj, index){

    let component = document.createElement("div");
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
        botSection.classList.toggle("hideBottomSection");
    });
    deleteBtn.textContent = "Delete";

    rightSection.append(todoDate, editBtn, deleteBtn)

    topSection.classList.add("topSection");
    botSection.classList.add("botSection", "hideBottomSection");

    topSection.append(leftSection, rightSection);

    botSection.textContent = todoObj.description;

    component.append(topSection, botSection);
    return component;
}

export default todoComponent;

