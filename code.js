/*
function add(numOne,numTwo) {
    if (numOne == 0 && numTwo == 0){
      return 0
    } else{
      return (numOne + numTwo)
    }
}
*/
function subtractNum(numBig,numSmall) {
    return (numBig -numSmall)
}
  
function sumNum(array) {
    let instSum = 0;
  for ( const item of array ){
    instSum = instSum + item;
  }
  return instSum
}
  
function multiplyNum(array) {
  let instMult = 1;
  for ( const item of array ){
    if (item == 0) {
      return 0
    }
    instMult = (instMult * item);
  }
  return instMult
}
function divideNum(numOne,numTwo) {
  if (numTwo == 0){
    return "Can't Divide by 0!"
  }
  return numOne / numTwo
}
  
function powerNum(num, power) {
    return (num**power)
}
  
function factorialNum(num) {
  let instFact = 1;
  if ((num == 0)|| (num==1)){
    return instFact
  }
  for (let i = num; i>=1; i--){
    instFact = instFact * i;
  }
  return instFact
}

function operate(numOne,numTwo,operator){
  switch (operator) {
    case  "+":
      return sumNum([numOne,numTwo]);
      break;
    case "-":
      return subtractNum(numOne,numTwo);
      break;
    case "x":
      return multiplyNum([numOne,numTwo]);
      break;
    case "/":
      return divideNum(numOne,numTwo);
      break;
    default:
      return "Operator not recognized.";
  }
}
/*
function displayText(){

}


const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
*/
const display = document.querySelector("#display");
const buttons = document.getElementsByTagName("button");
let text = "";
let inputOne = null;
let oper = "";



for(let i = 0; i< buttons.length; i++){
  buttons.item(i).addEventListener("click",()=> {
    if (display.textContent == "Uh, you turned me on!"){
      display.textContent = "";
    }


    if ((text == "")&&(inputOne == null)) {
      switch (buttons.item(i).id){
        case "multiply":
        case "divide":
          display.textContent = "First you need to type a number or + or -.";
          break;
        case "equals":
          display.textContent = "What does nothing really equal to? I think we need a philosophy textbook.";
          break;
        case "backspace":
          display.textContent = "";
          break;
        case "clear":
          display.textContent = "";
          inputOne = null;
          text = "";
          oper = "";
          break;
        default:
          text = buttons.item(i).textContent;
          display.textContent = text;
      }
      
    }else if (buttons.item(i).id == "clear"){
      text = "";
      display.textContent = "";
      inputOne = null;
      oper = "";
    }else if (buttons.item(i).id == "backspace"){
      text = display.textContent;
      text = text.slice(0,text.length-1);
      display.textContent = text;
    }else if (buttons.item(i).id == "equals"){
      //desarma el text en operaciones y manda a operate.
      if ((oper != "")&&(text != "")){
      display.textContent = operate(inputOne,text,oper);
      inputOne = display.textContent;
      oper = "";
      text= "";
      }
    }else{
      switch (buttons.item(i).id){
        case "multiply":
        case "divide":
        case "add":
        case "substract":
          if (inputOne == null){
            inputOne = text;
            oper = buttons.item(i).textContent;
            display.textContent = "";
          }else{
            display.textContent = operate(inputOne,text,buttons.item(i).textContent);
            inputOne = display.textContent;
            oper = "";
            text= "";
          }
      }
      text = display.textContent + buttons.item(i).textContent;
      display.textContent = text;
    }
  });

}