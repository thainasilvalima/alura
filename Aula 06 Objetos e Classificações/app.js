//          chave.  valor.
var Ninjas = { nome: "Ninjas", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };
var Furia = { nome: "Furia", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };
var Liquid = { nome: "Liquid", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };
// toda vez que for criar uma lista de objetos usar "={...}"

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

Ninjas.pontos = calculaPontos(Ninjas);
Furia.pontos = calculaPontos(Furia);
Liquid.pontos = calculaPontos(Liquid);

var jogadores = [Ninjas, Furia, Liquid];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}

function zerarTudo (i) {
    if ( alert("Tem certeza que deseja remover a pontuação de todos os jogadores?")) {
      for ( var i = 0; i < jogadores.length; i++ ){
      var jogador = jogadores[i];
    jogador.vitorias=0;
    jogador.empates=0;
    jogador.derrotas =0;
    jogador.pontos =0;
   }
   alert("Pontuação removida com sucesso");  
 } else {
  alert("Operação cancelada! Os pontos foram mantidos");
 }
   exibeJogadoresNaTela(jogadores);
  }


