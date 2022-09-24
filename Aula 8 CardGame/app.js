let cartas = [
    (carta1 = {
      nome: "Furia da Noite",
      imagem:"https://i1.sndcdn.com/artworks-X7wZhgHfeear6CEW-f6SszQ-t500x500.jpg",
      atributos: {
        ataque: 15,
        defesa: 8,
        nivelfogo: 10
      }
    }),
    (carta2 = {
      nome: "Canção da Morte",
      imagem:
        "http://pm1.narvii.com/6738/b3db1eea12c865a660312cbf89ae6c12570fdfc5v2_00.jpg",
      atributos: {
        ataque: 8,
        defesa: 9,
        nivelfogo: 8
      }
    }),
    (carta3 = {
      nome: "Ziperarrepiante",
      imagem:
        "https://i.pinimg.com/236x/e1/5b/cb/e15bcb15727cdfc1dbc6606ccb8304bc.jpg",
      atributos: {
        ataque: 12,
        defesa: 10,
        nivelfogo: 4
      }
    }),
    (carta4 = {
      nome: "Tufãomerangue",
      imagem:
        "imagens/Tufaomerangue.jpg",
      atributos: {
        ataque: 2,
        defesa: 9,
        nivelfogo: 10
      }
    }),
    (carta5 = {
      nome: "Nadder Mortal",
      imagem:
        "https://i.pinimg.com/236x/f1/b7/78/f1b778541e5a3c9c1c747edb76d2d8a2.jpg",
      atributos: {
        ataque: 21,
        defesa: 25,
        nivelfogo: 32
      }
    }),
    (carta6 = {
      nome: "Espectro da Areia",
      imagem:
        "http://pm1.narvii.com/6582/6c4147c0e9b08d49f2b3af312148b3ab2de75cbf_00.jpg",
      atributos: {
        ataque: 9,
        defesa: 8,
        nivelfogo: 9
      }
    })
  ];
  
  //inicio
   var cartaMaquina;
   var cartaJogador;
   var placar = [0,0];
   exibirPlacar(); 
  
  function sortearCarta() {
    zerarCarta("carta-jogador");
    zerarCarta("carta-maquina");
    resultado.innerHTML = "";

    var numeroCarta = parseInt(Math.random() * 6);
    cartaMaquina = cartas[numeroCarta];
    cartaJogador = cartas[numeroCarta];

    while (cartaJogador == cartaMaquina) {
        numeroCarta = parseInt(Math.random()*6);
        cartaJogador = cartas[numeroCarta];
    }
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributo.length; i++) {
      if (radioAtributo[i].checked) {
        return radioAtributo[i].value;
      }
    }
  }
  
    function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
  
    while (isNaN(atributoSelecionado)) {
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) 
    {
         placar[0]++; htmlResultado = "<p class='resultado-final'>Você derrotou o inimigo, clique sortear para lutar novamente!</p>"; break;

    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    )
     {
         placar[1]++; htmlResultado = "<p class='resultado-final'>Você foi derrotado, clique sortear para lutar novamente!</p>"; break;
    
    } else if (
        isNaN(cartaJogador.atributos[atributoSelecionado]) ||
        isNaN(cartaMaquina.atributos[atributoSelecionado]))
     {
        htmlResultado = "<p class='resultado-final'>Selecione um tipo de batalha !!!</p>";
      divResultado.innerHTML = htmlResultado;
      
      return;
    } else {
      htmlResultado = "<p class='resultado-final'>Empatou, clique sortear para lutar novamente!!</p>";
    }
  }
    divResultado.innerHTML = htmlResultado;
  
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnSortear").disabled= false;
    exibirCartaMaquina();
    exibirPlacar();

  }
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url("${cartaJogador.imagem}")`;
    // divcartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"

    var moldura =
      '<img src="imagens/cardgame edit.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url("${cartaMaquina.imagem}")`;
    // divcartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="imagens/cardgame edit.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }

  function exibirPlacar() {
    var placarJogador = document.getElementById("pJogador");
    var placarMaquina = document.getElementById("pMaquina");
    console.log(placarJogador);
    placarJogador.innerHTML = `Treinador: ${placar[0]} `;
    placarMaquina.innerHTML = `Inimigo: ${placar[1]} `;
  }

  function zerarCarta(id) {
    var idCarta = document.getElementById(id);
    var idCartaTexto = '<img src="imagens/cardpronto2.png" style=" width: inherit; height: inherit; position: absolute;">';
    idCarta.innerHTML= idCartaTexto;
  }
