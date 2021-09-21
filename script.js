function Converter() {
  var valorElemento = document.getElementById("valorDolar");

  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5.25;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;

  console.log(elementoValorConvertido);
}

function Converter1() {
  var valorElemento = document.getElementById("valorEuro");

  var valor = valorElemento.value;
  var valorEmReal = parseFloat(valor);

  var valorEmEuro = valorEmReal * 6.2;
  console.log(valorEmEuro);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmEuro;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function Converter2() {
  var valorElemento = document.getElementById("valorBitcoin");

  var valor = valorElemento.value;
  var valorEmReal = parseFloat(valor);

  var valorEmBitcoin = valorEmReal * 252072.96;
  console.log(valorEmBitcoin);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmBitcoin;
  elementoValorConvertido.innerHTML = valorConvertido;
}
