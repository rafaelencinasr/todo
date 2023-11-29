import './style.css';
import smileyPic from './smiley.svg';
import Todo from './objConstructor';
import Project from './projectConstructor';
import todoComponent from './todoComponent';
import projectComponent from './projectComponent';
import navigationElement from './navigationElement';
import navigationProjectElement from './navigationProjectElement';
import newProjectContainer from './newProjectContainer';

  const content = document.querySelector("#content")
/* 
  const testStyle = document.createElement("h1");
  testStyle.classList.add('hello');
  testStyle.textContent = "Test 2";

  const testImg = document.createElement("img");
  testImg.src = smileyPic;
  testImg.alt = "A smiley face";

  content.append(testStyle, testImg);
*/

let todo1 = new Todo("My first todo", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maiores facilis minus et explicabo maxime accusantium fugit, dolorem quae. Eveniet consequatur laborum ut tempora assumenda rem! Quaerat qui optio laborum!", "2023-11-03", 2, false);
let todo2 = new Todo("My second todo", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro esse ea mollitia adipisci similique nisi. Odio nostrum error minus vel adipisci, explicabo delectus culpa quia necessitatibus repellendus harum deserunt earum.", "2023-10-25", 1 , true);
let todo3 = new Todo("My third todo", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat amet debitis minima illum in veniam commodi natus. Obcaecati, nobis necessitatibus possimus recusandae odit rerum, reprehenderit voluptatem magnam quaerat autem nemo Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, natus ad. Delectus officia possimus facere ipsam recusandae enim obcaecati natus fugiat reprehenderit dolorum quod ipsa numquam, ipsum soluta quas doloribus", "2020-02-18", 0 , false);
let todo4 = new Todo("My fourth todo", "wiwu", "2005-02-18", 2 , true);

/*
let allProjects = [];
if(localStorage.getItem("allProjects") != null){
  console.log("Local storage is not empty!");
  allProjects = [JSON.parse(localStorage.getItem("allProjects"))];
}
console.log("allProjects array:");
console.log(allProjects);
*/

let Project1 = new Project("Project 1 name");
//console.log(Project1);
//console.log("Test push todo1, todo2, todo3");
Project1.newTodo(todo1);
Project1.newTodo(todo2);
Project1.newTodo(todo3);
Project1.newTodo(todo4);
//console.log(Project1.todosList);

/*
let todo1Component = todoComponent(todo1,1);
let todo2Component = todoComponent(todo2,2);
let todo3Component = todoComponent(todo3,3);
*/
const dashboard = document.createElement("section");
dashboard.id = "dashboard";
const navigation = document.createElement("nav");
const header = document.createElement("header");
const headerTitle = document.createElement("h1");
headerTitle.textContent = "TODO List";
headerTitle.classList.add("headerTitle");

header.append(headerTitle);
const main = document.createElement("main");
const footer = document.createElement("footer");

let Project2 = new Project("Project 2 test");

//allProjects.push(Project1);
//allProjects.push(Project2);
/*
localStorage.clear();
localStorage.setItem("allProjects", JSON.stringify(allProjects));
*/

navigation.id = "navigationContainer";
const navTopContainer = document.createElement("div");
const homeNav = navigationElement("Home");
const allNav = navigationElement("All");
const todayNav = navigationElement("Today");
const weekNav = navigationElement("Week");
const completedNav = navigationElement("Completed");
const projectsNav = navigationElement("Projects");

navTopContainer.id = "navTopContainer";
navTopContainer.append(homeNav, allNav, todayNav, weekNav, completedNav);

const navProjectsContainer = document.createElement("div");
const navProjectList = document.createElement("div");
navProjectList.id = "navProjectList"

const createProjectBtn = document.createElement("button");
createProjectBtn.textContent = "+ New project";
createProjectBtn.id = "newProjectBtn";
createProjectBtn.addEventListener("click", ()=>{
  //console.log("New project btn clicked!");
  //projectsArray.push(Project1);
  //localStorage.setItem("allProjects", JSON.stringify(projectsArray));
  createProjectBtn.disabled = true;
  navProjectList.append(newProjectContainer());
  let newProjectSaveBtn = document.querySelector("#newProjectSaveBtn");
  let newProjectCancelBtn = document.querySelector("#newProjectCancelBtn");
  let newProjectInput = document.querySelector("#newProjectInput");
  
  newProjectSaveBtn.addEventListener("click", ()=>{
    console.log("New project name: " + newProjectInput.value);
    projectsArray.push(new Project(newProjectInput.value));
    localStorage.setItem("allProjects", JSON.stringify(projectsArray));

    createProjectBtn.disabled = false;
    let newProjectContainer = document.querySelector("#newProjectContainer");
    //newProjectContainer.remove();
    navProjectList.innerHTML = '';
    renderProjectList();
  })

  newProjectCancelBtn.addEventListener("click", ()=>{
    console.log("Cancel project btn clicked!");
    createProjectBtn.disabled = false;
    let newProjectContainer = document.querySelector("#newProjectContainer");
    newProjectContainer.remove();
  })

})

navProjectsContainer.id = "navProjectsContainer";
navProjectsContainer.append(projectsNav, createProjectBtn, navProjectList);

let projectsArray = [];

function renderProjectList(){
  if(localStorage.getItem("allProjects") != null){
    console.log("There are projects stored in localStorage");
    projectsArray = [...JSON.parse(localStorage.getItem("allProjects"))]
    projectsArray.forEach((element, index) =>{
      navProjectList.append(navigationProjectElement(element.name, index));
    })
  } else{
    console.log("No projects found");
  }
}

renderProjectList();



navigation.append(navTopContainer, navProjectsContainer);
/*
projectsArray.push(Project2);
console.log(projectsArray);

localStorage.setItem("allProjects", JSON.stringify(projectsArray));
*/
const projectComponentElement = projectComponent(Project1);
main.append(projectComponentElement);
//main.append(todo1Component, todo2Component, todo3Component);

dashboard.append(main, navigation, header, footer);



content.append(dashboard);

