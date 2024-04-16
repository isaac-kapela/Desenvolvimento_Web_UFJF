// fetch request na API do github
// fetch('https://api.github.com/users/tryber/repos')

const NomeUsuario = "isaac-kapela";

fetch(`https://api.github.com/users/${NomeUsuario}`, {
  method: "GET",
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
})
  .then(function (resposta) {
    console.log(typeof resposta);
    console.log(resposta);

    return resposta.json();
  })
  .then(function (dados) {
    console.log(dados);
  })
  .catch(function (error) {
    console.log(error);
  });
