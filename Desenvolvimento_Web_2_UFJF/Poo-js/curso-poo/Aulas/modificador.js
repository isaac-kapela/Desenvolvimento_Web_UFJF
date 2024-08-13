function capitalizar(vetor) {
  var vetorModificado = [];

  for (var i = 0; i < vetor.length; i++) {
    var letraInical = vetor[i].charAt(0).toUpperCase();
    var restoDaPalavra = vetor[i].slice(1);
    var palavraToda = letraInical + restoDaPalavra;

    vetorModificado[i] = palavraToda;
  }
  return vetorModificado;
}

function ordenar(vetor) {
  return vetor.sort(function (a, b) {
    return a.localeCompare(b);
  });
}

function caixaAlta(vetor) {
  var vetorModificado = [];

  for (var i = 0; i < vetor.length; i++) {
    vetorModificado[i] = vetor[i].toUpperCase();
  }

  return vetorModificado;
}

export default {
  capitalizar: capitalizar,
  ordenar: ordenar,
  caixaAlta: caixaAlta,
};
