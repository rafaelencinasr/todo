function newProjectContainer(){
    const element = document.createElement("div");
    element.id = "newProjectContainer";

    const newProjectInput = document.createElement("input");
    newProjectInput.id = "newProjectInput"
    newProjectInput.type = "text";
    newProjectInput.placeholder = "Project name";

    const btnsContainer = document.createElement("div");

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Create";
    saveBtn.id = "newProjectSaveBtn";

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.id = "newProjectCancelBtn";

    btnsContainer.append(saveBtn, cancelBtn);

    element.append(newProjectInput, btnsContainer);
    return element;
}

export default newProjectContainer;