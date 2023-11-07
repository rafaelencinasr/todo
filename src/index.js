import './style.css';
import smileyPic from './smiley.svg';
import Todo from './objConstructor';
import Project from './projectConstructor'



  const content = document.querySelector("#content")
 
  const testStyle = document.createElement("h1");
  testStyle.classList.add('hello');
  testStyle.textContent = "Test 2";

  const testImg = document.createElement("img");
  testImg.src = smileyPic;
  testImg.alt = "A smiley face";

  content.append(testStyle, testImg);


let todo1 = new Todo("My first todo", "this is my todo description", "fecha: hoy", 3 , false);
/* console.log("Original priority: " + todo1.priority);
todo1.setPriority(1);
console.log("New priority: " + todo1.priority);
todo1.title = "a different title";
console.log(todo1.title); */
let arrayTest = ['project1', 'project2', 'project3']
let Project1 = new Project("Test project name", arrayTest);
console.log(Project1);
console.log("Test delete project2: index=1");
Project1.deleteTodo(1);
console.log(Project1.todosList);

