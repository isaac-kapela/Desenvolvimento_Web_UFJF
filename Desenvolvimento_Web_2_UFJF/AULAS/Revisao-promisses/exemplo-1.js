const minhaPromessa = new Promise(function(resultado, rejeicao) {
    const nome  = "Isaac"

    if( nome === "Isaac"){
        resultado("Usuario isaac encontrado")
    }else{
        rejeicao("Usuario não encontrado")
    }

});

// minhaPromessa.then(function(dados){
//     console.log(dados)
// });

// Encadeamento de thens

const minhaPromessa2 = new Promise(function(resultado, rejeicao) {
    const nome  = "Isaac"

    if( nome === "Isaac"){
        resultado("Usuario isaac encontrado")
    }else{
        rejeicao("Usuario não encontrado")
    }

});

minhaPromessa2.then(function(dados){
    return  dados.toLowerCase()
})
.then(function(StringModificada){
    console.log(StringModificada)
});


// Tratamento do erro === (catch)

const minhaPromessa3 = new Promise(function(resultado, rejeicao) {
    const nome  = "kapela"

    if( nome === "Isaac"){
        resultado("Usuario isaac encontrado")
    }else{
        rejeicao("Usuario não encontrado")
    }

});

minhaPromessa3.then(function(dados){
    console.log(dados)
})
.catch(function(erro){
    console.log("Aconteceu um erro: " + erro)
});


// Resolvendo varias promessas de uma vez só

// o metodo all espera que todas as promessas sejam resolvidas para executar o then

const promessa1 = new Promise(function(resultado, rejeicao){
    console.log("Promessa 1 ok")
})

const promessa2 = new Promise(function(resultado, rejeicao){
    console.log("Promessa 2 ok")
})

const promessa3 = new Promise(function(resultado, rejeicao){
    console.log("Promessa 3 ok")
})

const resolveTudo  = Promise.all([promessa1, promessa2, promessa3]).then(function(dados){
console.log(dados)
})


// o metodo race espera que a primeira promessa seja resolvida para executar o then


const promessa4 = new Promise(function(resultado, rejeicao){
    setTimeout(()=>{
        resultado("Promessa 4 ok")

    }, 2000)
})

const promessa5 = new Promise(function(resultado, rejeicao){
    setTimeout(()=>{
        resultado("Promessa 5 ok")

    }, 5000)
})

const promessa6 = new Promise(function(resultado, rejeicao){
    setTimeout(()=>{
        resultado("Promessa 6 ok")

    }, 500)
})

const resolveTodasCorridas  = Promise.all([promessa4, promessa5, promessa6]).then(function(dados){
console.log(dados)
})