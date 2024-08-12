var ingredientes = ["mel", "água", "sal", "mostarda"];

function capitalizar(ingredientes) {
   var vetorModificado = [];

   for (var i = 0; i < ingredientes.length; i++) {
      var letraInical = ingredientes[i].charAt(0).toUpperCase();
      var restoDaPalavra = ingredientes[i].slice(1);
      var palavraToda = letraInical + restoDaPalavra;

      vetorModificado[i] = palavraToda;
   }
return vetorModificado;

}


function ordenar(ingredientes) {
   return ingredientes.sort(function(a, b) {
      return a.localeCompare(b);
   });
}
var ingredientesCapitalizados = capitalizar(ingredientes);
var ingredientesOrdenados = ordenar(ingredientesCapitalizados);

console.log(ingredientesOrdenados);
console.log(ingredientesCapitalizados);