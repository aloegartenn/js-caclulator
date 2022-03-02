function calculation(){
    let firstNumber = + inputFirstNumber.value;
    let secondNumber = + inputSecondNumber.value;
    let sum = plus.checked;
    let difference = minus.checked;
    let multiplication = multiply.checked;
    let division = divide.checked;

    let answer = 0;
    if(sum){
        answer= firstNumber + secondNumber
    }
    else if(difference){
        answer= firstNumber - secondNumber
    }
    else if(multiplication){
        answer= firstNumber * secondNumber
    }
    else if(division){
        answer= firstNumber / secondNumber
    }
    
    result.innerHTML = answer;
    
}