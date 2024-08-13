import modificador from "./modificador.js";

var ingredientes = ["mel", "água", "sal", "mostarda"];

var resultadoCapitalizados = modificador.capitalizar(ingredientes);
var resultadoOrdenados = modificador.ordenar(resultadoCapitalizados);
var resultadoCaixaAlta = modificador.caixaAlta(ingredientes);

console.log(resultadoOrdenados);
console.log(resultadoCapitalizados);
console.log(resultadoCaixaAlta);
