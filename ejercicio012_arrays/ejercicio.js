let nombres = Array("Pedro","Ana","Arturo","Susana","Victor","Nía")
nombres[nombres.length]="Victor";
nombres.push("Nía");

/*
console.log(nombres);
let resultado =
    nombres.filter((nombre) => nombre.length >4 && nombre.toUpperCase().includes("A"));
console.log(resultado);
*/

/*
let transformado = nombres.map((nombre) => "algo")
console.log(transformado)
*/

/*
let cambiar = nombres.map((nombre) => nombre.replaceAll('a','@'));
console.log(cambiar);
*/

let resultado = nombres.map(nombre => nombre.replaceAll('n','N')).filter(nombre=>nombre.length<5);
console.log(resultado)