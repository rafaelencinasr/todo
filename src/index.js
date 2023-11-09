import './style.css';
import smileyPic from './smiley.svg';
import Todo from './objConstructor';
import Project from './projectConstructor';
import todoComponent from './todoComponent';
import projectComponent from './projectComponent';



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
let todo3 = new Todo("My third todo", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat amet debitis minima illum in veniam commodi natus. Obcaecati, nobis necessitatibus possimus recusandae odit rerum, reprehenderit voluptatem magnam quaerat autem nemo.", "2020-02-18", 0 , false);
let todo4 = new Todo("My fourth todo", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio, laboriosam dignissimos, iure maxime earum deleniti, nam exercitationem corporis accusamus vel explicabo in. Ratione modi esse veritatis repellat commodi suscipit.", "2005-02-18", 2 , true);


let Project1 = new Project("A different name");
console.log(Project1);
console.log("Test push todo1, todo2, todo3");
Project1.newTodo(todo1);
Project1.newTodo(todo2);
Project1.newTodo(todo3);
Project1.newTodo(todo4);
console.log(Project1.todosList);

let todo1Component = todoComponent(todo1,1);
let todo2Component = todoComponent(todo2,2);
let todo3Component = todoComponent(todo3,3);

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

const projectComponentElement = projectComponent(Project1);
main.append(projectComponentElement);
//main.append(todo1Component, todo2Component, todo3Component);

dashboard.append(navigation, header, main, footer);



content.append(dashboard);

