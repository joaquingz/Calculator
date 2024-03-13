let number1;
let number2;
let operator;

function add(a,b){
    return a+b
}

function substract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

function operate(operator, num1, num2){
    if(operator === '+'){
        add(num1, num2)
    }else if (operator === '-'){
        substract(num1,num2)
    }else if (operator === '*'){
        multiply(num1,num2)
    }else if (operator === '/'){
        divide(num1,num2)
    }
}