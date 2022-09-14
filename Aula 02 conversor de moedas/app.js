function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmReal = parseFloat(valor);
    var valorEmDolar = valorEmReal * 0.19; 
    var valorEmEuro = valorEmReal * 5.17;
    var valorEmBitcoin = valorEmReal * 104.99488;
    console.log(`${valorEmDolar + "<br>"}`); 
    console.log(`${valorEmEuro + "<br>"}`);
    console.log(`${valorEmBitcoin + "<br>"}`);
  
    document.getElementById('valorConvertido').innerHTML = ` O resultado em dólar é: ${valorEmDolar + "<br>"} O resultado em Euro é: ${valorEmEuro + "<br>"}  O resultado em Bitcoin é: ${valorEmBitcoin}`; 

}
