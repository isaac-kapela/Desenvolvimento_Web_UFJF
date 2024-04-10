import http from 'node:http';

const PORTA = 8080;
const server = http.createServer(tratarRequisicao);
server.listen(PORTA)
console.log(`Servidor rodando na porta http://127.0.0.1:${PORTA}`);

function tratarRequisicao(req, res) {
  res.write('Olá, mundo!');
  res.end();
}
