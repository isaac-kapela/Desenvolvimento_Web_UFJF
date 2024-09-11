type ponto = {
    x: number;
    y: number;
}

interface pontoImutavel{
    readonly x : number;
    readonly y : number;
}

let p: ponto = {x:1, y:2};
p.y =10;

function imprimePonto(ponto: pontoImutavel){
    console.log(`x:${ponto.x} e y:${ponto.y}`);
}