function press(){
    let mass = +firstInput.value;
    let repeat = +secondInput.value;
    let formul = (mass * repeat) / 30 + mass;
    formul = Math.round(formul) / 10 * 10
    result.innerHTML = formul;
}