const calcButtons = document.querySelectorAll('.button');
const numberButtons = document.querySelectorAll('.buttonNumbers');
const display = document.querySelector('#display');
const buttonClear = document.querySelector(".buttonClear");
const buttonMinus = document.querySelector('.buttonMinus');
const buttonMod = document.querySelector('.buttonMod');
const buttonDiv = document.querySelector('.buttonDivide');
const buttonMultiply = document.querySelector('.buttonMultiply');
const buttonSubtract = document.querySelector('.buttonSubtract');
const buttonAdd = document.querySelector('.buttonAdd');
const buttonEquals = document.querySelector('.buttonEquals');
const buttonDecimal = document.querySelector('.buttonDecimal');

let values = [];
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
        add(num1, num2);
    }else if (operator === '-'){
        substract(num1,num2);
    }else if (operator === '*'){
        multiply(num1,num2);
    }else if (operator === '/'){
        divide(num1,num2);
    }
}

function displayNumbers(){
    calcButtons.forEach((button) =>{
        button.addEventListener('click', (e) =>{
            if(button.innerHTML != '=' && button.innerHTML != '+/-' && button.innerHTML != 'C'){
                display.textContent += button.innerHTML;
                console.log(values);
            }
            clear();
        })
    })
}

function clear(){
    buttonClear.addEventListener('click', (e) =>{
        display.textContent = '';
    })
}

displayNumbers();