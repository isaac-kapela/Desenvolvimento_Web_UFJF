function fncapitalizarNovo(colecao,atributo){
  if(typeof colecao[0] == 'object'){
    var resultado =  colecao.map(function(obj){
      var letraInical = obj[atributo].charAt(0).toUpperCase();
      var restoDaPalavra = obj[atributo].slice(1);
      obj[atributo]  = letraInical + restoDaPalavra;
  
      

      return obj;
    })
  }
  else{
    var resultado =  colecao.map(function(palavra){
      var letraInical = palavra.charAt(0).toUpperCase();
      var restoDaPalavra = palavra.slice(1);
      var palavraToda = letraInical + restoDaPalavra;
  
      return palavraToda;
    })
  }

}

function fncapitalizar(vetor) {
  var vetorModificado = [];

  for (var i = 0; i < vetor.length; i++) {
    var letraInical = vetor[i].charAt(0).toUpperCase();
    var restoDaPalavra = vetor[i].slice(1);
    var palavraToda = letraInical + restoDaPalavra;

    vetorModificado[i] = palavraToda;
  }
  return vetorModificado;
}

function fnordenar(vetor) {
  return vetor.sort(function (a, b) {
    return a.localeCompare(b);
  });
}

function fncaixaAlta(vetor) {
  var vetorModificado = [];

  for (var i = 0; i < vetor.length; i++) {
    vetorModificado[i] = vetor[i].toUpperCase();
  }

  return vetorModificado;
}

export default {
  capitalizar: fncapitalizar,
  capitalizarNovo: fncapitalizarNovo,
  ordenar: fnordenar,
  caixaAlta: fncaixaAlta,
};
