window.onkeydown = function(event) {
    const keyName = event.key;
    const asciiCode = event.keyCode; 

    let modifiers = [];
    if (event.ctrlKey) 
        modifiers.push("Ctrl");
    if (event.shiftKey) 
        modifiers.push("Shift");
    if (event.altKey)
         modifiers.push("Alt");

    let statusMessage = "";

    if (modifiers.length > 0 && !["Control", "Shift", "Alt"].includes(keyName)) {
        statusMessage = `Combination Detected: ${modifiers.join(' + ')} + ${keyName.toUpperCase()}`;
    } else {
        statusMessage = `Single Key Pressed: ${keyName}`;
    }

    alert(`${statusMessage}\nASCII Code: ${asciiCode}`);

    document.getElementById('display').innerText = statusMessage;
};