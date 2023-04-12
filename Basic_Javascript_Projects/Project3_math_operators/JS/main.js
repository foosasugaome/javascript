function add() {
    var num1  = 2;
    var num2 = 3;
    var result = num1 + num2;
    document.getElementById('Math').innerHTML  =  num1 + " + " + num2 + "=" + result;
}

function subtract() {
    var num1  = 2;
    var num2 = 3;
    var result = num1 - num2;
    document.getElementById('Math2').innerHTML  =  num1 + " - " + num2 + "=" + result;
}


function multiply() {
    var num1  = 2;
    var num2 = 3;
    var result = num1 * num2;
    document.getElementById('Math3').innerHTML  =  num1 + " * " + num2 + "=" + result;
}


function divide() {
    var num1  = 4;
    var num2 = 2;
    var result = num1 / num2;
    document.getElementById('Math4').innerHTML  =  num1 + " / " + num2 + "=" + result;
}

function multi_op() {
    var num1  = 1;
    var num2 = 2;
    var result = (num1 + num2) * 10 / 2 - 5;
    document.getElementById('Math5').innerHTML  =  "(" + num1 + " + " + num2 + ") * 10  / 2 - 5 = " + result;
}

function modulus_Operator() {
    var simple_Math =  25 % 6;
    document.getElementById('modulus').innerHTML =  'When you divide  25  by 6 you have a remainder of : ' + simple_Math;
}

function  negation_Operator()  {
    var x = 10;
    document.getElementById("unary").innerHTML = -x;
}

function increment() {
        var x = 5;
    x++;
    // document.write(x);
    document.getElementById('increment').innerHTML =  x;
}

function random_number() {    
    document.getElementById('random').innerHTML =   Math.random() * 100;
}

function math_abs() {
    var num = -5;
    var absNum = Math.abs(num);
    console.log(absNum); // Output: 5
    
}

function  math_sqrt(){
    var num = 25;
    var sqrtNum = Math.sqrt(num);
    console.log(sqrtNum); // Output: 5
}

function math_random(){
    var randNum = Math.random();
    console.log(randNum); // Output: a random number between 0 and 1
}

function math_floor(){  // Math.floor(x): Rounds a number x down to the nearest integer. 
    var num = 5.9;
    var floorNum = Math.floor(num);
    console.log(floorNum); // Output: 5
}

function math_cell() { // Math.ceil(x): Rounds a number x up to the nearest integer. 
    var num = 5.1;
    var ceilNum = Math.ceil(num);
    console.log(ceilNum); // Output: 6
}

function  math_round(){
    var num = 5.4;
    var roundNum = Math.round(num);
    console.log(roundNum); // Output: 5
}

function math_max(){ // Math.max(x1, x2, ..., xn): Returns the maximum value among the given numbers x1, x2, ..., xn.\
    var num1 = 10;
    var num2 = 20;
    var num3 = 15;
    var maxNum = Math.max(num1, num2, num3);
    console.log(maxNum); // Output: 20
}

function math_min(){ // Math.min(x1, x2, ..., xn): Returns the minimum value among the given numbers x1, x2, ..., xn.
    var num1 = 10;
    var num2 = 20;
    var num3 = 15;
    var minNum = Math.min(num1, num2, num3);
    console.log(minNum); // Output: 10
}

function  execute(){
    add();
    subtract();
    multiply();
    divide();
    multi_op();
    modulus_Operator();
    negation_Operator();
    increment();
    random_number();
    math_abs();
    math_cell();
    math_floor();
    math_max();
    math_min();
    math_random();
    math_round();
    math_sqrt();
}