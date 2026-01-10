
function performMath(form) {
    var v1 = form.val1.value;
    var v2 = form.val2.value;
    var v3 = form.val3.value;

    if (v1.trim() === "" || v2.trim() === "" || v3.trim() === "" ||
        isNaN(v1) || isNaN(v2) || isNaN(v3)) {
        alert("Error: Please enter valid numeric values in all three fields.");
        return false;
    }

    var elements = [Number(v1), Number(v2), Number(v3)];

    var sum = elements[0] + elements[1] + elements[2];
    var mul = elements[0] * elements[1] * elements[2];

    var div;
    if (elements[1] === 0 || elements[2] === 0) {
        div = "Infinity (Division by zero)";
    } else {
        div = elements[0] / elements[1] / elements[2];
    }

    document.write("<h1 style='font-family: Arial; border-bottom: 2px solid #333; padding-bottom: 10px;'>Adding -- Multiplying -- and dividing 3 values</h1>");
    document.write("<hr>");
    document.write("<p style='color: red; font-family: Arial; font-weight: bold;'>sum of the 3 values " + elements[0] + " + " + elements[1] + " + " + elements[2] + " = " + sum + "</p>");
    document.write("<p style='color: red; font-family: Arial; font-weight: bold;'>multiplication of the 3 values " + elements[0] + " * " + elements[1] + " * " + elements[2] + " = " + mul + "</p>");
    document.write("<p style='color: red; font-family: Arial; font-weight: bold;'>division of the 3 values " + elements[0] + " / " + elements[1] + " / " + elements[2] + " = " + div + "</p>");

    return false;
}