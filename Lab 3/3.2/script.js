let count;
while (true) {
    let input = prompt("How many users do you want to add?");
    count = parseInt(input);
    if (!isNaN(count) && count > 0) {
        break; 
    }
    alert("Invalid input. Please enter a positive number.");
}
    let users = [];

    for (let i = 0; i < count; i++) {
        let name = "";
        let age = 0;

     while (true) {
    name = prompt(`[User ${i + 1}] Enter Name:\n(4-9 characters, letters only)`);
        if (name && 
        name.trim().length > 3 && 
        name.trim().length < 10 && 
        /^[A-Za-z\s]+$/.test(name)) {
        break;
    }
    
    alert("Error: Name must be 4-9 characters and contain only letters.");
}

        while (true) {
            let ageInput = prompt(`[User ${i + 1}] Enter Age for ${name}:\n(Between 11 and 59)`);
            age = parseInt(ageInput);
            if (!isNaN(age) && age > 10 && age < 60) break;
            alert("Error: Age must be a number between 11 and 59.");
        }

        users.push({ name, age });
    }

    renderUserTable(users);


function renderUserTable(userList) {
    const container = document.getElementById("table-container");
   container.innerHTML = ""; 

    const table = document.createElement("table");
    
    // Header
    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
    `;
    table.appendChild(thead);

    // Body
    const tbody = document.createElement("tbody");
    userList.forEach(user => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${user.name}</td>
            <td>${user.age}</td>
        `;
        tbody.appendChild(tr);
    });
    
    table.appendChild(tbody);
    container.appendChild(table);
}