function ExactlyTwo() {
    while (true) {
        let input = prompt("Enter exactly two numbers (e.g. 10,20):");


        if (!input) {
            alert("You must enter exactly two numbers.");
            continue;
        }

        let parts = input.split(",").map(n => n.trim());
        let n1 = Number(parts[0]);
        let n2 = Number(parts[1]);

        if (parts.length === 2 && !isNaN(n1) && !isNaN(n2) && parts[0] !== "" && parts[1] !== "") {
            alert("Success! Numbers: " + n1 + " and " + n2);
            break;
        } else {
            alert("Error: Please enter exactly two valid numbers separated by a comma.");
        }
    }
}

function Reverse() {
    while (true) {
        let input = prompt("Enter numbers separated by commas to reverse (e.g. 1,2,3):");

        if (!input) {
            alert("You must enter at least one number.");
            continue;
        }

        let numbers = input
            .split(",")
            .map(n => n.trim())
            .filter(n => n !== "")
            .map(Number);

        let allNumbers = true;
        for (let i = 0; i < numbers.length; i++) {
            if (isNaN(numbers[i])) {
                allNumbers = false;
                break;
            }
        }
        if (numbers.length > 0 && allNumbers) {

            let reversed = numbers.reverse();

            alert("Reversed: " + reversed.join(", "));
            break;
        } else {
            alert("Error: Please enter a valid list of numbers.");
        }
    }
}


function Add() {
    while (true) {
        let input = prompt("Enter numbers to sum (e.g. 5,10,15):");

        if (!input) {
            alert("You must enter at least one number.");
            continue;
        }

        let numbers = input.split(",").map(n => n.trim()).filter(n => n !== "").map(Number);

         let allNumbers = true;
        for (let i = 0; i < numbers.length; i++) {
            if (isNaN(numbers[i])) {
                allNumbers = false;
                break;
            }
        }

        if (numbers.length > 0 && allNumbers) {
            let sum = 0;
            for (let i = 0; i < numbers.length; i++) {
                sum += numbers[i];
            }
            alert("Total Sum: " + sum);
            break;
        } else {
            alert("Error: Invalid numbers provided.");
        }
    }
}

function Day() {
    while (true) {
        let input = prompt("Enter a date (YYYY-MM-DD):");

        if (!input) {
            alert("You must enter a valid date.");
            continue;
        }

        let dateObj = new Date(input);
        if (!isNaN(dateObj.getTime())) {
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            alert("That day was a: " + days[dateObj.getDay()]);
            break;
        } else {
            alert("Error: Invalid date format. Use YYYY-MM-DD.");
        }
    }
}
