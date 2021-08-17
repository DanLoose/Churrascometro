// 1 adulto come 300g de carne a cada 4h 
// 1 criança come metade da quantidade de um adulto
// 1 adulto bebe 1200ml de cerveja a cada 4h
// crianças nao bebem mas bebem 1600ml de refrigerante a cada 4h

let adultosInput = document.getElementById("adultos");
let criancasInput = document.getElementById("criancas");
let horasInput = document.getElementById("horas");

let resultado = document.getElementById("resultado");

function calcular(){

    let adultos = adultosInput.value;
    let criancas = criancasInput.value;
    let horas = horasInput.value;
    
    let resultadoCarne = adultos * carnePP(horas) + (carnePP(horas)/2) * criancas;
    let resultadoCerveja = adultos * cervejaPP(horas);
    let resultadoRefrigerante = criancas * refriPP(horas);

    resultado.innerHTML = `<p> ${resultadoCarne/1000} Kg de carne </p>`;
    resultado.innerHTML += `<p> ${Math.ceil(resultadoCerveja/355)} latas de cerveja </p>`;
    resultado.innerHTML += `<p> ${Math.ceil(resultadoRefrigerante/2000)} Garrfas de refrigerante </p>`;
}

function carnePP(horas){
    let multiplicador = Math.floor(horas/4) + 1;
    return 300 * multiplicador;
}
function cervejaPP(horas){
    let multiplicador = Math.floor(horas/4) + 1;
    return 1200 * multiplicador;
}
function refriPP(horas){
    let multiplicador = Math.floor(horas/4) + 1;
    return 1600 * multiplicador;
}