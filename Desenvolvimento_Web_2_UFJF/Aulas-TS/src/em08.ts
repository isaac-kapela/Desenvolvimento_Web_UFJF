type tuplalNomeValor = [ string, number];


const tuplal: [string, number] = ["fulamo", 1233];
const tuplal1: [string, number] = ["fulamo", 1233];
const tuplal2: [string, number] = ["fulamo", 1233];


const tuplas: tuplalNomeValor[] = [];

tuplas.push(tuplal)
tuplas.push(["patricia", 45]);
console.log(tuplal[0], tuplal[1]);
console.log(tuplas[1][1]);

