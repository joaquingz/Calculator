const calcButtons = document.querySelectorAll('.button');
const numberButtons = document.querySelectorAll('.buttonNumbers');
const display = document.querySelector('#display')

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
    let values = [];
    calcButtons.forEach((button) =>{
        button.addEventListener('click', (e) =>{
            values.push(e.target.innerHTML)
        })
    })
}

displayNumbers();