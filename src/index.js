import './style.css';
import smileyPic from './smiley.svg'


  const content = document.querySelector("#content")
 
  const testStyle = document.createElement("h1");
  testStyle.classList.add('hello');
  testStyle.textContent = "Test";

  const testImg = document.createElement("img");
  testImg.src = smileyPic;
  testImg.alt = "A smiley face";

  content.append(testStyle, testImg);

