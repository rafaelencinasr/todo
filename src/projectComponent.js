// poner como parametro el index del proyecto
import todoComponent from "./todoComponent";
import editTodoComponent from "./editTodoComponent";
import Todo from "./objConstructor";

function projectComponent(project, projectIndex){
    let indexForNewTodos = project.todosList.length;
    //project es un objeto con nombre y un arreglo de todos
    const projectComponent = document.createElement("div");
    projectComponent.id = "projectComponent";
    const topContainer = document.createElement("div");
    topContainer.id = "topContainer";

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = `"${project.name}" project TODOs:`;

    const newTodoBtn = document.createElement("button");
    newTodoBtn.textContent = "+ New Todo";
    newTodoBtn.id = "newTodoBtn";
    newTodoBtn.addEventListener("click", ()=>{
        let component = document.createElement("div");
        let priorityClasses = ["lowPriority", "midPriority", "highPriority"]
        component.classList.add("todoComponent");
        component.classList.add(priorityClasses[0]);
        component.dataset.index = indexForNewTodos;
        component.id = `todoComponent${indexForNewTodos}`;
        let emptyTodo = new Todo("Titulo","Descripcion","",0,false);
        projectComponent.append(component);
        component.append(editTodoComponent(emptyTodo, indexForNewTodos, projectIndex, true))
        console.log("Old index: " + indexForNewTodos);
        indexForNewTodos++;
        console.log("New index: " + indexForNewTodos);
    })

    topContainer.append(projectTitle, newTodoBtn);
    projectComponent.append(topContainer);
    project.todosList.forEach((todo, index) => projectComponent.append(todoComponent(todo, index, projectIndex)));

    return projectComponent;
}

export default projectComponent;