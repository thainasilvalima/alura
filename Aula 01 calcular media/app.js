//Aula 01 revisão - variáveis, strings, console.log, toFixed(), operações matemáticas, concatenação.

function calcular(){

    var notaUm = document.getElementById("notaUm").value;
    var notaDois = document.getElementById("notaDois").value;
    var notaTres = document.getElementById("notaTres").value;
    var notaQuatro = document.getElementById("notaQuatro").value;
    
      var media = (Number (notaUm) + Number (notaDois) + Number(notaTres) + Number(notaQuatro)) /4;
    
    if (media >= 6) {
        resultado.innerHTML = media + " Aprovado!";
        resultado.style.color='green';
     }
    
    if(media <  6) {
        resultado.innerHTML = media + " Reprovado!";
        resultado.style.color='red';
    }
      else if (media >10){
        resultado.innerHTML = "Você deve digitar um número até 10";
        resultado.style.color='red';
       }
     
    }