//functions to do calculations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
function clear(){
    return 0;
}
function dot(number){
    if (!number.toString().includes('.')){
                
        return number+'.'
    }
    else{
        return number
    }
    
}

let firstNumber,operator,secondNumber;
function operate(first,operator,second){
    return operator=='+'?add(first,second):
    operator=='-' ?subtract(first,second):
    operator=='*' ?multiply(first,second):
    operator=='/' ?divide(first,second):
    operator=='=' ?equal(first,second):
    clear();
}
let buttons= document.querySelectorAll('button');

buttons.forEach(button=>button.addEventListener('mouseover',()=>{button.style.backgroundColor='#808080';}))
buttons.forEach(button=>button.addEventListener('mouseout',()=>{button.style.backgroundColor='white';}))
buttons.forEach(button=>button.addEventListener('click',()=>{
    if (button.parentNode.parentNode.className=='numbers' & button.className!='dot'){
        if (typeof operator!='undefined'){
            if (typeof secondNumber=='undefined'){
                secondNumber=Number(button.textContent);
                document.querySelector('.display').textContent=secondNumber;
            }    
            else{
                secondNumber=Number(secondNumber+button.textContent);
                document.querySelector('.display').textContent=secondNumber;}

            
        }
        
        else{
            if (typeof firstNumber=='undefined'){
                firstNumber=Number(button.textContent);
                document.querySelector('.display').textContent=firstNumber;
            }    
            else{
                firstNumber=Number(firstNumber+button.textContent);
                document.querySelector('.display').textContent=firstNumber;}
            }
    }
    
    else if (button.className=='dot'){
        if (typeof operator!='undefined'){
            (typeof secondNumber=='undefined'?secondNumber=0:secondNumber=secondNumber)
            secondNumber=dot(secondNumber)
            document.querySelector('.display').textContent=secondNumber;
        }
        else{
            (typeof firstNumber=='undefined'?firstNumber=0:firstNumber=firstNumber)
            firstNumber=dot(firstNumber)
            document.querySelector('.display').textContent=firstNumber;
        }
    }
    
    else if (button.parentNode.className=='operators'){
        if (button.className!='equal'){ operator=button.textContent;}
        if (button.className=='clear'){ 
            document.querySelector('.display').textContent=0;
            firstNumber=undefined;
            operator=undefined;
            secondNumber=undefined;
        }
        if (firstNumber!=undefined &secondNumber!=undefined){
            
            let sum=operate(parseFloat(firstNumber),operator,parseFloat(secondNumber));
            document.querySelector('.display').textContent=sum;
            firstNumber=sum;
            secondNumber=undefined;
        }
        
    
        
    
    


    }
    
}))