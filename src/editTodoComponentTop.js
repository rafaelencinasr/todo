//import editIcon;
//import deleteIcon;
function editTodoComponentTop(todoObj){

    let leftSection = document.createElement("div");
    let rightSection = document.createElement("div");
    let topSection = document.createElement("div");
    let checkbox = document.createElement("input");
    let todoTitle = document.createElement("input");
    let todoDate = document.createElement("input");
    let editBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");

    leftSection.classList.add("leftSection");

    checkbox.type = "checkbox";
    checkbox.checked = todoObj.checkbox;
    todoTitle.type = "text";
    todoTitle.value = todoObj.title;
    todoTitle.classList.add("todoTitle");
    todoTitle.textContent = todoObj.title;

    leftSection.append(checkbox, todoTitle);


    rightSection.classList.add("rightSection");
    todoDate.type = "date";
    todoDate.value = todoObj.dueDate;   //AAAA-MM-DD

    editBtn.textContent = "Edit";

    editBtn.addEventListener("click",()=>{
        /* botSection.classList.toggle("hideBottomSection"); */
        console.log("This is edit mode");
    });
    deleteBtn.textContent = "Delete";
    
    /* deleteBtn.addEventListener("click",()=>{
        console.log("hey");
    }) */

    rightSection.append(todoDate, editBtn, deleteBtn)

    topSection.classList.add("topSection");
    /* botSection.type = "text";
    botSection.classList.add("botSection", "hideBottomSection"); */


    topSection.append(leftSection, rightSection);
/*     botSection.rows = "4";
    botSection.cols = "50";
    botSection.textContent = todoObj.description; */

    return topSection;
}

export default editTodoComponentTop;

