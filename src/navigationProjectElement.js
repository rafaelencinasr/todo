function navProjectElement(content, index){
    const element = document.createElement("div");
    element.textContent = content;
    element.classList.add("navElement");
    element.classList.add("projects");
    element.id = `project${index}`;
    element.dataset.projectIndex = index;
    return element;
}

export default navProjectElement;