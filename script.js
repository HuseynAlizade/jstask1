//! Homework

var firstValue = +prompt("Please enter your first value");
var seconValue = +prompt("Please enter your second value");
console.log(firstValue);
console.log(seconValue);

var symbol = prompt("Please enter a symbol");

if(symbol == "+") {
    var result = firstValue + seconValue;
    alert(result)
} else if (symbol == "-") {
    var result = firstValue - seconValue;
    alert(result)
}else if (symbol == "*") {
    var result = firstValue * seconValue;
    alert(result)
}else if (symbol == "/") {
    if (firstValue == "0" || seconValue == "0") {
        alert("Cannot divide by zero");
    } else {
        var result = firstValue/ seconValue;
        alert(result);
    }
}else{
    alert("Invalid  symbol or number");
}

