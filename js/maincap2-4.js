function calcularPreco(){
    //cria referência aos elementos da página
    var inQuilo = document.getElementById("inQuilo");
    var inConsumo = document.getElementById("inConsumo");
    var outValore = document.getElementById("outValore");

    //obtêm conteúdo dos campos de entrada para
    var quilo = Number.parseInt(inQuilo.value);
    var consumo = Number(inConsumo.value);
    //calcula valor a ser pago
    var valor = (quilo/1000)*consumo;
    //altera conteúdo da linha de resposta
    outValor. textContent = "Valor a pagar R$: " + valor.toFixed(2);
}
//cria referencia ao elemento btCalcular
var btCalcular = document.getElementById("btCalcular");
//registra um evento associado ao botão, para carregar um função
btCalcular.addEventListener("click",calcularPreco);