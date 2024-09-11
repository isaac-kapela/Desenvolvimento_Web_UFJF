function paraVetor<TipoDoItem>(coisa: TipoDoItem): TipoDoItem[]{
    return[coisa];
}

const v1 = paraVetor("Fulano");
const v2 = paraVetor(true);
const v3 = paraVetor({x:1, y:2});

function paraTupla<tipoAluno, TipoNota>(
    a: tipoAluno,
    b: TipoNota
):  [tipoAluno, TipoNota] {
    return[a ,b];

}


const a = paraTupla("fulano", 12);
const b = paraTupla({matricula: "1234", nome: "fulamo"}, [60,70,80])