function adicionarFilme() {
   var nomeFilme = document.getElementById("nome").value;
    var filmeFavorito = document.getElementById("filme").value;
        if (filmeFavorito.endsWith(".jpg" ||".png")) {
          // endsWith =  termina com..
         listarFilmeNaTela(filmeFavorito);
      // da forma acima, quando uma imagem for adicionada na lista, as proximas não removerão a antiga ou ficarão por cima! 
         } else {
      alert("Nome e/ou endereço de filme inválido");
      // console.error = imprime uma mensagem de erro no console 
      // alert = imprime uma mensagem de erro no console
      // == significa igual a..
      // || significa "ou"
         }
    // verifica se o campo está em branco
         if( nomeFilme == null || filmeFavorito == null) {
         alert("É necessário digitar o nome do filme");

         }
     
         document.getElementById("filme").value = ""; 
         document.getElementById("nome").value = "";}
         // quando usamos "" sem nada dentro, é pra ser considerado como "nada,0, undefined".

     // listar capa do filme e título
     // figcaption = marcar o cabeçalho ou legenda para uma figura
     function listarFilmeNaTela (filme, nome) {
     var nomeFilme = document.getElementById("nome").value;
     var elementoFilmeFavorito = `<figure><img src=${filme}><figcaption>${nomeFilme}</figcaption></figure>`;
     var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
     }

     function apagarFilme() {
      document.getElementById("listaFilmes").innerHTML = "";
    }
    
    document.addEventListener("keydown", function (deletarFilme) {
      if (deletarFilme.key === "Enter") {
        adicionarFilme();
      }
    });
   