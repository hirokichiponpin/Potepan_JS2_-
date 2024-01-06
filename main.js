function operationsJudge() {
    return["+","-","*","/"].includes(display.innerHTML.toString().slice(-1));
}

function pointJudge() {
    return["."].includes(display.innerHTML.toString().slice(-1));
}

function decimalMode() {
    const decimal = document.getElementById('point')
    decimal.disabled = true ;
}

function cancelDecimalMode() {
    const decimal = document.getElementById('point')
    decimal.disabled = false ;
}

function clickButton(target) {
    const calculateNumber = document.getElementById('display');
    
    const targetVallue = target.innerHTML;
    
    if (targetVallue == "AC") {
        display.innerHTML = "0";
        cancelDecimalMode();
    } else if (targetVallue == "=") {
        cancelDecimalMode();
        if (operationsJudge()) {
            display.innerHTML = display.innerHTML.slice(0,-1);
            display.innerHTML = eval(display.innerHTML);
        } else {
            display.innerHTML = eval(display.innerHTML);
        }
    } else if (targetVallue == ".") {
        if (operationsJudge()) {
            decimalMode();
            display.innerHTML = display.innerHTML + "0.";
        } else {
            decimalMode();
            display.innerHTML += targetVallue;
        }
    } else if (targetVallue == "+" || targetVallue == "-" || targetVallue == "*" || targetVallue == "/") {
        if (operationsJudge()) {
            cancelDecimalMode();
            display.innerHTML = display.innerHTML.slice(0,-1) + targetVallue;
        } else {
            cancelDecimalMode();
            display.innerHTML += targetVallue;
        }
    } else if (display.innerHTML == "0" && targetVallue == ".") {
        display.innerHTML = "0.";
    } else if (display.innerHTML == "0" && targetVallue == "00") {
        display.innerHTML = "0";
    } else if (operationsJudge() && targetVallue == "00") {
        display.innerHTML = display.innerHTML;
    } else {
        if (display.innerHTML == "0") {
            display.innerHTML = targetVallue;
        } else {
            display.innerHTML += targetVallue;
        }
    }
}