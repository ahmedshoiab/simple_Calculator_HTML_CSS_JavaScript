function getNumber(num) {
    let results = document.getElementById("result");
    results.value += num;
}


function clrResult() {
    let results = document.getElementById("result");
    results.value = "";
}

function getResult() {
    let results = document.getElementById("result");
    results.value = eval(results.value);
}