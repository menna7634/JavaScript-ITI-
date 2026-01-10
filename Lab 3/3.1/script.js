function sortNumbers() {
    let numbers = [];
    let ids = ["n1", "n2", "n3", "n4", "n5"];

    for (let i = 0; i < 5 ; i++) {
        let value = document.getElementById(ids[i]).value.trim();

        if (value === "") {
            alert("All fields are required");
            return;
        }

        if (isNaN(value)) {
            alert("Please enter numbers only");
            return;
        }

        numbers.push(Number(value));
    }

    let asc = numbers.slice().sort(function(a, b) {
        return a - b;
    });

    let desc = numbers.slice().sort(function(a, b) {
        return b - a;
    });

    document.getElementById("original").innerHTML =
        "Original: " + numbers.join(", ");

    document.getElementById("asc").innerHTML =
        "Ascending: " + asc.join(", ");

    document.getElementById("desc").innerHTML =
        "Descending: " + desc.join(", ");
}
