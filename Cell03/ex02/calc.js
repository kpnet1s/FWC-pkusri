const left = document.getElementById("left");
const right = document.getElementById("right");
const operator = document.getElementById("operator");
const calculate = document.getElementById("calculate");

calculate.addEventListener("click", function () {
    const a = left.value;
    const b = right.value;

    if (!/^\d+$/.test(a) || !/^\d+$/.test(b)) {
        alert("Error :(");
        return;
    }

    const num1 = Number(a);
    const num2 = Number(b);
    let result;

    if ((operator.value === "/" || operator.value === "%") && num2 === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    switch (operator.value) {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            result = num1 / num2;
            break;

        case "%":
            result = num1 % num2;
            break;
    }

    alert(result);
    console.log(result);
});

setInterval(function () {
    alert("Please, use me...");
}, 30000);
