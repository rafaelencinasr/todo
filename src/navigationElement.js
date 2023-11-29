function navElement(content){
    const element = document.createElement("div");
    element.textContent = content;
    element.classList.add("navElement");
    element.id = `nav${content}`;
    return element;
}

export default navElement;