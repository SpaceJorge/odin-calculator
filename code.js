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
  return (numBig - numSmall)
}
  
function sumNum(numOne,numTwo) {
  return (numOne + numTwo);
}
  
function multiplyNum(numOne,numTwo) {
  let mult = numOne*numTwo;
  mult = +mult.toFixed(8);
  return mult;
}

function divideNum(numOne,numTwo) {
  if (numTwo == 0){
      
    return "Can't divide by 0!"
  }
  let div = numOne / numTwo;
  div = +div.toFixed(8);
  return div;
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
  numOne = parseFloat(numOne);
  numTwo = parseFloat(numTwo);
  if ( typeof(numOne) != "number" || typeof(numTwo)!= "number"){
    return "Error in inserted data.";
  }
  switch (operator) {
    case  "+":
      return sumNum(numOne,numTwo);
      break;
    case "-":
      return subtractNum(numOne,numTwo);
      break;
    case "x":
      return multiplyNum(numOne,numTwo);
      break;
    case "/":
      return divideNum(numOne,numTwo);
      break;
    default:
      return "Operator not recognized.";
      break;
  }
}

function cleanDisplay(id){
  const displayText = display.textContent;
  const lastChar = displayText.charAt(display.textContent.length-1);

  if ((displayText == "Uh, you turned me on!")|| (displayText == "Can't divide by 0!")){
    display.textContent = "";
  } else if ((inputOne != null) && ( (lastChar == "/")||(lastChar == "x")||(lastChar == "-")||(lastChar == "+"))&&(id != "backspace")&&(id != "equals")){
    text = "";
    display.textContent = "";
  }else if (displayText != text){
    text = "";
    display.textContent = "";
  }
}
function clearData(){
  text = "";
  display.textContent = "";
  inputOne = null;
  oper = "";
  dot.disabled = false;
}
function backspace(){
  if (text != ""){
    text = display.textContent;
    text = text.slice(0,text.length-1);
    display.textContent = text;
  }
}


/*
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
*/
const display = document.querySelector("#display");
const buttons = document.getElementsByTagName("button");
const dotButton = document.getElementById("dot");
let text = "";
let inputOne = null;
let oper = "";



for(let i = 0; i< buttons.length; i++){
  buttons.item(i).addEventListener("click",()=>{
    //audio and style modifiers
    const dataKey = buttons.item(i).getAttribute("data-key");
    const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
    audio.currentTime = 0;
    audio.play();
    buttons.item(i).classList.add("touched");
    
    //calculator functionality
    cleanDisplay(buttons.item(i).id);
    
    if ((text == "")&&(inputOne == null)) {
      switch (buttons.item(i).id){
        case "multiply":
        case "divide":
        case "add":
          display.textContent = "First you need to type a number or minus sign.";
          break;
        case "equals":
          display.textContent = "What does nothing really equal to? I think we need a philosophy textbook.";
          break;
        case "backspace":
          display.textContent = "";
          break;
        case "clear":
          clearData();
          break;
        default:
          text = buttons.item(i).textContent;
          display.textContent = text;
          break;
      }
      
    }else if (buttons.item(i).id == "clear"){
      clearData();
    }else if (buttons.item(i).id == "backspace"){
      backspace();
    }else if (buttons.item(i).id == "equals"){
      
      if ((oper != "")&&(text != "")){
        display.textContent = operate(inputOne,text,oper);
        if (display.textContent == "Can't divide by 0!"){
          clearData();
          display.textContent ="Can't divide by 0!";
        } else if (display.textContent == "Error in inserted data."){
          clearData();
          display.textContent ="Error in inserted data.";
        } else{
          inputOne = display.textContent;
          oper = "";
          text= "";
        }
      }

    }else{
      switch (buttons.item(i).id){
        case "multiply":
        case "divide":
        case "add":
        case "subtract":
          if (inputOne == null){
            inputOne = text;
            oper = buttons.item(i).textContent;
            display.textContent = oper;
            
          }else if (text != ""){
            inputOne = operate(inputOne,text,oper);
            if (inputOne == "Can't divide by 0!"){
              clearData();
              display.textContent = "Can't divide by 0!";
            }else if (display.textContent == "Error in inserted data."){
              clearData();
              display.textContent ="Error in inserted data.";
            }else{
              oper = buttons.item(i).textContent;
              display.textContent = inputOne + oper;
              text = "";
            }  
          }else{
            oper = buttons.item(i).textContent;
            display.textContent = oper;
          }
          break;
        default:
          text = display.textContent + buttons.item(i).textContent;
          display.textContent = text;
          break;
      }
      
    }
  });

}

window.addEventListener("keydown", function(e){
  //audio and style modifiers
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const button = this.document.querySelector(`button[data-key="${e.keyCode}"]`)
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  button.classList.add("touched");

  //calculator functionality
  cleanDisplay(button.id);
    
  if ((text == "")&&(inputOne == null)) {
    switch (button.id){
      case "multiply":
      case "divide":
      case "add":
        display.textContent = "First you need to type a number or minus sign.";
        break;
      case "equals":
        display.textContent = "What does nothing really equal to? I think we need a philosophy textbook.";
        break;
      case "backspace":
        display.textContent = "";
        break;
      case "clear":
        clearData();
        break;
      default:
        text = button.textContent;
        display.textContent = text;
        break;
    }
    
  }else if (button.id == "clear"){
    clearData();
  }else if (button.id == "backspace"){
    backspace();
  }else if (button.id == "equals"){
    
    if ((oper != "")&&(text != "")){
      display.textContent = operate(inputOne,text,oper);
      if (display.textContent == "Can't divide by 0!"){
        clearData();
        display.textContent ="Can't divide by 0!";
      } else if (display.textContent == "Error in inserted data."){
        clearData();
        display.textContent ="Error in inserted data.";
      } else{
        inputOne = display.textContent;
        oper = "";
        text= "";
      }
    }

  }else{
    switch (button.id){
      case "multiply":
      case "divide":
      case "add":
      case "subtract":
        if (inputOne == null){
          inputOne = text;
          oper = button.textContent;
          display.textContent = oper;
          
        }else if (text != ""){
          inputOne = operate(inputOne,text,oper);
          if (inputOne == "Can't divide by 0!"){
            clearData();
            display.textContent = "Can't divide by 0!";
          }else if (display.textContent == "Error in inserted data."){
            clearData();
            display.textContent ="Error in inserted data.";
          }else{
            oper = button.textContent;
            display.textContent = inputOne + oper;
            text = "";
          }  
        }else{
          oper = button.textContent;
          display.textContent = oper;
        }
        break;
      default:
        text = display.textContent + button.textContent;
        display.textContent = text;
        break;
    }
    
  }
});

function removeTransition(e){
  if (e.propertyName !== "transform") return; 
  this.classList.remove("touched");
}

const keys = document.querySelectorAll("button");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
