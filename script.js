// script.js
function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const average = (num1 + num2) / 2;
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Resultado da Média: ${average.toFixed(2)}`;

    const body = document.body;
    if (average < 50) {
        body.style.backgroundColor = "red";
        body.style.color = "white";
    } else if (average <= 75) {
        body.style.backgroundColor = "green";
        body.style.color = "white";
    } else if (average <= 90) {
        body.style.backgroundColor = "blue";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "purple";
        body.style.color = "white";
    }
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark");
}

function clearInputs() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").textContent = "Resultado da Média: ";
}
