function calculateCircleArea() {
    let radius;

    while (true) {
        radius = prompt("What is the value of your circle's radius?");
        if (radius === null || radius.trim() === "" || isNaN(radius)) {
            alert("Error: You must enter a valid numeric value to proceed.");
        } else {
            let r = Number(radius);
            let area = Math.PI * Math.pow(r, 2);
            alert("Total area of the circle is " + area.toFixed(2));
            break; 
        }
    }
}

function calculateSquareRoot() {
    let value;

    while (true) {
        value = prompt("What is the value you want to calculate its square root?");

        if (value === null || value.trim() === "" || isNaN(value)) {
            alert("Error: Please enter a valid numeric value.");
        } else {
            let val = Number(value);
            let result = Math.sqrt(val);
            alert("The square root of " + val + " is " + result.toFixed(2));
            break; 
        }
    }
}