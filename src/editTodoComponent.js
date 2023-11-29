import Todo from "./objConstructor";
import todoComponent from "./todoComponent";

function editTodoComponent(todoObj, index){

    let component = document.querySelector(`#todoComponent${index}`);
    let priorityClasses = ["lowPriority", "midPriority", "highPriority"];

    let innerContainer = document.createElement("div");
    innerContainer.classList.add("innerContainer");
    innerContainer.dataset.index = index;

    //Top Container
    let topSection = document.createElement("div");
    let leftSection = document.createElement("div");
    let rightSection = document.createElement("div");
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
        console.log("This is edit mode");
    });
    deleteBtn.textContent = "Delete";

    rightSection.append(todoDate, editBtn, deleteBtn)

    topSection.classList.add("topSection");



    topSection.append(leftSection, rightSection);


    //return topSection;

    //Bottom container
    const botSection = document.createElement("div");
    const descInput = document.createElement("textarea");
    const priorityTitle = document.createElement("div");
    const buttonsContainer = document.createElement("div");
    const leftBtns = document.createElement("div");
    const rightBtns = document.createElement("div");
    const lowPriorityBtn = document.createElement("button");
    const midPriorityBtn = document.createElement("button");
    const highPriorityBtn = document.createElement("button");
    const saveBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");

    botSection.classList.add("botSection");
    descInput.classList.add("descInput");
    descInput.cols = "50"; 
    descInput.textContent = todoObj.description;
    //descInput.onkeyup = "autoGrow(this)";
    setTimeout(()=>{
        descInput.style.height = `${descInput.scrollHeight}px`;
    },2);
    //descInput.style.height = descInput.scrollHeight + "px";
    //console.log(descInput.scrollHeight + "px");
    descInput.addEventListener("input",function(){
        descInput.style.height = `${descInput.scrollHeight}px`;
    })

    priorityTitle.classList.add("priorityTitle");
    priorityTitle.textContent = "Priority";

    lowPriorityBtn.classList.add("lowPriorityBtn");
    lowPriorityBtn.textContent = "Low";

    midPriorityBtn.classList.add("midPriorityBtn");
    midPriorityBtn.textContent = "Medium";

    highPriorityBtn.classList.add("highPriorityBtn");
    highPriorityBtn.textContent = "High";

    let todoPriority = todoObj.priority; // 0 = low priority, 1 = mid priority, 2 = high priority

    lowPriorityBtn.addEventListener("click",()=>{
        todoPriority = 0;
        console.log("Priority set to low: " + todoPriority);
        changePriorityClass(todoPriority);
    });

    midPriorityBtn.addEventListener("click", ()=>{
        todoPriority = 1;
        console.log("Priority set to mid " + todoPriority);
        changePriorityClass(todoPriority);
    });

    highPriorityBtn.addEventListener("click", ()=>{
        todoPriority = 2;
        console.log("Priority set to high " + todoPriority);
        changePriorityClass(todoPriority);
    })

    function changePriorityClass(priority){
        component.classList.remove(...component.classList);
        component.classList.add("todoComponent");
        component.classList.add(priorityClasses[priority]);
    }

    saveBtn.classList.add("saveBtn");
    saveBtn.textContent = "Save";
    saveBtn.addEventListener("click", ()=>{
        //console.log("Save button clicked! at index: " + index);
        let newTodo = new Todo(todoTitle.value, descInput.value, todoDate.value, todoPriority, checkbox.checked);
        console.log(newTodo);
        component.innerHTML = "";
        component.append(todoComponent(newTodo, index).firstChild);
        /*component.classList.remove(...component.classList);
        component.classList.add("todoComponent");
        component.classList.add(priorityClasses[todoObj.priority]);
        */
        changePriorityClass(todoPriority);
    })

    cancelBtn.classList.add("cancelBtn");
    cancelBtn.textContent = "Cancel";
    cancelBtn.addEventListener("click", ()=>{
        //console.log("Cancel button clicked! at index: " + index);
        component.innerHTML = "";
        component.append(todoComponent(todoObj, index).firstChild);
        todoPriority = todoObj.priority;
        changePriorityClass(todoPriority);
    })

    leftBtns.classList.add("leftBtns");
    rightBtns.classList.add("rightBtns");
    leftBtns.append(lowPriorityBtn, midPriorityBtn, highPriorityBtn);
    rightBtns.append(saveBtn, cancelBtn);

    buttonsContainer.classList.add("buttonsContainer");
    buttonsContainer.append(leftBtns, rightBtns);

    botSection.append(descInput, priorityTitle, buttonsContainer);

    innerContainer.append(topSection, botSection);

    return innerContainer;
}

export default editTodoComponent;

