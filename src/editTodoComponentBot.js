function editTodoComponentBot(todoObj){

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
    console.log(descInput.scrollHeight + "px");
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

    saveBtn.classList.add("saveBtn");
    saveBtn.textContent = "Save";


    cancelBtn.classList.add("cancelBtn");
    cancelBtn.textContent = "Cancel";

    leftBtns.classList.add("leftBtns");
    rightBtns.classList.add("rightBtns");
    leftBtns.append(lowPriorityBtn, midPriorityBtn, highPriorityBtn);
    rightBtns.append(saveBtn, cancelBtn);

    buttonsContainer.classList.add("buttonsContainer");
    buttonsContainer.append(leftBtns, rightBtns);




    botSection.append(descInput, priorityTitle, buttonsContainer);
    return botSection;
}

export default editTodoComponentBot;