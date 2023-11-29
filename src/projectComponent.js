// poner como parametro el index del proyecto
import todoComponent from "./todoComponent";

function projectComponent(project){

    //project es un objeto con nombre y un arreglo de todos
    const projectComponent = document.createElement("div");
    const topContainer = document.createElement("div");
    topContainer.id = "topContainer";

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = `"${project.name}" project TODOs:`;

    const newTodoBtn = document.createElement("button");
    newTodoBtn.textContent = "+ New Todo";
    newTodoBtn.id = "newTodoBtn";

    topContainer.append(projectTitle, newTodoBtn);
    projectComponent.append(topContainer);
    project.todosList.forEach((todo, index) => projectComponent.append(todoComponent(todo, index)));

    return projectComponent;
}

export default projectComponent;