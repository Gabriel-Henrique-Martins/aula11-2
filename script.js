function soma(){
    let num1 = document.querySelector("#num1")
    let num2 = document.querySelector("#num2")
    let resultado = document.querySelector("#resultado")
    resultado.innerHTML = `Resultado = ${parseFloat(num1.value)+parseFloat(num2.value)}`;
}
function sub(){
    let num1 = document.querySelector("#num1")
    let num2 = document.querySelector("#num2")
    let resultado = document.querySelector("#resultado")
    resultado.innerHTML = `Resultado = ${parseFloat(num1.value)-parseFloat(num2.value)}`;
}
function mult(){
    let num1 = document.querySelector("#num1")
    let num2 = document.querySelector("#num2")
    let resultado = document.querySelector("#resultado")
    resultado.innerHTML = `Resultado = ${parseFloat(num1.value)*parseFloat(num2.value)}`;
}
function div(){
    let num1 = document.querySelector("#num1")
    let num2 = document.querySelector("#num2")
    let resultado = document.querySelector("#resultado")
    resultado.innerHTML = `Resultado = ${parseFloat(num1.value)/parseFloat(num2.value)}`;
}