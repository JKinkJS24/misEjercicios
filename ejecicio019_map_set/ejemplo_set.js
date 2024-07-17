let frutasVerano = new Set(["Melón","Sandía","Higo","Nectarina","Naranja"]);
let frutasInvierno = new Set(["Fresa","Naranja","Limón","Mandarina"]);
let frutasAnuales = frutasInvierno.intersection(frutasVerano);
for (fruta of frutasAnuales){
    console.log(fruta);
}
