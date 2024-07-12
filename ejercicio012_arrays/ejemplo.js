let dias = ["lunes","martes","miercóles","jueves","viernes","sábado","domingo"];

console.log(dias[0]);//lunes
console.log(dias[-1]);//undefined
console.log(dias.length);//7
console.log(dias[dias.length-1]);//domingo
console.log(dias[7]);//undefined


//Bucle for viejuno
for (let i=0;i<dias.length;i++){
    console.log(`DIA:${dias[i]}`);
}

//Bucle forEach
dias.forEach(dia => function(){
    console.log()
})