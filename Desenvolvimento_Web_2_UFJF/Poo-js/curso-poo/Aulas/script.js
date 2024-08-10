 var ingredientes = ["mel", "água", "sal", "mostarda" ];
 var vetorModificado = [];

 for (var i = 0; i < ingredientes.length; i++) {
    var letraInical = ingredientes[i].charAt(0).toUpperCase();
    var restoDaPalavra = ingredientes[i].slice(1);
    var palavraToda = letraInical + restoDaPalavra;


    vetorModificado[i] = palavraToda;
 }

 var ordenado = vetorModificado.sort(function(a,b){
    return a.localeCompare(b);
 });
console.log(ordenado);