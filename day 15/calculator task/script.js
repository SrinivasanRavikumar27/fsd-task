
let expression = '';
let historys = [];

function appendToDisplay(value){
expression += value;
document.getElementById('display').value = expression;
}

function Clear(){
    expression = document.getElementById('display').value;
    document.getElementById('display').value = expression.slice(0,-1);
}

function allClear(){
    expression = '';
    document.getElementById('display').value = expression;
}

function calculate(){
    try{
    const expression1 = expression;
    const result = eval(expression);
    expression = String(result);
    document.getElementById('display').value = expression;
    history(expression1+ " = " +expression);
    }catch{
        alert("Invalid Expression");
        allClear();
    }
}

document.addEventListener('keypress',function(event){
    const key = event.key;
    if(/\d/.test(key)){
        appendToDisplay(key);
    }else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
        appendToDisplay(key);
      } else if (key === '.' && !expression.includes('.')) {
        appendToDisplay(key);
      } else if (key === 'Enter') {
        calculate();
      }else {
        alert('Only numbers are allowed');
      }
})



function history(expression){
    if(historys.length >= 10){
        historys.shift();
    }

    historys.push(expression);

    const historyList = document.getElementById('history-list');

    historyList.innerHTML = '';

    for(var i = 0;i <= historys.length - 1;i++){

     const listItem = document.createElement('li');
     listItem.innerHTML = historys[i];
     historyList.appendChild(listItem);

    }

}

function ClearHistory(){
    historys = [];
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
}


