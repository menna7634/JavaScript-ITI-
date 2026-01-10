const header = document.getElementById('header'); // div that contain the image
const navDiv = document.getElementById('navigation'); // div which contain ul inside it 
const originalImg = header.querySelector('img');  // img itself

const clonedImg = originalImg.cloneNode();

originalImg.style.position = "fixed";
originalImg.style.top = "0";
originalImg.style.right = "0";
originalImg.style.margin = "10px";

clonedImg.style.position = "fixed";
clonedImg.style.bottom = "0";
clonedImg.style.left = "0";
clonedImg.style.margin = "10px";

document.body.appendChild(clonedImg);


document.body.style.margin = "0";
document.body.style.height = "100vh";
document.body.style.display = "flex";
/*Flexbox.malven.co*/

document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

const ul = document.getElementById('nav');
ul.style.listStyleType = "none"; 
ul.style.padding = "0";
ul.style.textAlign = "center";  
