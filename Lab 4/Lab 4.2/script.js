var inp = document.querySelector("#Answer");
function EnterNumber(num) {
    inp.value += num;

}


function EnterOperator(op) {
    if (inp.value === "")
        return;

    let lastChar = inp.value[inp.value.length - 1];

    if ("+-*/.".includes(lastChar)) {
        inp.value = inp.value.slice(0, -1) + op;
    } else {
        inp.value += op;
    }
}

function EnterClear() {
    inp.value = "";
}

function EnterEqual() {
    if (inp.value !== "") {
        inp.value = eval(inp.value);

    }
}
