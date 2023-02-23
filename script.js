// const h1 = document.querySelector("h1");
// const p = document.querySelector("p");
// const parrafito = document.querySelector(".parrafito");
// const pid = document.getElementById("pid");
// const input = document.querySelector("input");
// Por si me olvido mirar aca

// const h1 = document.querySelector("h1");
// const input1 = document.querySelector("#calculo1");
// const input2 = document.querySelector("input");
// const btn = document.querySelector("btnCalcular");
// const pResult =document.querySelector('#result');

// function btnOnclick(){
//     const sumaImputs = input1.value + input2.value;
//     pResult.innerText = "resultado:" + sumaInputs;
// }
// Este es el primer ejercicio que habia hecho

// const input1 = document.getElementById('calculo1')
// const input2 = document.getElementById('calculo2')
// const btnCalcular = document.getElementById('btnCalcular')
// const resultado =  document.getElementById('result')


// function btnOnclick(){
//     const sumaInput = parseInt(input1.value) + parseInt(input2.value);
//     resultado.innerText = "Resultado "+sumaInput
// } => este es el correcto

const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = docement.querySelector("input");
const btn = document.querySelector("btnCalcular");
const pResult = document.querySelector("#result");

btn.addEventListener("click", btnOnclick);

function sumarInputValues(event){
    event.preventDefault();
    const sumaInputs = input.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}





