/*var y;  
console.log(y);    // undefined
*/
 
//console.log(y);    // y is not defined

/*
var x=10; 
var y = 20;  
console.log(y*x-2);  // 10*20-2=198
*/

/*
var y;  
console.log(typeof y); // undefined
*/

/*
var x = "1"; 
var y = 2; 
console.log(x+y); //12
*/

/*
var x = 1;  
var y = true; 
console.log(x+y); //1+1=2
*/
/////////////////////////////////////////////////////////////////////////////////////////////

let message = prompt("Enter a message:");

    for (let i = 1; i <= 6; i++) {
        document.write("<h" + i + ">" + message + "</h" + i + ">");
    }
///////////////////////////////////////////////////////////////////////////////////////////



let sum = 0;

while (true) {
    let value = Number(prompt("Enter a number (0 to stop):"));
    
       if (isNaN(value)) {
        alert("Please enter a numeric value only.");
        continue;  
    }

    if (value === 0) { 
        break;    
    } 

    sum += value;
    if (sum > 100) {
        alert("Sum exceeded 100");
        break;
    }
}
alert("Total sum = " + sum);

///////////////////////////////////////////////////////////////////////////////////
let username;
let year;

while (true) {
    username = prompt("Enter your name:");
    
    if (username === null || username.trim() === "") {
        alert("Name cannot be empty. Please enter your name.");
        continue;
    }

    if (!isNaN(username)) {
        alert("Name cannot be a number. Please enter a valid name.");
        continue;
    }

    break; 
}

let age = new Date().getFullYear() - year;

document.write("Name: " + username + "<br>");
document.write("Birth year: " + year + "<br>");
document.write("Age: " + age);
